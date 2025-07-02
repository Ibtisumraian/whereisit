import React from 'react';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-gray-800 text-gray-300 p-10">
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to='/AboutUs'>About Us</Link>
                    <Link to='/allItems'>Lost Items</Link>
                    <Link to='/allItems'>Found Items</Link>
                    <Link to='/support'>How It Works</Link>
                    <Link to='/support'>Contact Support</Link>
                    {/* <a className="link link-hover">About Us</a> */}
                    {/* <a className="link link-hover">Lost Items</a> */}
                    {/* <a className="link link-hover">Found Items</a> */}
                    {/* <a className="link link-hover">How It Works</a>
                    <a className="link link-hover">Contact Support</a> */}
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <Link to='/support'>FAQs</Link>
                    <Link to='/contact'>Safety & Reporting Tips</Link>
                    <Link to='/AboutUs'>Privacy Policy</Link>
                    <Link to='/contact'>Terms of Service</Link>
                    <Link to='/support'>Community Guidelines</Link>
                    {/* <a className="link link-hover">FAQs</a>
                    <a className="link link-hover">Safety & Reporting Tips</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Community Guidelines</a> */}
                </nav>
                <nav>
                    <h6 className="footer-title">Get In Touch</h6>
                    <a className="link link-hover flex items-center gap-3"><FaLocationDot /> 123 Community Way, Anytown, USA</a>
                    <a className="link link-hover flex items-center gap-3"><MdEmail /> support@whereisit.com</a>
                    <a className="link link-hover flex items-center gap-3"><FaPhoneFlip /> +1 (800) 555-HELP</a>
                </nav>
                </footer>
                <footer className="footer bg-gray-800 text-gray-300 border-base-300 border-t px-10 py-4">
                <aside className="flex flex-col gap-3">                
                    <h1 className='text-3xl text-[#00A79D] fontInter font-bold'>WhereIsIt</h1>
                    <p>
                    Dedicated to reuniting lost items with their owners. <br /> We believe in the power of community and kindness.
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <a href='https://x.com/' target='blank'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href='https://www.youtube.com/' target='blank'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href='https://www.facebook.com/' target='blank'>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    </div>
                </nav>
            </footer>
          
            <footer className="footer sm:footer-horizontal footer-center bg-gray-800 text-gray-300 p-4 ">
                <aside className=' '>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by WhereIsIt</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;