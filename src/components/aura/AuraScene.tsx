import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

/**
 * The AURA orb: a glowing, slowly distorting energy field that reacts subtly
 * to pointer movement. Kept deliberately light-weight (low poly counts, capped
 * DPR) so it stays smooth on mid-range phones.
 */
function Orb({ interactive }: { interactive: boolean }) {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // Idle rotation keeps the orb alive even without pointer input.
    group.current.rotation.y += delta * 0.12;
    if (interactive) {
      // Ease toward the pointer for a soft parallax tilt.
      group.current.rotation.x += (pointer.y * 0.25 - group.current.rotation.x) * 0.04;
      group.current.position.x += (pointer.x * 0.35 - group.current.position.x) * 0.04;
    }
    if (mesh.current) {
      const s = 1 + Math.sin(t * 0.8) * 0.02;
      mesh.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 12]} />
        <MeshDistortMaterial
          color="#7c3ff2"
          emissive="#3b6bff"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.7}
          distort={0.35}
          speed={1.1}
        />
      </mesh>
      {/* Faint outer shell suggesting an aura / energy field */}
      <mesh scale={1.45}>
        <icosahedronGeometry args={[1.35, 3]} />
        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

/** Floating specks representing voices, movement and connection. */
function Sparks({ count }: { count: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const ref = useRef<any>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#a5b4fc" size={0.035} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function AuraScene({ simplified = false }: { simplified?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={simplified ? 1 : [1, 1.75]}
      gl={{ antialias: !simplified, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#a855f7" />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#3b82f6" />
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <Orb interactive={!simplified} />
      </Float>
      <Sparks count={simplified ? 120 : 420} />
    </Canvas>
  );
}
