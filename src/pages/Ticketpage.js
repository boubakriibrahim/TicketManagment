import { React, Suspense }from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Goldenticket } from "../components/3D models/Goldenticket";
import { Ticket } from "../components/3D models/Ticket";
import '../assets/css/ticketpage.css'
export default function Ticketpage() {
    return(
        <div className="ticket_page">
        <h1 className="gradient__text" >Congratulations, you have just bought one ticket to a match in our platform</h1>
        <Canvas className="canvas">
        <PerspectiveCamera makeDefault position={[15,20,1 ]} />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
              <Ticket/>
            </Suspense>
          </Canvas>
          </div>
    )
}