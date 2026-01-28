// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Home, User, Zap, GraduationCap, Briefcase, Mail } from 'lucide-react';
// import { Link } from 'react-router';

// export default function Navbar() {
//   const [active, setActive] = useState(null);

//   const navItems = [
//     { name: 'Home', link: '#home', icon: Home },
//     { name: 'About', link: '#about', icon: User },
//     { name: 'Skills', link: '#skills', icon: Zap },
//     { name: 'Education', link: '#education', icon: GraduationCap },
//     { name: 'Projects', link: '#projects', icon: Briefcase },
//     { name: 'Contact', link: '#contact', icon: Mail },
//   ];

//   const handleClick = (e, link) => {
//     e.preventDefault();
//     const element = document.querySelector(link);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
//       <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative rounded-full border-2 border-cyan-500/50 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 px-6 py-4"
//       >
//         <div className="flex items-center justify-center gap-4">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <Link
//                 key={item.name}
//                 to={item.link}
//                 onClick={(e) => handleClick(e, item.link)}
//                 onMouseEnter={() => setActive(item.name)}
//                 onMouseLeave={() => setActive(null)}
//                 className="relative flex items-center gap-1.5 px-5 py-2.5 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
//               >
//                 <Icon className="w-4 h-4" />
//                 <span>{item.name}</span>
                
//                 {active === item.name && (
//                   <motion.div
//                     layoutId="active"
//                     transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
//                     className="absolute inset-0 rounded-full border border-cyan-400/50 bg-cyan-500/10"
//                   />
//                 )}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Glow effect */}
//         <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl -z-10" />
//       </motion.div>
//     </nav>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Zap, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

export default function Navbar() {
  const [active, setActive] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', link: '#home', icon: Home },
    { name: 'About', link: '#about', icon: User },
    { name: 'Skills', link: '#skills', icon: Zap },
    { name: 'Education', link: '#education', icon: GraduationCap },
    { name: 'Projects', link: '#projects', icon: Briefcase },
    { name: 'Contact', link: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/' + link);
    } else {
      // We're already on home page, just scroll
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scrolling when navigating from another page with hash
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-full border-2 border-cyan-500/50 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 px-6 py-4"
      >
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={location.pathname === '/' ? item.link : '/' + item.link}
                onClick={(e) => handleNavClick(e, item.link)}
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
              </Link>
            );
          })}
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl -z-10" />
      </motion.div>
    </nav>
  );
}