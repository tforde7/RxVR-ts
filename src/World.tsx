import { Canvas } from "@react-three/fiber";
import Ground from "./Ground";
import { OrbitControls, Sky } from "@react-three/drei";
import { Controllers, VRButton, XR } from "@react-three/xr";
import { Teleport } from "./Teleport";

const World = () => {
  return (
    <>
    <VRButton></VRButton>
    <Canvas>
        <XR>
            <Controllers></Controllers>
            <Teleport leftHand></Teleport>
        <Sky></Sky>
        <ambientLight></ambientLight>
        <OrbitControls></OrbitControls>
        <Ground></Ground>

        </XR>


    </Canvas>
    </>

  );
}

export default World