import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";


const Text = () => {
  const textMesh = useRef();

  const font = useLoader(THREE.FontLoader, "font/Roboto_Regular.json");

  return (

    <mesh  scale={[0.1,0.1,0.1]} position={[0,0,0]} >
       <textGeometry
        attach="geometry"
        args={['Hola', { font, size: 16, height: 0.25, curveSegments: 12 }]}
      />
      <meshNormalMaterial attach="material" /> 
    </mesh>
  );
};

export default Text;
