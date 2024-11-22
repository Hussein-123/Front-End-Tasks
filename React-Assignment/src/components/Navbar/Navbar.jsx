import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="py-6 bg-[#2c3e50] text-white w-full fixed top-0 left-0 right-0 z-50">
                <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 px-3">
                    <div className="logo flex justify-between items-center">
                        <NavLink to="/">
                            <h1 className="uppercase text-[26px] lg:text-3xl font-bold">smart framework</h1>
                        </NavLink>
                        <button className="text-3xl cursor-pointer lg:hidden" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    <div className={`nav-link mt-8 lg:mt-0 lg:block ${isOpen ? 'block' : 'hidden'}`} id="links">
                        <ul className="flex flex-col items-start lg:flex-row lg:items-center uppercase gap-8">
                            <li>
                                <NavLink to="/about" className={({ isActive }) => {
                                    return `p-2 font-bold rounded-md ${isActive ? "bg-[#1abc9c]" : ""}`
                                }}>about</NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolio" className={({ isActive }) => {
                                    return `p-2 font-bold rounded-md ${isActive ? "bg-[#1abc9c]" : ""}`
                                }}>portfolio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => {
                                    return `p-2 font-bold rounded-md ${isActive ? "bg-[#1abc9c]" : ""}`
                                }}>contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
