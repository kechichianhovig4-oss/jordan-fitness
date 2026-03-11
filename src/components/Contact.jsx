import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
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
            className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
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
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
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
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors border-b border-gray-200"
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
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
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

      <main className="flex-1">
        {/* Hero Section - Fitness Focused */}
        <div className="relative w-full">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-3xl items-start justify-center px-6 md:px-10 pb-10" style={{ 
              backgroundImage: `linear-gradient(to right, rgba(16, 185, 129, 0.9) 0%, rgba(37, 99, 235, 0.8) 100%), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
            }}>
              <div className="flex flex-col gap-4 text-left max-w-2xl">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Let's Start Your Journey
                </h1>
                <p className="text-white/90 text-lg font-normal leading-relaxed max-w-lg">
                  Ready to transform your fitness? Reach out today for a free consultation or to learn more about our training programs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-white text-emerald-600 text-base font-bold shadow-xl hover:bg-gray-100 transition-all">
                  Call or Text Now
                </button>
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-blue-600 text-white text-base font-bold shadow-xl hover:bg-blue-700 transition-all">
                  Send an Email
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-20">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2">Connect With Us</span>
            <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight">How to Reach Coach Jordan</h2>
            <p className="text-gray-600 max-w-lg mt-2">Choose the method that works best for you. We're here to help you achieve your fitness goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">call</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Call or Text</h3>
              <p className="text-gray-600 text-sm mb-4">Fastest way to reach us for questions or to schedule your free consultation.</p>
              <p className="text-emerald-600 font-bold text-lg">(888) FIT-JORDAN</p>
              <p className="text-xs text-gray-500 mt-2 italic">Mon-Fri: 6am-8pm | Sat: 8am-4pm</p>
              <p className="text-xs text-gray-500 mt-1">Text messages welcome 24/7</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Send an Email</h3>
              <p className="text-gray-600 text-sm mb-4">Perfect for detailed questions or program inquiries.</p>
              <p className="text-blue-600 font-bold text-lg">jordan@gettingfit.com</p>
              <p className="text-xs text-gray-500 mt-2 italic">Average response: within 12 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Training Facility</h3>
              <p className="text-gray-600 text-sm mb-4">State-of-the-art fitness center equipped for all your training needs.</p>
              <p className="text-emerald-600 font-bold text-lg">123 Fitness Way</p>
              <p className="text-blue-600 font-bold">Suite 100, Athlete City</p>
              <p className="text-xs text-gray-500 mt-2">Street parking available</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col md:flex-row shadow-xl">
            <div className="w-full md:w-1/3 bg-gradient-to-br from-emerald-600 to-blue-600 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="text-white/90 mb-8">Not sure which program fits your goals? Fill out the form and Coach Jordan will reach out personally to discuss your fitness journey.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-emerald-300">fitness_center</span>
                  <span className="text-sm font-semibold">Customized Training Plans</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-blue-300">nutrition</span>
                  <span className="text-sm font-semibold">Nutrition Guidance Included</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-emerald-300">monitor_heart</span>
                  <span className="text-sm font-semibold">Progress Tracking</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Full Name</label>
                    <input className="w-full rounded-xl border-gray-300 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 p-3" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Email Address</label>
                    <input className="w-full rounded-xl border-gray-300 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 p-3" placeholder="john@example.com" type="email"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Phone Number</label>
                    <input className="w-full rounded-xl border-gray-300 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 p-3" placeholder="(555) 123-4567" type="tel"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900">Primary Goal</label>
                    <select className="w-full rounded-xl border-gray-300 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 p-3">
                      <option>Strength Training</option>
                      <option>Endurance/Cardio</option>
                      <option>Weight Loss</option>
                      <option>Sport-Specific Training</option>
                      <option>General Fitness</option>
                      <option>Recovery & Mobility</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">Your Message</label>
                  <textarea className="w-full rounded-xl border-gray-300 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 p-3" placeholder="Tell me about your fitness goals, any challenges you're facing, and what you hope to achieve..." rows="4"></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-500">
                    <span className="material-symbols-outlined text-[10px] align-middle">lock</span> 
                    Your information is secure and never shared.
                  </p>
                  <button className="w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-8 rounded-full font-bold shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all hover:-translate-y-0.5">
                    Schedule Free Consult
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-emerald-100">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Your Journey With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg transform rotate-45">
                  <span className="material-symbols-outlined text-2xl -rotate-45">phone_in_talk</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">1. Free Consultation</h3>
                <p className="text-gray-600 text-sm">We discuss your goals, assess your current fitness level, and create a personalized plan.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg transform rotate-45">
                  <span className="material-symbols-outlined text-2xl -rotate-45">fitness_center</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">2. Start Training</h3>
                <p className="text-gray-600 text-sm">Begin your customized program with expert coaching and regular progress check-ins.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg transform rotate-45">
                  <span className="material-symbols-outlined text-2xl -rotate-45">emoji_events</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">3. Achieve Results</h3>
                <p className="text-gray-600 text-sm">Track your progress, celebrate milestones, and surpass your fitness goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Quick answers to what new clients usually ask</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-emerald-600">Do I need to be an athlete?</h3>
              <p className="text-gray-600">Not at all! We work with everyone from beginners to professional athletes. All fitness levels welcome.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-600">What should I bring?</h3>
              <p className="text-gray-600">Comfortable workout clothes, athletic shoes, a water bottle, and your goals! We provide the rest.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-emerald-600">How long are sessions?</h3>
              <p className="text-gray-600">Training sessions are typically 60 minutes, including warm-up, main workout, and cool-down.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2 text-blue-600">Do you offer nutrition plans?</h3>
              <p className="text-gray-600">Yes! All our programs include basic nutrition guidance. Premium packages include detailed meal planning.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button onClick={() => handleNavClick('/Services')} className="text-emerald-600 font-bold hover:text-blue-600 transition-colors">
              View All Services →
            </button>
          </div>
        </section>

        {/* Policies Section - Updated for Fitness */}
        <section className="bg-gray-900 text-white py-20 px-4 md:px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-extrabold text-center mb-12">Training Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Column 1: Preparation */}
              <div className="bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-400">
                  <span className="material-symbols-outlined">fitness_center</span> 
                  Getting Ready
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <p className="font-bold text-white">Health History Form</p>
                      <p className="text-sm text-gray-400">Complete online before your first session so we can tailor your program.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <p className="font-bold text-white">What to Wear</p>
                      <p className="text-sm text-gray-400">Moisture-wicking athletic wear and proper training shoes for your sport.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <p className="font-bold text-white">Hydrate & Fuel</p>
                      <p className="text-sm text-gray-400">Arrive hydrated and have a light meal 1-2 hours before training.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Column 2: Policies */}
              <div className="bg-gray-800 p-8 md:p-10 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400">
                  <span className="material-symbols-outlined">rule</span> 
                  Important Policies
                </h3>
                <div className="space-y-8">
                  <div className="p-4 bg-gray-700/50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="font-bold text-blue-400">24-Hour Cancellation</p>
                    <p className="text-sm text-gray-400 mt-1">Please provide 24 hours notice for cancellations. Late cancellations may be subject to a fee.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-white">
                      <span className="material-symbols-outlined text-sm text-gray-400">schedule</span> Late Arrivals
                    </h4>
                    <p className="text-sm text-gray-400">Sessions end at scheduled time to respect other clients. Late arrivals won't receive extended time.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 flex items-center gap-2 text-white">
                      <span className="material-symbols-outlined text-sm text-gray-400">payment</span> Payment Options
                    </h4>
                    <p className="text-sm text-gray-400">Session packages, monthly memberships, or pay-per-session. All major credit cards accepted.</p>
                  </div>
                </div>
              </div>
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

export default ContactPage;