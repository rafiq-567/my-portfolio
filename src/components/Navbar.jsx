

// import React, { useState } from 'react'
// import { Link } from 'react-router'
// import { profile } from '../data/Profile'
// import logo from '../assets/ra-file-symbol.png'


// export default function Navbar({ isDark, setIsDark }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav
//   className=" fixed top-0 left-0 w-full z-50 border-b border-white/5 backdrop-blur-xl "
  
// >

//       <div className="mx-auto px-6 h-16 flex justify-between items-center">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-2  hover:opacity-80 transition">
//           <img src={logo} alt="Logo" className="h-8 w-8 invert dark:bg-white dark:invert-0 " />
//           {/* <span className="font-bold tracking-tighter text-xl">PORTFOLIO</span> */}
//         </Link>

//         {/* Desktop Links with Hover Effects */}
//         <div className="hidden md:flex gap-8 items-center">
//           {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
//             <a 
//               key={item} 
//               href={`#${item.toLowerCase()}`} 
//               className="text-sm font-medium text-zinc-400 hover:text-white transition-all relative group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all group-hover:w-full" />
//             </a>
//           ))}
//         </div>

//         <div >
      
          
//           <span className="font-bold tracking-tighter text-xl">PORTFOLIO</span>
//           {/* Mobile Toggle */}
//           <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Zap, GraduationCap, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const [active, setActive] = useState(null);

  const navItems = [
    { name: 'Home', link: '#home', icon: Home },
    { name: 'About', link: '#about', icon: User },
    { name: 'Skills', link: '#skills', icon: Zap },
    { name: 'Education', link: '#education', icon: GraduationCap },
    { name: 'Projects', link: '#projects', icon: Briefcase },
    { name: 'Contact', link: '#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-full border-2 border-cyan-500/50 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 px-6 py-4"
      >
        <div className="flex items-center justify-center gap-4 ">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.link}
                onMouseEnter={() => setActive(item.name)}
                onMouseLeave={() => setActive(null)}
                className="relative flex items-center gap-1.5 px-5 py-2.5 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
                
                {active === item.name && (
                  <motion.div
                    layoutId="active"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-0 rounded-full border border-cyan-400/50 bg-cyan-500/10"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl -z-10" />
      </motion.div>
    </nav>
  );
}