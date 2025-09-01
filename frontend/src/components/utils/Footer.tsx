import { footerSections } from "../../constants";
import { bottomLinks } from "../../constants";
import { Globe, DollarSign, Facebook, Twitter, Instagram } from 'lucide-react';
import React from "react";

const Footer = () =>{
    return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Left Side - Copyright and Links */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-1">
              <span className="text-sm text-gray-600">© 2025 Anchor Homes, Inc.</span>
              <span className="hidden sm:inline text-gray-400">·</span>
              <div className="flex flex-wrap items-center space-x-1">
                {bottomLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:underline"
                    >
                      {link.text}
                    </a>
                    {index < bottomLinks.length - 1 && (
                      <span className="text-gray-400">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Side - Language, Currency, Social */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Globe className="w-4 h-4" />
                <span className="font-medium">English (US)</span>
              </button>

              {/* Currency Selector */}
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <DollarSign className="w-4 h-4" />
                <span className="font-medium">USD</span>
              </button>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;