import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assets/logo.png'

const TNavbar = () => {
    return (
        <div className="px-3 md:px-6 l:px-12">
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-1 h-12 w-12 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center  text-xl font-semibold">
                        TODOIST
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : undefined
                        }
                    >
                        Tasks
                    </NavLink>
                    <NavLink
                        to="/completetasks"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : undefined
                        }
                    >
                        Completed Tasks
                    </NavLink>
                    <NavLink
                        to="/calender"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : undefined
                        }
                    >
                        Calendar
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default TNavbar;
