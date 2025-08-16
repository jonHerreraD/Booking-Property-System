import { useEffect, useState, useRef } from "react";
import NavBar from '../NavBar/NavBar.tsx';
import { currencies, languages, menu } from "../../constants/index.ts";

const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const handleScroll = (): void => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle clicking outside dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    const headerClasses = `fixed w-full top-0 left-0 right-0 py-3 lg:py-2 px-5 md:px-20 z-[100] transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-gradient-to-r from-purple-800 to-purple-300 backdrop-blur-sm' : 'bg-gradient-to-r from-purple-800 to-purple-300'
    }`;

    const renderDropdownContent = () => {
        return (
            <div className="p-4 w-64 bg-white rounded-lg shadow-lg border-4 border-purple-100">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Menu Options</h3>
                <div className="space-y-2">
                    {menu.map(({ option, link, description }) => (
                        <div key={option}>
                            <a 
                                href={link || "#"} 
                                className=" group block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
                            >
                                {option}
                                {description && (
                                    <span className="block text-sm text-gray-500 group-hover:text-purple-400">{description}</span>
                                )}
                            </a>
                                {option === "Help & Support" && (
                                    <hr className="my-2 border-gray-300" />
                                )}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const renderModalContent = (name: string) => {
        switch(name.toLowerCase()){
            case 'language':
            return(
                <div className="p-4 w-full">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Choose a Language and Region</h3>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                {languages.map(({language, region}) => (
                                    <button key={language} className=" group block w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div className="flex flex-col">
                                                <p>{language}</p>
                                                <p className="text-sm text-gray-500 group-hover:text-purple-600">{region}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case "currency":
                return(
                <div className="p-4 w-full">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Choose a Currency</h3>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                {currencies.map(({currency, abbreviation}) => (
                                    <button key={currency} className="group block w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                                        <div className=" flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                                            </svg>
                                            <div className=" flex flex-col">
                                                <p>{currency}</p>
                                                <p className="text-sm text-gray-500 group-hover:text-purple-600">{abbreviation}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    const closeModal = (): void => {
        setActiveModal(null);
    };

    const handleLanguageClick = (): void => {
        if (isMobile) {
            // On mobile, we don't show the language modal from header
            // It should be accessed through NavBar mobile menu
            return;
        } else {
            setActiveModal(activeModal ? null : 'language');
        }
    };

    return (
        <header className={headerClasses}>
            <div className="mx-auto flex items-center justify-between">
                <a  
                    className="text-white text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105" 
                    href="#"
                    aria-label="Anchor Homes - Home"
                >
                    Anchor Homes
                </a>

                <NavBar 
                    onLanguageCurrencyOpen={(type: 'language' | 'currency') => setActiveModal(type)}
                    activeModal={activeModal}
                    closeModal={closeModal}
                    renderModalContent={renderModalContent}
                />
                
                {/* Icon Buttons */}
                <div className=" lg:flex items-center gap-3 relative">
                     <a href="#contact" className="group hidden lg:flex cursor-pointer">
                        <div className="px-4 py-2 rounded-lg bg-purple-350 text-black hover:bg-purple-800 transition-all duration-300 transform hover:scale-105">
                            <span className="group-hover:text-white transition-colors duration-300 text-sm">Become a host</span>
                        </div>
                     </a>
                    <button 
                        className="group hidden w-10 h-10 rounded-full bg-white text-black hover:bg-purple-800 hover:text-white transition-all duration-300 transform hover:scale-105 lg:flex items-center justify-center cursor-pointer"
                        aria-label="Language/Region"
                        onClick={handleLanguageClick}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            className={`w-10 h-10 rounded-full text-black hover:bg-purple-800 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center cursor-pointer ${
                                activeDropdown ? 'bg-purple-800 text-white' : 'bg-white'
                            }`}
                            aria-label="Menu"
                            onClick={() => setActiveDropdown(activeDropdown ? null : 'menu')}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === 'menu' && (
                            <div className="absolute top-full right-0 mt-2 z-[110] animate-in slide-in-from-top-2 duration-200 ">
                                {renderDropdownContent()}
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Desktop Modal for Language/Currency */}
                {activeModal && !isMobile && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-transparent bg-opacity-0 z-40"
                        onClick={closeModal}
                    />
                    
                    {/* Modal */}
                    <div className="mx-auto fixed inset-x-4 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 animate-in zoom-in-95 duration-200 max-h-[90vh] min-h-[50vh] lg:max-w-[40vw] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <div className="flex gap-12">
                                <button 
                                    className={`cursor-pointer hover:bg-purple-100 hover:text-purple-500 rounded px-2 py-1 ${
                                        activeModal === 'language' ? 'bg-purple-100 text-purple-600' : ''
                                    }`} 
                                    onClick={() => setActiveModal("language")}
                                >
                                    Languages
                                </button>
                                <button 
                                    className={`cursor-pointer hover:bg-purple-100 hover:text-purple-500 rounded px-2 py-1 ${
                                        activeModal === 'currency' ? 'bg-purple-100 text-purple-600' : ''
                                    }`} 
                                    onClick={() => setActiveModal("currency")}
                                >
                                    Currency
                                </button>
                            </div>
                            
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Modal Content */}
                        <div className="pb-4 flex justify-center min-h-[33vh]">
                            {renderModalContent(activeModal)}
                        </div>
                        
                        {/* Modal Footer */}
                        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                            <div className="flex gap-2">
                                <button
                                    onClick={closeModal}
                                    className="flex-1 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium cursor-pointer"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            </div>
        </header>
    );
};

export default Header;