
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import * as THREE from 'three';
import { profile } from '../data/Profile'
// Mock profile data - replace with your actual import
// const profile = {
//   email: "your@email.com",
//   phone: "+1234567890",
//   whatsapp: "1234567890",
//   location: "Dhaka, Bangladesh"
// };

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full overflow-hidden py-20"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-400 tracking-wide">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ color: "var(--primary-text-color)" }}
          >
            Contact Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
            style={{ color: "var(--secondary-text-color)" }}
          >
            Have a project in mind? Let's work together to create something amazing.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* LEFT SIDE - Globe */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Globe3D />
            
            {/* Contact Info Cards */}
            <div className="mt-8 space-y-4">
              <ContactInfoCard 
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactInfoCard 
                icon={<Phone className="w-5 h-5" />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
              />
              <ContactInfoCard 
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value={profile.location}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Form Container */}
              <div 
                className="relative rounded-2xl bg-gray-900 border p-8"
                
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label 
                      className="block text-sm font-medium mb-3"
                      
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      style={{ 
                        borderColor: "var(--border-color, rgba(255,255,255,0.1))",
                        color: "var(--primary-text-color)"
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--primary-text-color)" }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      style={{ 
                        borderColor: "var(--border-color, rgba(255,255,255,0.1))",
                        color: "var(--primary-text-color)"
                      }}
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--primary-text-color)" }}
                    >
                      Message
                    </label>
                    <textarea
                      rows="5"
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      style={{ 
                        borderColor: "var(--border-color, rgba(255,255,255,0.1))",
                        color: "var(--primary-text-color)"
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= 3D GLOBE COMPONENT ================= */
function Globe3D() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Globe
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    
    // Create wireframe material
    const material = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add points (cities/locations)
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 100;
    const positions = new Float32Array(pointsCount * 3);
    
    for (let i = 0; i < pointsCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.51;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });
    
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x6366f1, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate globe
      globe.rotation.y += 0.002;
      points.rotation.y += 0.002;
      
      // Mouse interaction
      globe.rotation.x += (mouseY * 0.1 - globe.rotation.x) * 0.05;
      globe.rotation.y += (mouseX * 0.1 - globe.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[400px] rounded-2xl relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)'
      }}
    />
  );
}

/* ================= CONTACT INFO CARD ================= */
function ContactInfoCard({ icon, label, value, href }) {
  const content = (
    <>
      <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm opacity-60" style={{ color: "var(--secondary-text-color)" }}>
          {label}
        </p>
        <p className="font-medium" style={{ color: "var(--primary-text-color)" }}>
          {value}
        </p>
      </div>
    </>
  );

  const baseClasses = "flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:border-indigo-500/30";
  const style = {
    backgroundColor: "var(--foreground-color)",
    borderColor: "var(--border-color, rgba(255,255,255,0.1))"
  };

  if (href) {
    return (
      <a href={href} className={baseClasses} style={style}>
        {content}
      </a>
    );
  }

  return (
    <div className={baseClasses} style={style}>
      {content}
    </div>
  );
}