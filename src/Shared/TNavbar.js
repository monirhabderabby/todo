import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const TNavbar = () => {
    return (
        <div className="px-3 md:px-6 l:px-12">
            <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center  text-xl font-semibold">
                    TODOIST
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link active={true}>
                    <Link to="/">TODO</Link>
                </Navbar.Link>
                <Navbar.Link><Link to="/completetasks">Completed Tasks</Link></Navbar.Link>
                <Navbar.Link><Link to="/calender">Calender</Link></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default TNavbar;
