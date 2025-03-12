
const Footer = () => {
    return (
        <footer className="bg-[#25307F] text-white py-9 w-full flex justify-center">
            <div className="container mx-auto px-8 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                    <div className="footer-section flex justify-center">
                        <div className="support-team">
                            <h4 className="font-semibold text-lg mb-2">Company</h4>
                            <ul className="space-y-1 text-center md:text-left">
                                <li>Home</li>
                                <li>About</li>
                                <li>Products</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-section flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-lg mb-2">Help</h4>
                        <ul className="space-y-1 text-center md:text-left">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-section flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-lg mb-2">Resources</h4>
                        <ul className="space-y-1 text-center md:text-left">
                            <li>Blogs</li>
                            <li>Youtube Channel</li>
                        </ul>
                    </div>
                    <div className="footer-section flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-lg mb-2">Get in touch</h4>
                        <ul className="space-y-1 text-center md:text-left">
                            <li>SRD House, LNB Road, Mangaldoi, Assam,784125</li>
                            <li>Email us : hello@organictea.com</li>
                            <li>Call us: +91 8210687508</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom m-16 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">© Copyright 2024, All Rights Reserved by NaturaLeaf</p>
                    <div className="social-icons flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;