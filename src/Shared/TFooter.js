import { Footer } from "flowbite-react";
import React from "react";
import logo from '../Assets/logo.png'

const TFooter = () => {
    return (
        <div>
            <div className="w-full text-center bg-[#fff] lg:px-12 py-6">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="https://flowbite.com"
                        src={logo}
                        alt="Flowbite Logo"
                        name="TODOIST"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="TODOIST" year={2022} />
            </div>
        </div>
    );
};

export default TFooter;
