import logo from './logo.svg';
import './App.css';
import { Canvas } from "@react-three/fiber"

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2,2,2]}></boxGeometry>
          <ambientLight intensity={0.5}></ambientLight>
          <spotLight position={[10,10,10]} angle={0.15} penumbra={1}></spotLight>
          <pointLight position={[-10,-10,-10]}></pointLight>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
