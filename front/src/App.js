import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from 'react';
import {config, useSpring, animated } from "@react-spring/three"
const Box = (props)=>{
  const ref = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(()=>(ref.current.rotation.x += 0.05));

  const {scale} = useSpring({
    scale: clicked ? 2 : 1,
    config: config.wobbly,
  })
  return (
      <animated.mesh 
        {...props}
        ref={ref}
        onClick={()=>setClicked(!clicked)}
        scale={scale}
        onPointerOver={()=>setHovered(true)}
        onPointerOut= {()=>setHovered(false)}
      >
        <boxGeometry args={[2,2,2]}></boxGeometry>
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"}></meshStandardMaterial>
      </animated.mesh>
  )
}

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas>
            <Box position={[-3, 0, 0]}></Box>
            <Box position={[3, 0, 0]}></Box>
            <ambientLight intensity={0.5}></ambientLight>
            <spotLight position={[10,10,10]} angle={0.15} penumbra={1}></spotLight>
            <pointLight position={[-10,-10,-10]}></pointLight>
        </Canvas>
      </div>
      <h1>Theree.js Fiber</h1>
      <a>もっと見る</a>
    </>
  );
}

export default App;
