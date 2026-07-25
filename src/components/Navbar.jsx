import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Zap, GraduationCap, Briefcase, Code2, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router';

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', link: '#home', icon: Home },
    { name: 'About', link: '#about', icon: User },
    { name: 'Skills', link: '#skills', icon: Zap },
    { name: 'Education', link: '#education', icon: GraduationCap },
    { name: 'Experience', link: '#experience', icon: Briefcase },
    { name: 'Projects', link: '#projects', icon: Code2 },
    { name: 'Contact', link: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + link);
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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

  const linkClass = "relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5";

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-full border-2 border-cyan-500/50 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 px-4 md:px-8 py-3 md:py-4"
      >
        {/* Desktop nav - hidden on mobile */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={location.pathname === '/' ? item.link : '/' + item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                onMouseEnter={() => setActive(item.name)}
                onMouseLeave={() => setActive(null)}
                className="relative flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
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

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center justify-between">
          <span className="text-white font-semibold text-sm">Portfolio</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-300 hover:text-white transition-colors p-1"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl -z-10" />
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-3 rounded-2xl border border-cyan-500/30 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={location.pathname === '/' ? item.link : '/' + item.link}
                    onClick={(e) => handleNavClick(e, item.link)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
