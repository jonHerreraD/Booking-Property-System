import React, {useRef} from 'react'
import { gsap} from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DiscoverSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    // Create a timeline for all cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
        toggleActions: "restart pause resume reset",
      }
    });

    // Animate each card in sequence
    projects.forEach((card, index) => {
      tl.fromTo(
        card,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        index * 0.2 // stagger by timeline position instead of delay
      );
    });

    // Fade in whole section before cards
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);
    return (
        <section id="discover" ref={sectionRef} className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center bg-transparent">
            <div className="w-full bg-transparent">
                <div className="flex xl:flex-row flex-col gap-10 justify-between">
                    {/* LEFT */}
                    <div className="h-full flex flex-col justify-between xl:w-[60%] rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] transform" ref={project1Ref}>
                        <div className="xl:h-[60vh] md:h-[50vh] h-96 relative overflow-hidden">
                            <img className='w-full h-full object-cover  hover:scale-510 transition-transform duration-700' src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center&q=80" alt="Luxury Accommodation"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="space-y-5  p-8 bg-gradient-to-br from-white to-gray-50">
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight'> Stay Like a Local</h2>
                            <p className="text-gray-600 md:text-md leading-relaxed">
                                Browse thousands of properties tailored to your lifestyle. From city-center studios to countryside retreats, you'll find the perfect space to match your trip and budget.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="flex md:flex-row flex-col xl:flex-col gap-8 xl:w-[40%] overflow-hidden">
                        <div className="project rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] transform group" ref={project2Ref}>
                            <div className="xl:h-[25vh] md:h-52 lg:h-72 h-64 relative overflow-hidden">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center&q=80" alt="Host Dashboard"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
                            </div>
                            <div className="space-y-5  p-6 bg-gradient-to-br from-white to-indigo-50">
                                <h2 className='text-lg md:text-xl lg:text-2xl font-semibold  text-gray-900 leading-tight'>Turn Your Space Into Income</h2>
                                <p className="text-gray-600 md:text-md leading-relaxed">
                                List your property and start earning. Our platform makes it easy to connect with trusted travelers, manage bookings, and get paid securely. Hosting has never been simpler.
                                </p>
                            </div>
                        </div>
                        <div className="project rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] transform group" ref={project3Ref}>
                            <div className="xl:h-[25vh] md:h-52 lg:h-72 h-64 relative overflow-hidden">
                                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700' src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center&q=80" alt="Travel Experience"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
                            </div>
                            <div className="space-y-5  p-6 bg-gradient-to-br from-white to-emerald-50">
                                <h2 className='text-lg md:text-xl lg:text-2xl font-semibold  text-gray-900 leading-tight'>Travel Beyond the Ordinary</h2>
                                <p className="text-gray-600 md:text-md leading-relaxed">
                                Experience more than just accommodation. Discover neighborhoods, hidden gems, and local experiences that make your journey truly unforgettable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default DiscoverSection