import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './components/Projects'
import "./App.css"
import { Toggle } from "./components/Toggle";
import useLocalStorage from 'use-local-storage'

export default function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div
      className="min-h-screen w-full flex flex-col transition-colors duration-300"
      style={{ backgroundColor: "var(--background-color)" }}
      data-theme={isDark ? "dark" : "light"}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
}

