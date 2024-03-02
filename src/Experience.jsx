import CustomObject from './CustomObject.jsx'


import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRefm, meshRef } from 'react'


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export default function Experience()

{    
    const { camera, gl } = useThree()

    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight/>
        <ambientLight intensity={1.5} />
        
        <mesh rotation-x = {Math.PI * 0.5}>
            <cylinderGeometry attach ="geometry" />
            <meshStandardMaterial attach = "material" color = "#fff"/>
        </mesh>
    </>
}