import React, {useRef} from 'react'
import { gsap} from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TrustSafetySection = () =>{
    useGSAP(() =>{
        gsap.fromTo(
        "#trust-safety",{        
        y: 150, 
        opacity: 0, 
        rotationX: -90,
        transformOrigin: "50% 50%"
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 3.7,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger:{
                        trigger: "#trust-safety",
                        start: 'top bottom-=-500',
                        toggleActions: "restart pause resume reset"
                    }
      }
            
        )
    })
    return (
    <section 
        id='trust-safety' 
        className='w-full mt-20 min-h-[90vh] flex items-center bg-[url("https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=800&fit=crop&crop=center&q=80")] bg-cover bg-center bg-no-repeat relative'
    >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/75 to-purple-900/70"></div>
        
        {/* Content Container */}
        <div className='w-full relative z-10 px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-24'>
            <div className='max-w-4xl mx-auto text-center space-y-8'>
                {/* Icon/Visual Element */}
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6'>
                    Book with 
                    <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"> Confidence</span>
                </h1>

                {/* Description */}
                <div className="max-w-3xl mx-auto">
                    <p className='text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed font-light'>
                        Your peace of mind comes first. Every listing on our platform is verified for accuracy and quality, so you know exactly what to expect when you arrive.
                    </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Verified Listings</h3>
                        <p className="text-white/80 text-sm">Every property is thoroughly verified for accuracy and quality standards</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">Secure Payments</h3>
                        <p className="text-white/80 text-sm">Protected transactions with industry-leading security measures</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2">24/7 Support</h3>
                        <p className="text-white/80 text-sm">Round-the-clock customer support for any questions or concerns</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 to-transparent"></div>
    </section>
)
}
export default TrustSafetySection;