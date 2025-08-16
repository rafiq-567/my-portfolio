import pic10 from '../assets/10s1.jpg'
import pic11 from '../assets/11s1.jpg'
import pic12 from '../assets/12s1.jpg'
export const projects = [
  {
    id: "p1",
    name: "Health Hub App",
    image: pic12,
    stack: ["React", "Tailwind", "Vite"],
    description: "A comprehensive multi-vendor e-commerce platform for medicines and healthcare products, built with the MERN stack. Enables users to purchase medications, submit queries, and receive expert advice with a seamless shopping experience.",
    live: "https://health-hub-7c64c.web.app",
    github: "https://github.com/rafiq-567/B11-Assignment-12",
    challenges: "Responsive layout, image optimization, deployment.",
    improvements: "Add CMS, blog, animations."
  },
  {
    id: "p2",
    name: "Car Rental App",
    image: pic11,
    stack: ["MERN", "Tailwind"],
    description: "A full-stack car rental platform with booking features.",
    live: "https://car-rental-76f12.web.app/",
    github: "https://github.com/rafiq-567/B11-Assignment-11",
    challenges: "Auth, booking conflict handling, payments.",
    improvements: "Admin dashboard, payment integration."
  },
  {
    id: "p3",
    name: "Hobby hub",
    image: pic10,
    stack: ["React", "Node", "MongoDB"],
    description: "A simple website for people to explore their hobby and get connected.",
    live: "https://hobby-hub-authentication.web.app",
    github: "https://github.com/rafiq-567/B11-Assignment-10",
    challenges: "Sync state and API design.",
    improvements: "Add offline capability and notifications."
  }
]
