import React, {useEffect, useState} from 'react'
import {navOptions} from "../../constants/index.ts";

const LandingOptions = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`fixed w-full left-1/2 py-5 px-5 md:px-20 
            -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${scrolled ? 'top-0 bg-transparent' :
        'md:top-10 top-0 bg-transparent'}`}>
            <div className="mx-auto flex items-center justify-between">
                <a className="text-gray-700 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105" href="#presentation">
                    Anchor Homes
                </a>

                <nav className="hidden lg:flex items-center">
                    <ul className='flex space-x-8'>
                        {navOptions.map(({link, name}) =>(
                            <li key={name} className="text-gray-700 relative group hover:bg-purple-800 border-2 rounded-2xl border-transparent px-2">
                                <a href={link}>
                                    <span className='transition-colors duration-300 group-hover:text-white'>{name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="flex group">
                    <div className="px-5 py-2 rounded-lg bg-white text-black group-hover:bg-purple-700 transition-colors duration-300">
                        <span className='group-hover:text-white transition-colors duration-300'>Log In</span>
                    </div>
                </a>
            </div>
        </header>
        
    )
}
export default LandingOptions