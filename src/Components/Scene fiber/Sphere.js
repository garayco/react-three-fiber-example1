import React, { useRef } from "react";

const Sphere = (props) => {
  const meshSphere = useRef();
  return (
    <mesh position={[0, 0, 0]} ref={meshSphere}>
      <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
      <meshPhongMaterial
        attach="material"
        color="#f6f6fc"
      /*   opacity = {0.8} */
        transparent={true}
      />
    </mesh>
  );
};

export default Sphere;
