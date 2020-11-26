import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
//import { a } from 'react-spring/three';
import { useSpring } from "react-spring";

const Camera = ({ looking, ...props }) => {
  const cameraRef = useRef();
  const { setDefaultCamera } = useThree();

  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(cameraRef.current), []);

  // Update it every frame
  useFrame(({ clock }) => {
    cameraRef.current.updateMatrixWorld();
  });

  useSpring({
    to: {
      x: looking[0],
      y: looking[1],
      z: looking[2],
    },
    onFrame: (val) => {
     // console.log(val);
     // console.log(cameraRef.current.rotation.y);
      cameraRef.current.lookAt(val.x, val.y, val.z);
    },
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        {...props}
        fov={75}
        near={0.1}
        far={1000}
        z={10}
      />
    </>
  );
};

export default Camera;
