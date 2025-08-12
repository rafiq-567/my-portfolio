import React, { useState } from 'react'
import { Link } from 'react-router'
import { profile } from '../data/Profile'
import logo from '../assets/ra-file-symbol.png'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar bg-base-100 shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="h-8 w-8" />
                        {/* <span className="font-bold text-lg">Your Name</span> */}
                    </Link>
                    
                </div>

                <div className="hidden md:flex gap-4 items-center">
                    <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
                    <a href="#about" className="btn btn-ghost btn-sm">About</a>
                    <a href="#skills" className="btn btn-ghost btn-sm">Skills</a>
                    <a href="#projects" className="btn btn-ghost btn-sm">Projects</a>
                    <a href="#contact" className="btn btn-ghost btn-sm">Contact</a>
                </div>

                <div>
                    <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">Resume</a>
                </div>

                <div className="md:hidden">
                    <button className="btn btn-ghost" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {open && (
                <div className="md:hidden bg-base-100 border-t">
                    <div className="flex flex-col p-4 gap-2">
                        <Link onClick={() => setOpen(false)} to="/" className="py-2">Home</Link>
                        <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
                        <a onClick={() => setOpen(false)} href="#skills" className="py-2">Skills</a>
                        <a onClick={() => setOpen(false)} href="#projects" className="py-2">Projects</a>
                        <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    )
}
