const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold">Categories</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Clothing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Shoes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Accessories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Electronics
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold">Follow Us</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold">Newsletter</h3>
                        <p className="mt-4 text-gray-300">
                            Subscribe to our newsletter to receive updates and exclusive
                            offers.
                        </p>
                        <form className="mt-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-gray-700 text-gray-300"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="mt-8 border-gray-700" />
                <p className="text-gray-300 mt-8 lg:text-center">
                    © 2023 Task Management System. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;