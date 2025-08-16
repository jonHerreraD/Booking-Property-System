
export default function LogIn() {
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
                <h1 className="mb-8  text-3xl lg:text-5xl text-center font-serif font-semibold hover:bg-gradient-to-r hover:to-yellow-500 hover:from-purple-600 hover:transition-colors cursor-context-menu text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-yellow-500">
                    Anchor Homes
                </h1>

                <div className="max-w-sm mx-auto w-full space-y-6">
                    {/* Username */}
                    <input
                        type="text"
                        placeholder="Username/Email"
                        className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border-2 border-gray-300 rounded-2xl shadow-lg px-4 py-3 focus:outline-none hover:border-purple-400 focus:border-purple-500 transition-colors"
                    />

                    {/* Forgot password */}
                    <a href="#" className="block text-right text-sm hover:text-purple-800 transition-colors">
                        Forgot password?
                    </a>

                    {/* Login button */}
                    <button className="w-full bg-gradient-to-r from-purple-800 to-purple-300 text-white py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl hover:from-purple-900 hover:to-purple-400 active:transform active:scale-98 transition-all duration-200 cursor-pointer">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-2xl group-hover:w-full group-hover:h-full opacity-10"></span>
                        <span className="relative">LogIn</span>
                    </button>
                    
                    {/* Divider */}
                    <div className="flex items-center gap-4">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-sm text-gray-500">or</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    {/* Google button */}
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

                    {/* Create account link */}
                    <a href="#" className="block text-center text-sm hover:text-purple-800 transition-colors">
                        Create account
                    </a>
                </div>
            </div>
        </div>
    );
}