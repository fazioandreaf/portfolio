import React, {useRef, useState} from 'react';
import {Canvas, useFrame, ThreeElements} from '@react-three/fiber';

const Box = (props: ThreeElements['mesh']) => {
	// This reference will give us direct access to the mesh
	const meshRef = useRef<THREE.Mesh>(null!);
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (meshRef.current.rotation.y += delta));
	// Return view, these are regular three.js elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
};

const Threejs = () => {
	return (
		<div>
			<Canvas>
				<ambientLight intensity={0.1} />
				<directionalLight position={[0, 0, 5]} color="red" />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</div>
	);
};

export default Threejs;
