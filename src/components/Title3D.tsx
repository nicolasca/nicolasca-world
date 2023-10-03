'use client'

import { Center, OrbitControls, Text3D } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Title3D() {
  return (
    <Canvas>
      <OrbitControls makeDefault minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2} />
      <Center>
        <Text3D
          font='/fonts/better-grade-regular.json'
          size={2}
          height={0.2}
          curveSegments={5}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          nicolasca
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Canvas>
  )
}
