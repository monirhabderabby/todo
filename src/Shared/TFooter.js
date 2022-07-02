import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'

const TFooter = () => {
    return (
        <div className="relative">
            <div className="w-full text-center bg-[#fff] lg:px-12 py-6">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="https://flowbite.com"
                        src={logo}
                        alt="Flowbite Logo"
                        name="TODOIST"
                    />
                    <Footer.LinkGroup>
                        <div>
                        <Link to="/about" className="mx-2">About</Link>
                        <Link to="/calender" className="mx-2">Calendar</Link>
                        </div>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="TODOIST" year={2022} />
            </div>
        </div>
    );
};

export default TFooter;
