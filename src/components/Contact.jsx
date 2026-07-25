import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import * as THREE from 'three';
import { profile } from '../data/Profile'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Using Web3Forms (free, no signup needed for testing)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error:', error);
    }
  };
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden py-20"

    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div> <br /> <br /></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Mail className="w-4 h-4  text-indigo-400" />

            <span className="text-sm font-medium p-4 text-indigo-400 tracking-wide">
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
        <div><br /></div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* LEFT SIDE - Globe Only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Globe3D />
          </motion.div>

          {/* RIGHT SIDE - Contact Form and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Contact Form */}
            <div className="relative group ">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur group-hover:opacity-20 transition-opacity duration-500" />

              {/* Form Container */}
              <div
                className="relative rounded-2xl bg-gray-900 border border-gray-800 p-8"
              >
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="px-2">
                    <label
                      className="block text-sm font-medium mb-5 text-gray-300"
                    >
                    Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 sm:px-8 py-4 sm:py-6 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="px-2">
                    <label
                      className="block text-sm font-medium mb-5 text-gray-300"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 sm:px-8 py-4 sm:py-6 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="px-2">
                    <label
                      className="block text-sm font-medium mb-5 text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Your message here..."
                      className="w-full px-4 sm:px-8 py-4 sm:py-6 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>

                  {status === 'success' && (
                    <p className="text-green-400 text-center text-sm">Message sent successfully! ✓</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm">Failed to send. Please try again.</p>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info Cards - Below Form */}
            <div
              className="rounded-2xl bg-gray-900 border border-gray-800 p-8 space-y-5"
            >
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
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animFrameId;
    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      // Rotate globe
      globe.rotation.y += 0.003;
      points.rotation.y += 0.003;

      // Mouse tilt (only affects x rotation so y spins freely)
      globe.rotation.x += (mouseY * 0.05 - globe.rotation.x) * 0.02;

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
      cancelAnimationFrame(animFrameId);
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
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl relative overflow-hidden"
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
      <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-400 mb-1">
          {label}
        </p>
        <p className="font-medium text-white">
          {value}
        </p>
      </div>
    </>
  );

  const baseClasses = "flex items-center gap-5 px-5 py-4 rounded-lg bg-gray-800/30 border border-gray-700/50 transition-all duration-300 hover:bg-gray-800/50 hover:border-indigo-500/30";

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <div className={baseClasses}>
      {content}
    </div>
  );
}