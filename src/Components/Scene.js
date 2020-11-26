import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Scene = () => {
  const mount = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 )
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    //camera.position.set(0, 0, 100);
    

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    //Creating the box
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    //Seting the Box
    var cube = new THREE.Mesh(geometry, material);
    //adding Box in the scene
    scene.add(cube);

    var lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    var points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    var lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    var line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);

    var line2Material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    var points2 = [];
    points2.push(new THREE.Vector3(0, 0, 0));
    points2.push(new THREE.Vector3(0, 10, 0));
    var line2Geometry = new THREE.BufferGeometry().setFromPoints(points2);
    var line2 = new THREE.Line(line2Geometry, line2Material);
    scene.add(line2);

    var loader = new THREE.FontLoader();
  
    loader.load('font/Roboto_Regular.json', function ( font ) {

      var textGeometry = new THREE.TextGeometry( ':v hola', {
        font: font,
        size: 5,
        height: 0.25,
        curveSegments: 12,
      } );

      var textMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      var text = new THREE.Mesh( textGeometry, textMat );

      text.position.x= -10;
      text.position.y= -7;
      scene.add(text);
    } );


    //end load function
    camera.position.z = 20;
    camera.position.x = 0;
    camera.lookAt(0, 0, 0);
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={mount}></div>;
};

export default Scene;
