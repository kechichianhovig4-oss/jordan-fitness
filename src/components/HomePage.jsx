import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler
  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen">
      {/* Add custom styles for colors */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body {
          font-family: "Inter", sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          color: #1a2e3f;
        }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      {/* Header - Fitness Style */}
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
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
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
                className="block w-full text-left px-2 py-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors border-b border-gray-200"
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

      {/* Hero Section - Fitness Focused */}
      <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ 
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.8), rgba(37, 99, 235, 0.9)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
          }}>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-white text-4xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
            Transform Your Body. <br/><span className="text-yellow-300">Elevate Your Game.</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Elite sports fitness coaching that bridges the gap between where you are and where you want to be. Train with purpose, recover with science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('programs')}
              className="bg-white text-emerald-600 hover:bg-gray-100 text-base font-bold px-10 py-4 rounded-full transition-all shadow-xl"
            >
              Explore Programs
            </button>
            <button 
              onClick={() => handleNavClick('/Contact')}
              className="bg-transparent hover:bg-white/20 border-2 border-white text-white text-base font-bold px-10 py-4 rounded-full backdrop-blur-md transition-all"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto" id="benefits">
        <div className="mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900">The Athlete's Advantage</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl text-emerald-600 group-hover:text-white">fitness_center</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Strength & Power</h4>
            <p className="text-gray-600 leading-relaxed">Build explosive strength with periodized training programs designed for your specific sport and goals.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white">monitor_heart</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Endurance Training</h4>
            <p className="text-gray-600 leading-relaxed">Optimize your cardiovascular fitness and stamina with science-backed endurance protocols.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-3xl text-emerald-600 group-hover:text-white">flexibility</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Mobility & Recovery</h4>
            <p className="text-gray-600 leading-relaxed">Prevent injuries and enhance performance through targeted mobility work and recovery protocols.</p>
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="py-24 bg-gray-50" id="programs">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">Training Programs</h2>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900">Choose Your Path</h3>
            </div>
            <button 
              onClick={() => handleNavClick('/Services')}
              className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Programs <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Strength */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
                }}></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Elite Strength System</h4>
                <p className="text-gray-600 mb-6">Comprehensive strength training for power athletes focusing on compound lifts and explosive movements.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-gray-900">12-Week Program</span>
                  <button 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-emerald-600 font-bold border-b-2 border-emerald-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Endurance */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  Race Ready
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1552674605-db6ffd0e1c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
                }}></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Endurance Edge</h4>
                <p className="text-gray-600 mb-6">Periodized endurance training for runners, cyclists, and triathletes looking to crush their PRs.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-gray-900">16-Week Program</span>
                  <button 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-emerald-600 font-bold border-b-2 border-emerald-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Athletic Development */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  All-Around
                </div>
                <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
                }}></div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 text-gray-900">Complete Athlete</h4>
                <p className="text-gray-600 mb-6">Holistic athletic development combining strength, speed, agility, and conditioning for all sports.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-gray-900">8-Week Program</span>
                  <button 
                    onClick={() => handleNavClick('/Contact')}
                    className="text-emerald-600 font-bold border-b-2 border-emerald-600 hover:text-blue-600 hover:border-blue-600 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden" id="experience">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')` 
              }}></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-emerald-600 to-blue-600 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-white text-4xl font-black">10+</div>
              <div className="text-white/80 font-bold uppercase tracking-widest text-xs">Years Coaching Excellence</div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2">The Jordan Difference</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Science Meets Results</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Getting Fit with Jordan isn't just another gym. It's a performance center where evidence-based training meets real-world results. We don't just guess - we measure, analyze, and optimize every aspect of your fitness journey.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                <span className="font-bold text-gray-900">Comprehensive Movement Assessment</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                <span className="font-bold text-gray-900">Personalized Training Protocols</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                <span className="font-bold text-gray-900">Nutrition & Recovery Guidance</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                <span className="font-bold text-gray-900">Progress Tracking & Adjustments</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-blue-900 text-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
            <h3 className="text-3xl md:text-5xl font-black">What Our Athletes Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"Jordan's strength program transformed my powerlifting. I added 50lbs to my deadlift in 12 weeks while staying injury-free. The attention to form is unmatched."</p>
              <div>
                <div className="font-black text-xl">Mike Thompson</div>
                <div className="text-emerald-400 font-bold text-sm uppercase">Powerlifter</div>
              </div>
            </div>
            
            {/* Review 2 */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"As a marathon runner, I needed someone who understood endurance training. The periodized plan got me a 15-minute PR at Boston. Game changer!"</p>
              <div>
                <div className="font-black text-xl">Sarah Chen</div>
                <div className="text-emerald-400 font-bold text-sm uppercase">Marathoner</div>
              </div>
            </div>
            
            {/* Review 3 */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"The Complete Athlete program helped me earn a college basketball scholarship. My vertical jump increased by 8 inches and my agility improved dramatically."</p>
              <div>
                <div className="font-black text-xl">Jasmine Williams</div>
                <div className="text-emerald-400 font-bold text-sm uppercase">College Athlete</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Stepper */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Your Journey Starts Here</h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900">Simple 3-Step Process</h3>
        </div>
        <div className="relative flex flex-col md:flex-row justify-between gap-12 max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white border-4 border-emerald-600 rounded-full flex items-center justify-center text-emerald-600 font-black text-2xl mb-6 shadow-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">1</div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Free Consultation</h4>
            <p className="text-gray-600 max-w-[200px]">Meet with us to discuss your goals, assess your current fitness level, and create a plan.</p>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-black text-2xl mb-6 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all">2</div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Choose Your Program</h4>
            <p className="text-gray-600 max-w-[200px]">Select the training package that aligns with your goals and schedule.</p>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-white border-4 border-emerald-600 rounded-full flex items-center justify-center text-emerald-600 font-black text-2xl mb-6 shadow-xl group-hover:bg-emerald-600 group-hover:text-white transition-all">3</div>
            <h4 className="text-xl font-bold mb-2 text-gray-900">Start Transforming</h4>
            <p className="text-gray-600 max-w-[200px]">Begin your journey with expert coaching and see real results.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-emerald-600 to-blue-600 rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black mb-8">Ready to transform your fitness?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Join hundreds of athletes who've achieved their goals with our proven methods. Start your journey today.</p>
            <button 
              onClick={() => handleNavClick('/Contact')}
              className="bg-white text-emerald-600 hover:bg-gray-100 text-xl font-bold px-8 md:px-12 py-4 md:py-5 rounded-full transition-all shadow-2xl hover:-translate-y-1"
            >
              Claim Your Free Consultation
            </button>
          </div>
        </div>
      </section>

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

export default HomePage;