import { useEffect, useState, useRef } from "react";
import navLinks from "../../constants/index.ts";

interface CalendarProps {
    type: string;
}

interface GuestCategory {
    label: string;
    description: string;
    key: string;
}

interface NavBarProps {
    onLanguageCurrencyOpen?: (type: 'language' | 'currency') => void;
    activeModal?: string | null;
    closeModal?: () => void;
    renderModalContent?: (name: string) => React.ReactNode;
}

const NavBar = ({ onLanguageCurrencyOpen, activeModal, closeModal, renderModalContent }: NavBarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [localActiveModal, setLocalActiveModal] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            const wasMobile = isMobile;
            const nowMobile = window.innerWidth < 1024;
            setIsMobile(nowMobile);
            
            // Only switch states when transitioning between mobile and desktop
            if (wasMobile !== nowMobile) {
                if (nowMobile) {
                    // Switching to mobile: convert dropdown to modal
                    if (activeDropdown) {
                        setLocalActiveModal(activeDropdown);
                        setActiveDropdown(null);
                    }
                } else {
                    // Switching to desktop: convert modal to dropdown
                    if (localActiveModal) {
                        setActiveDropdown(localActiveModal);
                        setLocalActiveModal(null);
                    }
                }
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isMobile, activeDropdown, localActiveModal]);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if ((isMobile && (localActiveModal || activeModal)) || mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobile, localActiveModal, activeModal, mobileMenuOpen]);

    const handleDropdownToggle = (name: string): void => {
        if (isMobile && activeDropdown) {
            // On mobile, close search menu and open modal
            setLocalActiveModal(localActiveModal === name ? null : name);
        }else if(!isMobile && localActiveModal){
            // On desktop, toggle dropdown
            setActiveDropdown(activeDropdown === name ? null : name);
        } else if (isMobile) {
            setLocalActiveModal(localActiveModal === name ? null : name);
        }else{
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    const handleLocalCloseModal = (): void => {
        setLocalActiveModal(null);
    };

    const handleLanguageCurrencyClick = (type: 'language' | 'currency'): void => {
        setMobileMenuOpen(false); // Close the mobile menu
        if (onLanguageCurrencyOpen) {
            onLanguageCurrencyOpen(type); // Open the language/currency modal in Header
        }
    };

    // Calendar component for date selection
    const Calendar = ({ type }: CalendarProps) => {
        const [currentDate, setCurrentDate] = useState<Date>(new Date());
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);

        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        const prevMonth = (): void => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        };

        const nextMonth = (): void => {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        };

        const selectDate = (day: number): void => {
            const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            setSelectedDate(selected);
        };

        const renderCalendarDays = () => {
            const days = [];
            
            // Empty cells for days before the first day of month
            for (let i = 0; i < firstDayOfMonth; i++) {
                days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
            }
            
            // Days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const isSelected = selectedDate && 
                    selectedDate.getDate() === day && 
                    selectedDate.getMonth() === currentDate.getMonth() &&
                    selectedDate.getFullYear() === currentDate.getFullYear();
                
                const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
                
                days.push(
                    <button
                        key={day}
                        onClick={() => selectDate(day)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-200 hover:bg-purple-100 ${
                            isSelected 
                                ? 'bg-purple-500 text-white' 
                                : isToday 
                                    ? 'bg-purple-100 text-purple-600 font-medium' 
                                    : 'text-gray-700 hover:text-purple-600'
                        }`}
                    >
                        {day}
                    </button>
                );
            }
            
            return days;
        };

        return (
            <div className="p-4 w-80">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h3 className="text-lg font-semibold">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day: string) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                            {day}
                        </div>
                    ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                    {renderCalendarDays()}
                </div>
                
                {selectedDate && (
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-purple-700">
                            Selected {type}: {selectedDate.toLocaleDateString()}
                        </p>
                    </div>
                )}
            </div>
        );
    };

    // Dropdown content for different buttons
    const renderDropdownContent = (name: string) => {
        switch (name.toLowerCase()) {
            case 'where':
                return (
                    <div className="p-4 w-80">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Search destinations</h3>
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium text-gray-700 text-sm">Popular destinations</h4>
                                {['New York', 'Los Angeles', 'Chicago', 'Miami', 'San Francisco'].map((city: string) => (
                                    <button key={city} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {city}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            
            case 'check in':
                return <Calendar type="Check-in date" />;
            
            case 'check out':
                return <Calendar type="Check-out date" />;
            
            case 'who':
                return (
                    <div className="p-4 w-80">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Add guests</h3>
                        <div className="space-y-4">
                            {[
                                { label: 'Adults', description: 'Ages 13 or above', key: 'adults' },
                                { label: 'Children', description: 'Ages 2-12', key: 'children' },
                                { label: 'Infants', description: 'Under 2', key: 'infants' },
                                { label: 'Pets', description: 'Bringing a service animal?', key: 'pets' }
                            ].map(({ label, description, key }: GuestCategory) => (
                                <div key={key} className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium text-gray-800">{label}</div>
                                        <div className="text-sm text-gray-500">{description}</div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className="w-8 text-center font-medium">0</span>
                                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div ref={dropdownRef} className="relative">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
                <div className="bg-white rounded-full px-2 py-1 relative">
                    <ul className="flex items-center">
                        {navLinks.map(({ link, name, description }, index: number) => (
                            <li key={name} className="relative">
                                {/* Divider */}
                                {index > 0 && (
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                                )}
                                <button 
                                    onClick={() => handleDropdownToggle(name)}
                                    className={`group relative block text-black hover:text-white transition-all duration-300 px-5 py-2 mx-1 rounded-full hover:bg-purple-500 text-center cursor-pointer ${
                                        activeDropdown === name ? 'bg-purple-500 text-white' : ''
                                    }`}
                                    aria-label={`Toggle ${name} dropdown`}
                                >
                                    <div className="relative z-10">
                                        <div className="font-medium text-sm">{name}</div>
                                        <div className="text-xs opacity-70">{description}</div>
                                    </div>
                                    
                                    {/* Animated border */}
                                    <span className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400 rounded-full transition-all duration-300 transform group-hover:scale-105"></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Search Button */}
            <div className="lg:hidden">
                <button 
                    className="cursor-pointer flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Open search"
                >
                    <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                    Search
                </button>
            </div>

            {/* Dropdown - positioned absolutely relative to the navbar */}
            {activeDropdown && !isMobile && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 animate-in slide-in-from-top duration-200">
                    <div className="relative">
                        {/* Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                        </div>
                        {renderDropdownContent(activeDropdown)}
                    </div>
                </div>
            )}

            {/* Mobile Search Menu - Full screen overlay */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    
                    {/* Mobile Menu */}
                    <div className="lg:hidden fixed top-20 left-4 right-4 bg-white rounded-lg p-6 shadow-2xl z-50 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-black">Search Properties</h3>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-500 hover:text-gray-700 p-1 cursor-pointer"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for properties..."
                                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                                {navLinks.map(({ link, name, description }) => (
                                    <button
                                        key={name}
                                        className="p-3 bg-gray-50 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 text-center cursor-pointer"
                                        onClick={() => handleDropdownToggle(name)}
                                    >
                                        <div className="font-medium text-sm">{name}</div>
                                        <div className="text-xs opacity-70">{description}</div>
                                    </button>
                                ))}
                            </div>
                            
                            <div className="space-y-3 pt-4 border-t border-gray-200">
                                <a 
                                    href="#contact" 
                                    className="block w-full text-center px-5 py-3 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Become a host
                                </a>
                                <div className="flex gap-2">
                                    <button 
                                        className="flex-1 text-center px-5 py-3 rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-50 transition-all duration-300 font-medium cursor-pointer"
                                        onClick={() => handleLanguageCurrencyClick('language')}
                                    >
                                        Language/Currency
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </>
            )}
            
            {/* Mobile Modal for Search Options */}
            {localActiveModal && isMobile && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-transparent bg-opacity-0 z-40 lg:hidden"
                        onClick={handleLocalCloseModal}
                    />
                    
                    {/* Modal */}
                    <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 lg:hidden animate-in zoom-in-95 duration-200 my-auto max-h-[90vh] min-h-[50vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-800 capitalize pl-7">
                                {localActiveModal}
                            </h2>
                            <button
                                onClick={handleLocalCloseModal}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Modal Content */}
                        <div className="pb-4 flex justify-center min-h-[33vh] ">
                            {renderDropdownContent(localActiveModal)}
                        </div>
                        
                        {/* Modal Footer */}
                        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                            <div className="flex gap-2">
                                <button
                                    onClick={handleLocalCloseModal}
                                    className="flex-1 px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleLocalCloseModal}
                                    className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium cursor-pointer"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Language/Currency Modal (shared from Header) */}
            {activeModal && isMobile && renderModalContent && closeModal && (
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
                                    onClick={() => onLanguageCurrencyOpen && onLanguageCurrencyOpen('language')}
                                >
                                    Languages
                                </button>
                                <button 
                                    className={`cursor-pointer hover:bg-purple-100 hover:text-purple-500 rounded px-2 py-1 ${
                                        activeModal === 'currency' ? 'bg-purple-100 text-purple-600' : ''
                                    }`} 
                                    onClick={() => onLanguageCurrencyOpen && onLanguageCurrencyOpen('currency')}
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
    );
};

export default NavBar;