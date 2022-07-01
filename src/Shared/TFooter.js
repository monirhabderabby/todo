import { Footer } from "flowbite-react";
import React from "react";

const TFooter = () => {
    return (
        <div>
            <div className="w-full text-center bg-[#f0f3ff] px-12">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
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
