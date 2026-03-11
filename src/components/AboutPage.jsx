import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 min-h-screen">
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
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('/')} className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">Home</button>
          <button onClick={() => handleNavClick('/Services')} className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">Services</button>
          <button onClick={() => handleNavClick('/About')} className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">About</button>
          <button onClick={() => handleNavClick('/Contact')} className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">Contact</button>
        </nav>
        
        <div className="flex items-center gap-4">
          <button onClick={() => handleNavClick('/Contact')} className="hidden md:flex min-w-[120px] items-center justify-center rounded-full h-10 px-5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold tracking-wide shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform active:scale-95">Start Today</button>
          
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 p-2">
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-3">
              <button onClick={() => handleNavClick('/')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors border-b border-gray-200">Home</button>
              <button onClick={() => handleNavClick('/Services')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors border-b border-gray-200">Services</button>
              <button onClick={() => handleNavClick('/About')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors border-b border-gray-200">About</button>
              <button onClick={() => handleNavClick('/Contact')} className="block w-full text-left px-2 py-3 text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors">Contact</button>
            </div>
            <button onClick={() => handleNavClick('/Contact')} className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-bold hover:opacity-90 transition-all">
              <span className="truncate">Start Today</span>
            </button>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section - Fitness Focused */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-16">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[500px] gap-8">
            <div className="flex-1 flex gap-4">
              <div className="w-1/2 bg-center bg-no-repeat bg-cover rounded-3xl shadow-xl" style={{backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`}}></div>
              <div className="w-1/2 bg-center bg-no-repeat bg-cover rounded-3xl shadow-xl" style={{backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`}}></div>
            </div>
            <div className="flex flex-col justify-center px-6 lg:w-[450px]">
              <div className="flex flex-col gap-4">
                <h1 className="text-gray-900 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Transform</span> Your Body, 
                  <br/>Elevate Your Game
                </h1>
                <h2 className="text-gray-600 text-lg font-normal leading-relaxed">Elite sports fitness coaching that bridges the gap between where you are and where you want to be. Train with purpose, recover with science.</h2>
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => handleNavClick('/Services')} className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 transition-all">
                  Explore Programs
                </button>
                <button onClick={() => handleNavClick('/Contact')} className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-all">
                  Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Philosophy Section */}
        <section className="bg-gradient-to-br from-emerald-900 to-blue-900 py-20 text-white">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-extrabold mb-12 text-center">The Jordan Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-emerald-400 shadow-xl">
                <div className="flex items-center gap-4 mb-6 text-emerald-400">
                  <span className="material-symbols-outlined text-4xl">fitness_center</span>
                  <h3 className="text-2xl font-bold">Performance First</h3>
                </div>
                <p className="text-sm text-emerald-200 mb-4 font-bold uppercase tracking-wider">Science-Based Training</p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-xl">check_circle</span>
                    <span>Periodized training programs tailored to your sport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-xl">check_circle</span>
                    <span>Biomechanical analysis and movement optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-xl">check_circle</span>
                    <span>Performance tracking with measurable results</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-l-4 border-blue-400 shadow-xl">
                <div className="flex items-center gap-4 mb-6 text-blue-400">
                  <span className="material-symbols-outlined text-4xl">monitor_heart</span>
                  <h3 className="text-2xl font-bold">Holistic Wellness</h3>
                </div>
                <p className="text-sm text-blue-200 mb-4 font-bold uppercase tracking-wider">Mind-Body Connection</p>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-xl">check_circle</span>
                    <span>Nutritional guidance for athletic performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-xl">check_circle</span>
                    <span>Recovery protocols and injury prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-xl">check_circle</span>
                    <span>Mental toughness and sports psychology</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Our Training Principles</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Built on a foundation of proven methodologies and real-world results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-b-4 border-emerald-500">
              <div className="text-emerald-500 mb-4"><span className="material-symbols-outlined text-4xl">speed</span></div>
              <h4 className="font-bold mb-2 text-lg">Progressive Overload</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Strategic intensity increases for continuous gains</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-b-4 border-blue-500">
              <div className="text-blue-500 mb-4"><span className="material-symbols-outlined text-4xl">sync_alt</span></div>
              <h4 className="font-bold mb-2 text-lg">Movement Quality</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Perfect form before adding weight or speed</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-b-4 border-emerald-500">
              <div className="text-emerald-500 mb-4"><span className="material-symbols-outlined text-4xl">restaurant</span></div>
              <h4 className="font-bold mb-2 text-lg">Fuel for Performance</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Customized nutrition strategies for athletes</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-b-4 border-blue-500">
              <div className="text-blue-500 mb-4"><span className="material-symbols-outlined text-4xl">hotel_class</span></div>
              <h4 className="font-bold mb-2 text-lg">Recovery First</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Rest is where the magic happens</p>
            </div>
          </div>
        </section>

        {/* Credentials & Achievements */}
        <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-600 uppercase tracking-[0.2em]">Certified Excellence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-emerald-600 mb-2 text-4xl">workspace_premium</span>
                <p className="text-xs font-bold text-gray-400">CERTIFICATION</p>
                <p className="font-bold text-gray-800">NSCA-CSCS</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-blue-600 mb-2 text-4xl">school</span>
                <p className="text-xs font-bold text-gray-400">EDUCATION</p>
                <p className="font-bold text-gray-800">Exercise Science</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-emerald-600 mb-2 text-4xl">emoji_events</span>
                <p className="text-xs font-bold text-gray-400">ACHIEVEMENT</p>
                <p className="font-bold text-gray-800">CrossFit Games</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center flex flex-col items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-blue-600 mb-2 text-4xl">diversity_3</span>
                <p className="text-xs font-bold text-gray-400">EXPERIENCE</p>
                <p className="font-bold text-gray-800">10+ Years</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-20 max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div 
                className="aspect-[3/4] bg-center bg-cover rounded-3xl shadow-2xl" 
                style={{backgroundImage: `url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`}}
              ></div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="font-bold text-2xl text-emerald-600">"I've been in your shoes."</p>
                <p>My journey started as an overweight teenager who couldn't run a mile. Through dedication and the right guidance, I transformed into a competitive athlete. That personal transformation sparked my passion for helping others achieve their fitness goals.</p>
                <p>After earning my degree in Exercise Science and multiple certifications, I've spent the last decade coaching everyone from weekend warriors to professional athletes. I understand the struggles, the setbacks, and the incredible victories that come with dedicated training.</p>
                <p>Getting Fit with Jordan isn't just a business—it's my life's mission to prove that with the right approach, anyone can achieve athletic excellence.</p>
              </div>
              <div className="mt-8">
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Jordan Mitchell</p>
                <p className="text-sm text-gray-500">Founder & Head Coach, CSCS, PN1</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Team Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">Elite Coaching Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our certified coaches bring diverse expertise to help you excel in your specific sport and fitness goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* MARCUS THOMPSON */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                    alt="Marcus Thompson" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Marcus Thompson</h3>
                  <p className="text-emerald-600 font-semibold text-sm mb-3">Strength & Power Coach</p>
                  <p className="text-gray-600 text-sm">Former D1 football player specializing in explosive strength development and powerlifting techniques.</p>
                </div>
              </div>
              
              {/* SARAH CHEN */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579758629938-03607cc5aba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                    alt="Sarah Chen" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Chen</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">Endurance Specialist</p>
                  <p className="text-gray-600 text-sm">Marathoner and triathlon coach with expertise in endurance programming and metabolic conditioning.</p>
                </div>
              </div>
              
              {/* DAVID RODRIGUEZ */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                    alt="David Rodriguez" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">David Rodriguez</h3>
                  <p className="text-emerald-600 font-semibold text-sm mb-3">Mobility & Recovery</p>
                  <p className="text-gray-600 text-sm">Certified yoga instructor and mobility specialist focused on injury prevention and flexibility.</p>
                </div>
              </div>
              
              {/* AMANDA FOSTER */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                    alt="Amanda Foster" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Amanda Foster</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">Sports Nutritionist</p>
                  <p className="text-gray-600 text-sm">Registered dietitian specializing in performance nutrition and body composition optimization.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-inner">
                Every coach at Getting Fit with Jordan holds nationally recognized certifications and maintains current CPR/AED certifications. We're committed to continuing education and evidence-based training methods.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to transform your fitness?</h2>
            <p className="text-white/90 text-lg">Join hundreds of athletes who've achieved their goals with our proven methods.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => handleNavClick('/Contact')}
                className="min-w-[280px] h-16 bg-white text-emerald-600 text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Claim Your Free Session
              </button>
              <button 
                onClick={() => handleNavClick('/Services')}
                className="min-w-[280px] h-16 bg-transparent border-2 border-white text-white text-xl font-bold rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
              >
                View Training Programs
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Fitness Style */}
      <footer className="bg-gray-900 text-white py-16 px-4 md:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-emerald-500">
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
          
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-emerald-500">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Services'); }} className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/About'); }} className="hover:text-emerald-500 transition-colors">About</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('/Contact'); }} className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-sm text-emerald-500">Training Hours</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><p className="font-bold text-white">Mon - Fri:</p> 6:00 AM - 8:00 PM</li>
              <li><p className="font-bold text-white">Saturday:</p> 8:00 AM - 4:00 PM</li>
              <li><p className="font-bold text-white">Sunday:</p> 9:00 AM - 12:00 PM</li>
              <li className="pt-2 text-emerald-500 text-xs font-bold uppercase italic">Flexible scheduling available</li>
            </ul>
          </div>
          
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

export default AboutPage;