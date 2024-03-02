import './style.css'
import ReactDOM from 'react-dom/client'

import { Canvas } from '@react-three/fiber'



import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const data = new Array(1000).fill(0).map((d, id) => ({id}))

root.render(

    <Canvas>
        <Experience />
    </Canvas>

)