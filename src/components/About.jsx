import React from 'react'


export default function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="dark:text-white max-prose">

                Hi, I’m Md. Rafiqul Akhter — a passionate developer who loves turning ideas into clean, functional, and user-friendly digital experiences.

                I began my programming journey with HTML and CSS, and gradually expanded my skills into JavaScript, React, Node.js, MongoDB, payment integration systems, and more. I’ve always been fascinated by the digital world and strive to contribute to it meaningfully.

                When I’m not coding, you’ll likely find me traveling or immersed in a good book at the library(not a book worm but i read a lot). I believe in continuous learning, so I’m always exploring new tools, frameworks, and approaches to improve my craft.

                If you’d like to collaborate or just say hello, feel free to reach me at mdrafiqulakhter0 — I’d love to connect!
            </p>

            <div className="mt-4">
                <h3 className="font-semibold dark:text-gray-300">What I enjoy</h3>
                <p className="dark:text-white">Building UIs, animations, performance optimizations.</p>

                <h3 className="mt-3 font-semibold dark:text-gray-300">Hobbies</h3>
                <p className="dark:text-white">Travelling, football, badminton, cricket, reading, etc.</p>
            </div>
        </section>
    )
}
