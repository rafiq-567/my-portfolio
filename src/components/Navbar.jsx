// import React, { useState } from 'react'
// import { Link } from 'react-router'
// import { profile } from '../data/Profile'
// import logo from '../assets/ra-file-symbol.png'


// export default function Navbar() {
//     const [open, setOpen] = useState(false)
//     return (
//         <nav className="navbar bg-base-100 shadow-md sticky top-0 z-40 ">
//             <div className="container px-4 flex justify-between items-center">
//                 <div className="flex items-center gap-3">
                    
//                     <Link to="/" className="flex items-center gap-2">
//                         <img src={logo} alt="Logo" className="h-8 w-8 bg-white" />
//                         {/* <span className="font-bold text-lg">Your Name</span> */}
//                     </Link>
                    
//                 </div>

//                 <div className="hidden md:flex gap-4 items-center">
//                     <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
//                     <a href="#about" className="btn btn-ghost btn-sm">About</a>
//                     <a href="#skills" className="btn btn-ghost btn-sm">Skills</a>
//                     <a href="#projects" className="btn btn-ghost btn-sm">Projects</a>
//                     <a href="#contact" className="btn btn-ghost btn-sm">Contact</a>
                    
//                 </div>

//                 <div>
//                     <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">Resume</a>
//                 </div>

//                 <div className="md:hidden">
//                     <button className="btn btn-ghost" onClick={() => setOpen(!open)}>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* mobile menu */}
//             {open && (
//                 <div className="md:hidden bg-base-100 border-t">
//                     <div className="flex flex-col items-center p-4 gap-2">
//                         <Link onClick={() => setOpen(false)} to="/" className="py-2">Home</Link>
//                         <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
//                         <a onClick={() => setOpen(false)} href="#skills" className="py-2">Skills</a>
//                         <a onClick={() => setOpen(false)} href="#projects" className="py-2">Projects</a>
//                         <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     )
// }

// import React, { useState } from 'react'
// import { Link } from 'react-router'
// import { profile } from '../data/Profile'
// import logo from '../assets/ra-file-symbol.png'
// import { Toggle } from "./Toggle";

// export default function Navbar({ isDark, setIsDark }) {
//     const [open, setOpen] = useState(false)
//     return (
//         /* Added h-16 or min-h-16 to fix the Y-axis height issue */
//         <nav className="navbar bg-base-100 shadow-md sticky top-0 z-40 min-h-[4rem] flex justify-center">
            
//             {/* The container handles X-axis centering */}
//             <div className="container mx-auto px-4 flex justify-between items-center w-full">
                
//                 {/* Logo Area */}
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center gap-2">
//                         <img src={logo} alt="Logo" className="h-9 w-9 bg-white rounded-md" />
//                     </Link>
//                 </div>

//                 {/* Desktop Links - Vertically centered by items-center */}
//                 <div className="hidden md:flex gap-2 items-center">
//                     <Link to="/" className="btn btn-ghost btn-sm px-4">Home</Link>
//                     <a href="#about" className="btn btn-ghost btn-sm px-4">About</a>
//                     <a href="#skills" className="btn btn-ghost btn-sm px-4">Skills</a>
//                     <a href="#projects" className="btn btn-ghost btn-sm px-4">Projects</a>
//                     <a href="#contact" className="btn btn-ghost btn-sm px-4">Contact</a>
//                 </div>

//                 {/* Action Area */}
//                 <div className="flex items-center gap-2">
//                     <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm md:btn-md">
//                         Resume
//                     </a>
                    
//                     {/* Mobile Toggle */}
//                     <div className="md:hidden">
//                         <button className="btn btn-ghost btn-square" onClick={() => setOpen(!open)}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {open && (
//                 <div className="absolute top-full left-0 w-full md:hidden bg-base-100 border-t shadow-lg">
//                     <div className="flex flex-col p-4 gap-2">
//                         <Link onClick={() => setOpen(false)} to="/" className="py-2">Home</Link>
//                         <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
//                         <a onClick={() => setOpen(false)} href="#skills" className="py-2">Skills</a>
//                         <a onClick={() => setOpen(false)} href="#projects" className="py-2">Projects</a>
//                         <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     )
// }


import React, { useState } from 'react'
import { Link } from 'react-router'
import { profile } from '../data/Profile'
import logo from '../assets/ra-file-symbol.png'
import { Toggle } from "./Toggle"; // Import the Toggle here

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
  className=" fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl "
  style={{ backgroundColor: "color-mix(in srgb, var(--background-color) 85%, transparent)" }}
>

      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2  hover:opacity-80 transition">
          <img src={logo} alt="Logo" className="h-8 w-8 invert dark:bg-white dark:invert-0 " />
          {/* <span className="font-bold tracking-tighter text-xl">PORTFOLIO</span> */}
        </Link>

        {/* Desktop Links with Hover Effects */}
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div >
          {/* <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} /> */}
          {/* <button className="hidden md:block btn btn-sm btn-outline border-white/20 text-white rounded-full hover:bg-white hover:text-black">
             Contact Me
          </button> */}
          
          <span className="font-bold tracking-tighter text-xl">PORTFOLIO</span>
          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}