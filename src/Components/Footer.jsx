import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">About Us</h4>
                        <p className="text-sm text-gray-400">
                            We provide digital solutions to empower businesses with innovative tools and strategies.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="text-gray-400 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} GeekSSort. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
