import { useState } from "react";

export default function LogIn() {
    const [activeModal, setActiveModal] = useState <string | null>(null);
    const [resetMethod, setResetMethod] = useState<string>("");

    const renderModalContent = (name: string) => {
        switch(name.toLowerCase()){
            case 'sign-up':
                return(
                    <div className="p-4 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                            />
                            <div className="relative col-span-1 md:col-span-2 lg:col-span-2">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                                    </svg>
                                </div>
                                <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors block ps-10 p-2.5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors col-span-1 md:col-span-2 lg:col-span-2"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors col-span-1"
                            />
                        </div>
                    </div>
                );
            case "forgot-password":
                return (
                    <div className="p-4 w-full">
                        <h3 className="font-semibold text-lg mb-3 text-gray-800">Select your password reset method</h3>
                        <div className="space-y-3">
                            <div className="space-y-2 flex flex-col items-center">
                                <select 
                                    id="reset-method" 
                                    value={resetMethod}
                                    onChange={(e) => setResetMethod(e.target.value)}
                                    className="w-[28vw] min-w-[280px] max-w-[400px] border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                                >
                                    <option value="">--</option>
                                    <option value="email">Email</option>
                                    <option value="phone-number">Phone Number</option>
                                </select>
                                
                                {resetMethod === "email" && (
                                    <input
                                        type="email"
                                        placeholder="jonDoe@gmail.com"
                                        className="w-[28vw] min-w-[280px] max-w-[400px] border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                                    />
                                )}
                                
                                {resetMethod === "phone-number" && (
                                    <div className="relative w-[28vw] min-w-[280px] max-w-[400px]">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                                            </svg>
                                        </div>
                                        <input 
                                            type="tel" 
                                            placeholder="+528442024990"
                                            className="w-full border-2 border-gray-300 rounded-2xl shadow-lg pl-12 pr-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }

    const closeModal = () => setActiveModal(null);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <img 
                    className="w-full h-full object-cover shadow-lg" 
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop" 
                    alt="House exterior" 
                />
            </div>

            {/* Right Section - Form */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10 lg:mt-3 mt-10 flex flex-col justify-center">
                <h1 className="mb-8 text-3xl lg:text-5xl text-center font-serif font-semibold hover:bg-gradient-to-r hover:to-yellow-500 hover:from-purple-600 hover:transition-colors cursor-context-menu text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-yellow-500">
                    Anchor Homes
                </h1>

                <div className="max-w-sm mx-auto w-full space-y-6">
                    <input
                        type="text"
                        placeholder="Username/Email"
                        className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                    />

                    <a className="block text-right text-sm hover:text-purple-800 transition-colors cursor-pointer"
                        onClick={() => setActiveModal("forgot-password")}>
                        Forgot password?
                    </a>

                    <button className="w-full bg-gradient-to-r from-purple-800 to-purple-300 text-white py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl hover:from-purple-900 hover:to-purple-400 active:transform active:scale-98 transition-all duration-200 cursor-pointer">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-2xl group-hover:w-full group-hover:h-full opacity-10"></span>
                        <span className="relative">LogIn</span>
                    </button>
                    
                    <div className="flex items-center gap-4">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-sm text-gray-500">or</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <button className="w-full flex items-center justify-center gap-3 border-2 border-gray-300 rounded-2xl py-3 px-4 hover:border-blue-400 hover:bg-blue-50 focus:bg-blue-50 active:bg-blue-100 transition-all duration-200 cursor-pointer">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            className="w-5 h-5"
                            alt="Google logo"
                        />
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600">
                            Continue with Google
                        </span>
                    </button>

                    <a className="block text-center text-sm hover:text-purple-800 transition-colors cursor-pointer"
                        onClick={() => setActiveModal("sign-up")}>
                        Create account
                    </a>

                    {activeModal && (
                    <>
                        <div 
                            className="fixed inset-0 bg-transparent bg-opacity-0 z-40"
                            onClick={closeModal}
                        />
                        
                        <div className="mx-auto fixed inset-x-4 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 animate-in zoom-in-95 duration-200 max-h-[90vh] min-h-[60vh] lg:max-w-[40vw] overflow-y-auto">
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <div className="flex gap-12">
                                    <h2 className="text-lg font-semibold text-gray-800 capitalize pl-7">
                                        {activeModal}
                                    </h2>
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
                            
                            <div className="pb-4 grid justify-center min-h-[39vh] max-h-[65vh]">
                                {renderModalContent(activeModal)}
                            </div>
                            
                            <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                                <div className="flex gap-2 w-1/2 mx-auto">
                                    <button
                                        onClick={closeModal}
                                        className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium cursor-pointer"
                                    >
                                    {activeModal === "sign-up" ? "Sign Up" : "Send"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}