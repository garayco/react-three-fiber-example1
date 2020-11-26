import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  Suspense,
} from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import Box from "./Box";
import Camera from "./Camera";
import { useSprings } from "react-spring";
import Text from "./Text";
import * as THREE from "three";
import Sphere from "./Sphere";

/* const CameraConfiguration = forwardRef((props, ref) => {
  useFrame(() => {
    ref.updateProjectionMatrix((ref.position.z = 5));
    ref.updateProjectionMatrix(ref.lookAt(0, 0, 0));
  });
  return null;
}); */

const SceneFiber = () => {
  const [looking, setLooking] = useState([0, 0, 0]);

  const changeLooking = (position) => {
    console.log(position);
    setLooking(position);
  };

  const number = 5;
  const [springs, set] = useSprings(number, (i) => {
    console.log(number);
    console.log("i: " + i);
    return {
      from: {
        position: [1, 1, 1],
        color: "red",
      },
    };
  });

  const data = [
    {
      position: [-2.8, 0, 0],
    },
    {
      position: [3.5, 0, 0],
    },
    {
      position: [0, 4.5, -1.2],
    },
  ];

  console.log({ ...springs[0] });

  return (
    <>
      <Canvas
         /*   gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}  */
         
        onCreated={({ gl }) => {
          //https://threejs.org/docs/#api/en/renderers/WebGLRenderer.toneMapping
/*            gl.setClearColor("white");
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;  */
        }}
      >
        <Camera position={[0, 0, 10]} looking={looking} />
        <ambientLight intensity={1} />

         <pointLight position={[100, 100, 100]} intensity={2.2} />
        {data.map((val, i) => {
          return (
            <Box
              key={i}
              changeLooking={changeLooking}
              position={val.position}
            />
          );
        })}   

     {/*    <Sphere /> */}

        <Suspense fallback={null}>
          <Text />
        </Suspense>
      </Canvas>
    </>
  );
};

export default SceneFiber;
