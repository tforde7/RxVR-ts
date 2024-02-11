import { Canvas } from "@react-three/fiber";
import Ground from "./Ground";
import { Sky } from "@react-three/drei";
import { Controllers, VRButton, XR } from "@react-three/xr";
import TeleportTravel from "./TeleportTravel";

// function Floor(props) {
// 	return (
// 		<mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
// 			<planeBufferGeometry args={[10, 10]} attach="geometry" />
// 			<meshBasicMaterial attach="material" color={'#25282F'} />
// 		</mesh>
// 	);
// }

const World = () => {
  return (
    <>
    <VRButton></VRButton>
    <Canvas>
        <XR>
            <TeleportTravel useNormal={true}>
                <Ground></Ground>
            </TeleportTravel>
            <Controllers></Controllers>
        <Sky></Sky>
        <ambientLight></ambientLight>
        {/* <OrbitControls></OrbitControls> */}

        </XR>


    </Canvas>
    </>

  );
}

export default World