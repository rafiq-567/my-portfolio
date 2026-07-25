import pic10 from '../assets/10s1.JPG'
import pic11 from '../assets/11s1.JPG'
import pic12 from '../assets/12s1.JPG'
import sixTour from '../assets/sixTour.JPG'
import bigBoom from '../assets/bigBoom.JPG'
// import eagle3d from '../assets/eagle3d.JPG'
import mamlaManager from '../assets/mamlaManager.png'
export const projects = [

  {
    id: "p1",
    name: "BigBoom",
    image: bigBoom,
    stack: ["Next.js", "Prisma", "Typescript", "Postgre SQL", "Neon", "Bcrypt"],
    description: "BigBoom is a modern furniture e-commerce web application built with Next.js, TypeScript, and Prisma. It offers a smooth, responsive user experience with secure authentication and scalable backend architecture. BigBoom focuses on clean UI, efficient data handling, and future-ready features for online furniture shopping.",
    live: "https://big-boom.vercel.app/",
    github: "https://github.com/rafiq-567/big-boom",
    challenges: "Implementing Authentication with NextAuth.",
    improvements: "Introduce offline access, Integrating SSLcommerz, real-time notifications"

  },
  {
    id: "p2",
    name: "Mamla-Manager",
    image: mamlaManager,
    stack: ["Next.js", "Zustand", "TypeScript", "Tanstack Query", "Mongoose", "JWT"],
    description: "MamlaManager is a comprehensive legal case management platform that helps lawyers and legal professionals organize cases, manage clients, and track court proceedings — all in one system. It features secure authentication with role-based access, an intuitive dashboard with real-time analytics, document management with cloud storage, and smart hearing reminders. The platform streamlines daily legal workflows with powerful search, filtering, and case tracking capabilities.",
    live: "https://mamla-manager.vercel.app/",
    github: "https://github.com/rafiq-567/mamla-manager",
    challenges: "Implementing real time update.",
    improvements: "Awesome landing page for users."

  },
  {
    id: "p3",
    name: "SixTour",
    image: sixTour,
    stack: ["Next.js", "Socket.IO", "stripe", "MongoDB", "ShadCN", "JWT"],
    description: "The Tour Management System is a full-stack web application designed to simplify and automate the process of planning, booking, and managing tours. This platform efficiently serves travelers, administrators, and moderators, enabling seamless tour booking, room management, payment tracking, and monitoring — all in one system.",
    live: "https://tour-management-system-team-ultimat-tan.vercel.app/",
    github: "https://github.com/rafiq-567/tour-management-system-team-ultimate-coding",
    challenges: "Implementing socket.io and automated budget planner",
    improvements: "Introduce offline access, real-time notifications, enhanced admin analytics, and performance optimizations."

  },
    {
    id: "p4",
    name: "Health Hub App",
    image: pic12,
    stack: ["React", "Tailwind", "Express.js", "MongoDB", "Stripe", "JWT"],
    description: "A comprehensive multi-vendor e-commerce platform for medicines and healthcare products, built with the MERN stack. Enables users to purchase medications, submit queries, and receive expert advice with a seamless shopping experience.",
    live: "https://health-hub-7c64c.web.app",
    github: "https://github.com/rafiq-567/B11-Assignment-12",
    challenges: "Responsive layout, image optimization, deployment.",
    improvements: "Add CMS, blog, animations."
  }
  ,
  {
    id: "p5",
    name: "Car Rental App",
    image: pic11,
    stack: ["React", "Tailwind", "Express.js", "MongoDB", "Stripe", "JWT"],
    description: "Car Rental System is a user-focused platform that streamlines car rentals through intuitive browsing, booking, and inventory management. It includes authentication, JWT-secured private routes, dynamic availability tracking, and full CRUD operations for cars and bookings. Built with a modern tech stack, the application is responsive, scalable, and optimized for a smooth end-to-end rental experience.",
    live: "https://car-rental-76f12.web.app/",
    github: "https://github.com/rafiq-567/B11-Assignment-11",
    challenges: "Auth, booking conflict handling, payments.",
    improvements: "Admin dashboard, payment integration."
  },
  {
    id: "p6",
    name: "Hobby hub",
    image: pic10,
    stack: ["React", "Tailwind", "Express.js", "MongoDB", "Stripe", "JWT"],
    description: "HobbyHub connects people through shared interests by enabling users to explore, create, and manage local hobby groups. It supports secure authentication, protected routes, and complete group management features. The application is fully responsive, modern in design, and deployed with a scalable client–server architecture.",
    live: "https://hobby-hub-authentication.web.app",
    github: "https://github.com/rafiq-567/B11-Assignment-10",
    challenges: "Sync state and API design.",
    improvements: "Add offline capability and notifications."
  },
  
]
