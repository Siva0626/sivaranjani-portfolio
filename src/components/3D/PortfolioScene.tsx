import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  OrbitControls,
  RoundedBox,
  Text,
} from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)

    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return reducedMotion
}

function useCompactDisplay() {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    const update = () => setIsCompact(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return isCompact
}

function SkillCard({
  position,
  rotation,
  title,
  subtitle,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  title: string
  subtitle: string
}) {
  return (
    <RoundedBox
      position={position}
      rotation={rotation}
      args={[2.15, 1.15, 0.16]}
      radius={0.12}
      smoothness={4}
    >
      <meshStandardMaterial color="#d9c6a4" metalness={0.08} roughness={0.58} />

      <Text
        position={[0, 0.18, 0.1]}
        fontSize={0.19}
        maxWidth={1.8}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>

      <Text
        position={[0, -0.18, 0.1]}
        fontSize={0.11}
        maxWidth={1.8}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text>
    </RoundedBox>
  )
}

function PortfolioObject({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return

    const time = state.clock.elapsedTime

    groupRef.current.rotation.y = Math.sin(time * 0.25) * 0.08
    groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.025
    groupRef.current.position.y = Math.sin(time * 0.7) * 0.08
  })

  return (
    <group ref={groupRef}>
      <Float
        speed={reducedMotion ? 0 : 1.2}
        rotationIntensity={reducedMotion ? 0 : 0.18}
        floatIntensity={reducedMotion ? 0 : 0.26}
      >
        <RoundedBox
          args={[3.1, 2.2, 0.24]}
          radius={0.18}
          smoothness={6}
        >
          <meshStandardMaterial color="#0D0D0D" metalness={0.18} roughness={0.4} emissive="#111111" emissiveIntensity={0.2} />

          <Text
            position={[0, 0.5, 0.15]}
            fontSize={0.22}
            maxWidth={2.8}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            color="#F4F3EF"
          >
            SIVARANJANI
          </Text>

          <Text
            position={[0, 0.08, 0.15]}
            fontSize={0.13}
            maxWidth={2.8}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            color="#D8FF3D"
          >
            OPERATIONS • MANAGEMENT
          </Text>

          <Text
            position={[0, -0.28, 0.15]}
            fontSize={0.11}
            maxWidth={2.8}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            color="#F4F3EF"
          >
            AI • DIGITAL • DATA
          </Text>
        </RoundedBox>
      </Float>

      <SkillCard
        position={[-2.25, 1.35, -0.35]}
        rotation={[0, 0, -0.08]}
        title="OPERATIONS"
        subtitle="Workflow & Management"
      />

      <SkillCard
        position={[2.3, 1.2, -0.18]}
        rotation={[0, 0, 0.08]}
        title="MANAGEMENT"
        subtitle="Operational Strategy"
      />

      <SkillCard
        position={[-2.15, -1.4, -0.4]}
        rotation={[0, 0, 0.06]}
        title="DIGITAL"
        subtitle="AI & Development"
      />

      <SkillCard
        position={[2.1, -1.35, -0.2]}
        rotation={[0, 0, -0.06]}
        title="AI"
        subtitle="Creative Systems"
      />
    </group>
  )
}

export function PortfolioScene() {
  const reducedMotion = useReducedMotion()
  const isCompact = useCompactDisplay()

  if (isCompact) {
    return (
      <div className="portfolio-3d portfolio-3d--fallback" role="img" aria-label="Portfolio capability summary for operations, learning, data, and digital work">
        <p>Operations</p><p>Learning</p><p>Data</p><p>Digital</p>
      </div>
    )
  }

  return (
    <div
      className="portfolio-3d"
      role="img"
      aria-label="Interactive three-dimensional professional portfolio visual showing operations, learning, data, and digital capabilities"
    >
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        frameloop={reducedMotion ? 'demand' : 'always'}
      >
        <color attach="background" args={['#0D0D0D']} />
        <ambientLight intensity={1.8} />

        <directionalLight position={[4, 5, 6]} intensity={2.3} color="#F4F3EF" />
        <pointLight position={[-4, -2, 4]} intensity={1.4} color="#D8FF3D" />
        <pointLight position={[3, -3, 2]} intensity={1.1} color="#FFFFFF" />

        <PortfolioObject reducedMotion={reducedMotion} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping={!reducedMotion}
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  )
}
