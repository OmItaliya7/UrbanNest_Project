// import logo from "../assets/logo.svg";
import logo from "../assets/download.png";
import { useState } from "react";
import menuIcon from "../assets/menu_icon.svg";
import crossIcon from "../assets/cross_icon.svg";

const Navbar = () =>{

    const [open, setOpen] = useState(false);

    return(
        <div className="absolute top-0 left-0 w-full z-10">
            <div className="max-w-8xl mx-auto flex justify-between items-center py-4  px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={logo} alt="logo" className="h-8 md:h-10 w-auto object-contain" />
                <ul className="hidden md:flex gap-7 text-white">
                    <a href="#home" className="cursor-pointer hover:text-gray-400">Home</a>
                    <a href="#about" className="cursor-pointer hover:text-gray-400">About</a>
                    <a href="#projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                    <a href="#testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
                </ul>
                <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full hover:bg-gray-200">
                    Sign up
                </button>
                {/* Menu icon if open then show mobile menu after open use cross icon */}
                {/* <img src={menuIcon} alt="" className="md:hidden w-7" onClick={() => setOpen(!open)}/> */}
                <img src={open ? crossIcon : menuIcon} alt="Menu-toogle" className="md:hidden w-7 cursor-pointer" onClick={() => setOpen(!open)}/>

                {/* Mobile menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg text-black flex flex-col items-center py-4 ${open ? "block" : "hidden"}`}>
                    <a onClick={() => setOpen(false)} href="#header" className="cursor-pointer hover:text-gray-400 py-2">Home</a>
                    <a onClick={() => setOpen(false)} href="#about" className="cursor-pointer hover:text-gray-400 py-2">About</a>
                    <a onClick={() => setOpen(false)} href="#projects" className="cursor-pointer hover:text-gray-400 py-2">Projects</a>
                    <a onClick={() => setOpen(false)} href="#testimonials" className="cursor-pointer hover:text-gray-400 py-2">Testimonials</a>
                </div>

            </div>
        </div>
    )
}

export default Navbar;