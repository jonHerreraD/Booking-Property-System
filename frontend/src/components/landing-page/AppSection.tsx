import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AppSection = () => {

  useGSAP(() => {
    // Create master timeline
    const tl = gsap.timeline({ 
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: "#availability",
        start: 'top bottom-=100',
        end: 'bottom top+=100',
        toggleActions: "play none none reverse", // This makes it reverse when scrolling back up
        // Alternatively, you can use:
        // onEnter: () => tl.play(),
        // onLeave: () => tl.reverse(),
        // onEnterBack: () => tl.play(),
        // onLeaveBack: () => tl.reverse()
      }
    });

    // Enhanced title animations with stagger
    tl.fromTo(
      ".title2", 
      { 
        y: 150, 
        opacity: 0, 
        rotationX: -90,
        transformOrigin: "50% 50%"
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 2.0,
        stagger: 1.8,
        ease: "back.out(1.7)"
      }
    );

    tl.fromTo(
      ".description2", 
      { 
        y: 150, 
        opacity: 0, 
        rotationX: -90,
        transformOrigin: "50% 50%"
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 2.0,
        stagger: 1.8,
        ease: "back.out(1.7)"
      },
      "-=0.8" // Start this animation 0.8 seconds before the previous one ends
    );

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }); // Removed the scope parameter since we're not using containerRef

  return (
    <section 
      id="availability" 
      className="relative overflow-hidden min-h-screen bg-transparent flex items-center justify-items-center"
    >
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-20 py-16 md:py-20 ">
        
        {/* Content Grid */}
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 items-center ">
          
          {/* Left Column - Title */}
          <div className="space-y-6 xl:space-y-8 title2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white glow-text leading-tight">
              Travel Smarter, 
              <span className="block xl:mt-2">Anywhere</span>
            </h2>
            
            {/* Optional subtitle for larger screens */}
            <div className="hidden xl:block">
              <p className="text-white/80 text-lg lg:text-xl font-light leading-relaxed">
                Your perfect getaway is just a few taps away
              </p>
            </div>
          </div>

          {/* Right Column - Description Card */}
          <div className="w-full description2">
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-3xl  shadow-2xl border border-white/20 hover:bg-white transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-1">
              
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Everything You Need
                </h3>
              </div>

              {/* Main Description */}
              <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-8">
                Take your trips to the next level with our easy-to-use platform. Book properties instantly, manage your reservations on the go, and stay connected with your host through secure in-app messaging.
              </p>

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "⚡", text: "Instant Booking" },
                  { icon: "📱", text: "Mobile Management" },
                  { icon: "💬", text: "Secure Messaging" },
                  { icon: "🎯", text: "Smart Search" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-gray-700 font-medium text-sm md:text-base">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Text */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                From check-in details to local recommendations, everything you need is right at your fingertips. Planning your next getaway has never been this simple.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}

export default AppSection;