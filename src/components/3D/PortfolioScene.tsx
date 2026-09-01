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
        speed={reducedMotion ? 0 : 1}
        rotationIntensity={reducedMotion ? 0 : 0.08}
        floatIntensity={reducedMotion ? 0 : 0.2}
      >
        <RoundedBox
          args={[2.8, 2.1, 0.22]}
          radius={0.18}
          smoothness={5}
        >
          <meshStandardMaterial color="#1c5b5b" metalness={0.12} roughness={0.5} />

          <Text
            position={[0, 0.45, 0.15]}
            fontSize={0.23}
            maxWidth={2.2}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            SIVARANJANI
          </Text>

          <Text
            position={[0, 0.05, 0.15]}
            fontSize={0.15}
            maxWidth={2.2}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            OPERATIONS • MANAGEMENT
          </Text>

          <Text
            position={[0, -0.3, 0.15]}
            fontSize={0.12}
            maxWidth={2.2}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
          >
            AI • LEARNING • DATA • DIGITAL
          </Text>
        </RoundedBox>
      </Float>

      <SkillCard
        position={[-2.15, 1.25, -0.25]}
        rotation={[0, 0, -0.08]}
        title="OPERATIONS"
        subtitle="Workflow & Management"
      />

      <SkillCard
        position={[2.15, 1.05, -0.35]}
        rotation={[0, 0, 0.08]}
        title="LEARNING"
        subtitle="Course Creation"
      />

      <SkillCard
        position={[-2.05, -1.35, -0.35]}
        rotation={[0, 0, 0.06]}
        title="DATA"
        subtitle="Analysis & Reporting"
      />

      <SkillCard
        position={[2.05, -1.3, -0.25]}
        rotation={[0, 0, -0.06]}
        title="DIGITAL"
        subtitle="AI & Development"
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
        <color attach="background" args={['#efe4cf']} />
        <ambientLight intensity={1.8} />

        <directionalLight position={[4, 5, 6]} intensity={2} />
        <pointLight position={[-4, -2, 4]} intensity={1} />
        <pointLight position={[3, -3, 2]} intensity={0.7} />

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
