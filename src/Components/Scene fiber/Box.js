import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring,  a } from "react-spring/three";

const Box = ({ changeLooking, ...props }) => {

   const meshBox = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    //console.log(mesh.current.rotation.y);
    //console.log(mesh.current.rotation.x);
     meshBox.current.rotation.x = meshBox.current.rotation.y += 0.01;
  });

  const onClickBox = () => {
    setActive(!active);
    changeLooking(props.position);
  };

  /*   useSpring({
    from: {
      y: 20,
    },
    to: {
      y: props.position[1],
    },
    onFrame: ({ y }) => {
     // console.log(y);
      mesh.current.position.y = y;
    },
    config: { mass: 20, tension: 150, friction: 50 }
  }); */

  const animation = useSpring({
    from: {
      position: [0,20,0],
    },
    to: {
      position: props.position,
    },
    config: { mass: 20, tension: 150, friction: 50 },
  });

  return (
    <>
      <a.mesh 
        /* {...props} */
        ref={meshBox}
        {...animation} 
        onClick={onClickBox}
        scale={ active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          attach="material"
          color={hovered ? "hotpink" : "orange"}
        
        />
      </a.mesh>
    </>
  );
};

export default Box;
