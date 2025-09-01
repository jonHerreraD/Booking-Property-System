import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import  "./presentation.css";
import DiscoverSection from './DiscoverSection.tsx';
import TrustSafetySection from './TrustSafetySection.tsx';
import AppSection from './AppSection.tsx';
// You might need to install this plugin: npm install gsap
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const Presentation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Register GSAP plugins if you have them
    // gsap.registerPlugin(MotionPathPlugin);
    
    // Create master timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Enhanced title animations with stagger
    tl.fromTo(
      ".title",
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
        duration: 1.2,
        stagger: 0.3,
        ease: "back.out(1.7)"
      }
    )
    // Description animation
    .fromTo(
      ".description",
      { 
        y: 50, 
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.5"
    );

    // Advanced image animations with responsive scaling
    const images = gsap.utils.toArray(".img") as HTMLImageElement[];
    
    images.forEach((img: HTMLImageElement, index: number) => {
      // Get responsive scale factors based on screen size
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;
      
      const baseScale = isMobile ? 0.4 : isTablet ? 0.6 : 0.8;
      const maxScale = isMobile ? 0.7 : isTablet ? 0.9 : 1.2;
      
      // Initial position
      gsap.set(img, {
        y: window.innerHeight,
        x: gsap.utils.random(isMobile ? 50 : 100, isMobile ? 150 : 300),
        rotation: gsap.utils.random(-180, 180),
        scale: gsap.utils.random(0.2, baseScale * 0.5),
        opacity: 0
      });

      // Create complex floating animation for each image
      const imageTimeline = gsap.timeline({
        delay: index * 2,
        repeat: -1,
        repeatDelay: 8 - (index * 2)
      });

      imageTimeline
        // Entry animation
        .to(img, {
          y: window.innerHeight * (isMobile ? 0.6 : 0.5),
          x: gsap.utils.random(isMobile ? -30 : -50, isMobile ? 100 : 150),
          rotation: gsap.utils.random(-45, 45),
          scale: gsap.utils.random(baseScale, maxScale * 0.8),
          opacity: 1,
          duration: 3,
          ease: "power2.out"
        })
        // Complex floating path (simplified without MotionPathPlugin)
        .to(img, {
          y: window.innerHeight * (isMobile ? 0.3 : 0.2),
          x: gsap.utils.random(isMobile ? -50 : -100, isMobile ? 120 : 200),
          rotation: `+=${gsap.utils.random(90, 270)}`,
          scale: gsap.utils.random(baseScale * 0.8, maxScale * 0.9),
          duration: 4,
          ease: "power1.inOut"
        })
        // Exit animation
        .to(img, {
          y: -100,
          x: gsap.utils.random(isMobile ? -100 : -200, isMobile ? 100 : 200),
          rotation: `+=${gsap.utils.random(180, 360)}`,
          scale: isMobile ? 0.2 : 0.3,
          opacity: 0,
          duration: 2,
          ease: "power2.in"
        });
    });

    // Parallax effect on scroll
    const onScroll = () => {
      const scrollY = window.pageYOffset;
      gsap.to(".parallax-slow", { y: scrollY * 0.5, duration: 0.5 });
      gsap.to(".parallax-fast", { y: scrollY * -0.3, duration: 0.5 });
    };
    
    window.addEventListener('scroll', onScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      particlesRef.current.forEach((particle: HTMLDivElement) => particle.remove());
      particlesRef.current = [];
      // Kill all GSAP animations
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <>
      <section 
        id="presentation" 
        ref={containerRef}
        className="relative overflow-hidden min-h-screen"
      >
        {/* Animated background elements */}
        <div className="floating-element absolute top-20 left-20 w-24 h-24 parallax-slow"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-16 h-16 parallax-fast"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-32 h-32 parallax-slow"></div>
        <div className="floating-element absolute bottom-20 right-20 w-20 h-20 parallax-fast"></div>

        <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center mb-50">
          {/* Left content */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-bold relative z-10 pointer-events-none">
                <h1 className="title glow-text text-white">
                  Find Your Perfect Stay
                </h1>
                <h1 className="title text-transparent bg-clip-text gradient-text">
                  Anywhere
                </h1>
              </div>
              <p className="description md:text-xl text-gray-600 relative z-10 pointer-events-none leading-relaxed">
                Discover unique homes, cozy apartments, and unforgettable stays <br />
                across the world. Whether you're planning a weekend getaway or <br />
                a long-term adventure, we make it simple to book with confidence.
              </p>
            </div>
          </header>

          {/* Enhanced floating images with responsive container */}
          <figure>
            <div className="xl:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-20 top-24 xl:-right-80 right-0">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop" 
                className="img max-h-[60vh] w-auto absolute" 
                alt="Modern house with large windows" 
              />
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop" 
                className="img max-h-[60vh] w-auto absolute" 
                alt="Cozy apartment interior" 
              />
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop" 
                className="img max-h-[60vh] w-auto absolute" 
                alt="Luxury villa with pool" 
              />
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop" 
                className="img max-h-[60vh] w-auto absolute" 
                alt="Mountain cabin retreat" 
              />
            </div>
          </figure>
        </div>
        <DiscoverSection></DiscoverSection>
        <TrustSafetySection></TrustSafetySection>
        <AppSection></AppSection>
      </section>
    </>
  );
};

export default Presentation;