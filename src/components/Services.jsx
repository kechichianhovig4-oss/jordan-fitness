import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: 'fitness_center' },
    { id: 'strength', name: 'Strength Training', icon: 'fitness_center' },
    { id: 'endurance', name: 'Endurance & Cardio', icon: 'directions_run' },
    { id: 'mobility', name: 'Mobility & Recovery', icon: 'flexibility' },
    { id: 'sports', name: 'Sport-Specific', icon: 'sports_soccer' },
    { id: 'nutrition', name: 'Nutrition Coaching', icon: 'restaurant' }
  ];

  // Services data - 25 services across 5 categories
  const services = [
    // Strength Training (5 services)
    { id: 1, name: "Foundation Strength Program", category: "strength", duration: "60 min", price: "$85", description: "Build essential strength with proper form and progressive overload. Perfect for beginners.", color: "emerald", level: "Beginner" },
    { id: 2, name: "Powerlifting Development", category: "strength", duration: "75 min", price: "$95", description: "Focus on squat, bench, and deadlift technique with periodized programming.", color: "emerald", level: "Intermediate" },
    { id: 3, name: "Olympic Weightlifting", category: "strength", duration: "75 min", price: "$100", description: "Master the snatch and clean & jerk with expert coaching and technique work.", color: "emerald", level: "Advanced" },
    { id: 4, name: "Functional Strength Circuit", category: "strength", duration: "60 min", price: "$80", description: "Full-body conditioning using compound movements and functional patterns.", color: "emerald", level: "All Levels" },
    { id: 5, name: "Athletic Power Development", category: "strength", duration: "90 min", price: "$110", description: "Explosive power training for sports performance and vertical jump.", color: "emerald", level: "Intermediate" },

    // Endurance & Cardio (5 services)
    { id: 6, name: "Running Mechanics & Efficiency", category: "endurance", duration: "60 min", price: "$85", description: "Improve running form, cadence, and economy for faster times with less injury risk.", color: "blue", level: "All Levels" },
    { id: 7, name: "Marathon Training Program", category: "endurance", duration: "90 min", price: "$110", description: "Comprehensive 16-week plan including pace work, long runs, and recovery strategies.", color: "blue", level: "Intermediate" },
    { id: 8, name: "Cycling Power Optimization", category: "endurance", duration: "75 min", price: "$95", description: "Maximize your FTP and efficiency on the bike with targeted workouts.", color: "blue", level: "Intermediate" },
    { id: 9, name: "VO2 Max & Threshold Training", category: "endurance", duration: "60 min", price: "$90", description: "High-intensity intervals to boost your cardiovascular capacity.", color: "blue", level: "Advanced" },
    { id: 10, name: "Triathlon Transition Training", category: "endurance", duration: "120 min", price: "$150", description: "Brick workouts and transition practice for multi-sport athletes.", color: "blue", level: "Intermediate" },

    // Mobility & Recovery (5 services)
    { id: 11, name: "Dynamic Warm-Up Protocol", category: "mobility", duration: "45 min", price: "$65", description: "Learn proper pre-workout activation and movement preparation.", color: "emerald", level: "All Levels" },
    { id: 12, name: "Deep Tissue & Myofascial Release", category: "mobility", duration: "60 min", price: "$85", description: "Targeted soft tissue work to release chronic tension and improve mobility.", color: "emerald", level: "All Levels" },
    { id: 13, name: "Active Recovery Session", category: "mobility", duration: "60 min", price: "$75", description: "Light movement and stretching to enhance recovery between intense workouts.", color: "emerald", level: "All Levels" },
    { id: 14, name: "Flexibility & Mobility Assessment", category: "mobility", duration: "90 min", price: "$120", description: "Comprehensive evaluation with personalized stretching protocol.", color: "emerald", level: "All Levels" },
    { id: 15, name: "Post-Workout Recovery System", category: "mobility", duration: "60 min", price: "$80", description: "Learn cooling down techniques, stretching, and recovery modalities.", color: "emerald", level: "All Levels" },

    // Sport-Specific Training (5 services)
    { id: 16, name: "Basketball Performance", category: "sports", duration: "75 min", price: "$100", description: "Vertical jump, agility, and on-court conditioning for hoops athletes.", color: "blue", level: "Intermediate" },
    { id: 17, name: "Soccer Speed & Agility", category: "sports", duration: "75 min", price: "$100", description: "Footwork, acceleration, and change of direction for soccer players.", color: "blue", level: "Intermediate" },
    { id: 18, name: "Golf Fitness & Rotation", category: "sports", duration: "60 min", price: "$95", description: "Increase club head speed and prevent injury with golf-specific training.", color: "blue", level: "All Levels" },
    { id: 19, name: "Tennis Movement & Power", category: "sports", duration: "75 min", price: "$105", description: "Lateral quickness, rotational power, and court coverage drills.", color: "blue", level: "Intermediate" },
    { id: 20, name: "Combat Sports Conditioning", category: "sports", duration: "90 min", price: "$115", description: "Explosive power, endurance, and neck strength for martial artists.", color: "blue", level: "Advanced" },

    // Nutrition Coaching (5 services)
    { id: 21, name: "Performance Nutrition Basics", category: "nutrition", duration: "60 min", price: "$75", description: "Learn fueling strategies for training and competition.", color: "emerald", level: "Beginner" },
    { id: 22, name: "Body Composition Optimization", category: "nutrition", duration: "75 min", price: "$95", description: "Custom meal planning for fat loss or muscle gain goals.", color: "emerald", level: "Intermediate" },
    { id: 23, name: "Race Day Nutrition Strategy", category: "nutrition", duration: "60 min", price: "$85", description: "Carb-loading, hydration, and race-day fueling plans.", color: "emerald", level: "Intermediate" },
    { id: 24, name: "Supplement Guidance", category: "nutrition", duration: "45 min", price: "$65", description: "Evidence-based supplement recommendations for your goals.", color: "emerald", level: "All Levels" },
    { id: 25, name: "Weekly Meal Planning", category: "nutrition", duration: "90 min", price: "$120", description: "Comprehensive meal prep guidance with grocery lists and recipes.", color: "emerald", level: "All Levels" }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const getColorClass = (color) => {
    switch(color) {
      case 'emerald': return 'bg-emerald-600';
      case 'blue': return 'bg-blue-600';
      default: return 'bg-emerald-600';
    }
  };

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.icon : 'fitness_center';
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen">
      {/* Add custom styles for colors */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          color: #1a2e3f;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* Navigation Bar - Fitness Style */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 md:px-10 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="size-10 text-emerald-500 bg-emerald-50 p-2 rounded-xl">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4L4 14L24 24L44 14L24 4Z" fill="currentColor"/>
              <path d="M4 34L24 44L44 34V20L24 30L4 20V34Z" fill="currentColor"/>
              <path d="M24 30L44 20L24 10L4 20L24 30Z" fill="currentColor" fillOpacity="0.8"/>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Getting Fit with Jordan</h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavClick('/')}
            className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('/Services')}
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('/About')}
            className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('/Contact')}
            className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
          >
            Contact
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('/Contact')}
            className="hidden md:flex min-w-[120px] items-center justify-center rounded-full h-10 px-5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold tracking-wide shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform active:scale-95"
          >
            Start Today
          </button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              <button 
                onClick={() => handleNavClick('/')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors border-b border-gray-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('/Services')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors border-b border-gray-200"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('/About')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors border-b border-gray-200"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('/Contact')}
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
              >
                Contact
              </button>
            </div>
            <button 
              onClick={() => handleNavClick('/Contact')}
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold hover:opacity-90 transition-all"
            >
              <span className="truncate">Start Today</span>
            </button>
          </div>
        </div>
      )}

      <main className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Hero Section - Fitness Focused */}
        <section className="py-10">
          <div className="flex flex-col lg:flex-row gap-10 items-stretch min-h-[400px]">
            {/* Left: High-quality training image */}
            <div className="flex-1 rounded-3xl bg-center bg-cover min-h-[300px] shadow-xl" style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
            }}>
            </div>
            
            {/* Right: Headline and value prop */}
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
                  Training<br/>Programs.<br/><span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Real Results.</span>
                </h1>
                <p className="text-xl font-medium text-gray-600">
                  Choose your path. Commit to the process. Transform your fitness.
                </p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => document.getElementById('services-menu').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-all">
                  View All Programs
                </button>
                <button onClick={() => handleNavClick('/Contact')} className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all">
                  Free Consult
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-8">
          <p className="text-lg font-medium border-l-4 border-emerald-500 pl-4 mb-10 max-w-2xl text-gray-700">
            All training sessions include personalized warm-up, technique coaching, and post-workout recovery guidance. No contracts. No hidden fees.
          </p>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Services Menu */}
        <section id="services-menu" className="py-8">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-gray-900 text-center">
            {activeCategory === 'all' ? 'All Training Programs' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {filteredServices.map((service) => (
              <div key={service.id} className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 border border-gray-200 hover:border-emerald-300 transition-all cursor-pointer shadow-md hover:shadow-xl">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`w-3 h-3 rounded-full ${getColorClass(service.color)} shrink-0`}></span>
                    <h4 className="font-bold text-xl text-gray-900">{service.name}</h4>
                    <span className="bg-emerald-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200">{service.duration}</span>
                    <span className="bg-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 border border-blue-200">{service.level}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0 mt-4 md:mt-0">
                  <span className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">{service.price}</span>
                  <button onClick={() => handleNavClick('/Contact')} className="size-12 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-110">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Packages */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Training Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-100 hover:border-emerald-500 transition-all">
              <h3 className="text-xl font-bold mb-2 text-emerald-600">Starter Package</h3>
              <p className="text-3xl font-black mb-4">$399<span className="text-sm font-normal text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> 4 training sessions</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Initial assessment</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Basic nutrition guide</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Email support</li>
              </ul>
              <button onClick={() => handleNavClick('/Contact')} className="w-full py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all">Get Started</button>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-100 hover:border-blue-500 transition-all scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Pro Package</h3>
              <p className="text-3xl font-black mb-4">$699<span className="text-sm font-normal text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> 8 training sessions</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Full movement assessment</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Custom meal planning</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Weekly check-ins</li>
              </ul>
              <button onClick={() => handleNavClick('/Contact')} className="w-full py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all">Get Started</button>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-100 hover:border-emerald-500 transition-all">
              <h3 className="text-xl font-bold mb-2 text-emerald-600">Elite Package</h3>
              <p className="text-3xl font-black mb-4">$999<span className="text-sm font-normal text-gray-500">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> 12 training sessions</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Comprehensive assessment</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Premium nutrition package</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span> Priority scheduling</li>
              </ul>
              <button onClick={() => handleNavClick('/Contact')} className="w-full py-3 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all">Get Started</button>
            </div>
          </div>
        </section>

        {/* Quick FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">What happens during my first training session?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We'll start with a brief consultation about your goals, followed by a movement assessment to establish your baseline. Then we'll do a sample workout so you can experience our training style firsthand.</p>
              </div>
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">Do I need to be in shape to start?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Absolutely not! We work with clients at every fitness level, from complete beginners to competitive athletes. All programs are tailored to your current abilities.</p>
              </div>
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">What's your cancellation policy?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">We require 24 hours notice for cancellations. Late cancellations may incur a fee equal to 50% of the session price. We appreciate your understanding.</p>
              </div>
              <div className="py-6 space-y-2">
                <h4 className="font-bold text-gray-900">Can I switch between programs?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Yes! Your goals may evolve over time. We're happy to adjust your training focus as needed. Package holders can mix and match services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-center rounded-3xl mb-20 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-8 px-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">Ready to transform your fitness?</h2>
            <p className="text-lg font-medium text-white/90">Book your free consultation today and start your journey toward peak performance.</p>
            <div className="pt-4">
              <button 
                onClick={() => handleNavClick('/Contact')}
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-emerald-600 rounded-full text-xl font-black shadow-2xl hover:scale-105 transition-all"
              >
                Claim Your Free Consultation
                <span className="material-symbols-outlined font-black">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Fitness Style */}
      <footer className="bg-gray-900 text-white py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-emerald-500">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 14L24 24L44 14L24 4Z" fill="currentColor"/>
                  <path d="M4 34L24 44L44 34V20L24 30L4 20V34Z" fill="currentColor"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight text-white">Getting Fit with Jordan</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elite sports fitness coaching dedicated to helping athletes and fitness enthusiasts reach their peak performance through science-based training and personalized attention.
            </p>
          </div>
          
          {/* Col 2 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-emerald-500">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Services'); }} className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/About'); }} className="hover:text-emerald-500 transition-colors">About</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Contact'); }} className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Col 3 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-emerald-500">Training Hours</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><p className="font-bold text-white">Mon - Fri:</p> 6:00 AM - 8:00 PM</li>
              <li><p className="font-bold text-white">Saturday:</p> 8:00 AM - 4:00 PM</li>
              <li><p className="font-bold text-white">Sunday:</p> 9:00 AM - 12:00 PM</li>
              <li className="pt-2 text-emerald-500 text-xs font-bold uppercase italic">Flexible scheduling available</li>
            </ul>
          </div>
          
          {/* Col 4 */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-emerald-500">Contact</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-sm mt-1">mail</span>
                <span>getting.fit.with.jordan@consultant.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-sm mt-1">phone</span>
                <span>(270) 323-8258</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-sm mt-1">location_on</span>
                  <span>311 Denson Ave SW<br/>Cullman, AL 35055</span>
              </div>
              <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600">© 2026 Getting Fit with Jordan. <br/>All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;