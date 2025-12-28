import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 1, 1]} intensity={2} />
        
        {/* A 3D Sphere that distorts and floats */}
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#4f46e5" // Indigo color to match your theme
            attach="material"
            distort={0.4} // How much it bends
            speed={2}     // Animation speed
          />
        </Sphere>
        
        {/* Allows the user to rotate the object slightly */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}