
import { motion } from "framer-motion";
import { 
  SiReact, SiHtml5, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiDocker, SiGit 
} from "react-icons/si";

const frontendSkills = [
  { name: "React", icon: <SiReact color="#61DAFB" />, glow: "shadow-blue-500/50" },
  { name: "HTML5", icon: <SiHtml5 color="#E34F26" />, glow: "shadow-orange-500/50" },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" />, glow: "shadow-cyan-500/50" },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, glow: "shadow-yellow-500/50" },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, glow: "shadow-blue-600/50" },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, glow: "shadow-white/30" },
];

const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs color="#339933" />, glow: "shadow-green-500/50" },
  { name: "Express", icon: <SiExpress color="#808080" />, glow: "shadow-gray-400/50" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, glow: "shadow-green-600/50" },
  { name: "Postman", icon: <SiPostman color="#FF6C37" />, glow: "shadow-orange-400/50" },
  { name: "Docker", icon: <SiDocker color="#2496ED" />, glow: "shadow-blue-400/50" },
  { name: "Git", icon: <SiGit color="#F05032" />, glow: "shadow-red-500/50" },
];

const SkillCard = ({ skill }) => (
  /* The Card Container */
  <div className="relative group overflow-hidden">
    {/* The Animated Top Glow Line - Only appears on Hover */}
    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    
    <div className="flex flex-col items-center justify-center min-w-[150px] h-[110px] bg-[#121212] border border-white/5 rounded-xl p-4 transition-all duration-300 group-hover:bg-[#1a1a2e] group-hover:border-white/20 group-hover:shadow-[0_-10px_20px_-5px_rgba(192,38,211,0.3)]">
      <span className="text-4xl mb-3 transition-transform duration-500 group-hover:scale-110">
        {skill.icon}
      </span>
      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left" }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden py-4 mask-gradient">
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? [0, -1200] : [-1200, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className=" py-32 overflow-hidden relative z-50 min-h-screen ">
      <div className=" mx-auto px-6 mb-20 text-center">
        <h2 className="text-5xl  font-extrabold text-white mb-4 tracking-tighter italic">
          Technologies I <span className="text-fuchsia-500">Master</span>
        </h2>
        
      </div>

      <div className="flex flex-col gap-12 text-center">
        <p className="text-gray-500 text-lg mx-auto italic">
          Frontend
        </p>
        <MarqueeRow items={frontendSkills} direction="left" />
        <p className="text-gray-500 text-lg  mx-auto italic">
          Backend
        </p>
        <MarqueeRow items={backendSkills} direction="right" />
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}