import React from 'react';

const Footer = () => {
    return (
        <div className="py-12" style={{ backgroundColor: '#a142f5' }}>
            <div className="w-11/12 mx-auto">
                <h1 className="text-center text-3xl text-white">Gadget Heaven</h1>
                <p className="text-white text-center">
                    Leading the way in cutting-edge technology and innovation.
                </p>

                <div className="border-b my-5 border-white"></div>

                <div className="flex justify-around text-white">
                    {/* Services Section */}
                    <div>
                        <p className="text-lg">Services</p>
                        <p>Product Support</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns</p>
                    </div>

                    {/* Company Section */}
                    <div>
                        <p className="text-xl">Company</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <p className="text-xl">Legal</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
