import { Canvas } from "@react-three/fiber";
import Ground from "./Ground";
import { OrbitControls, Sky } from "@react-three/drei";
import { Controllers, TeleportationPlane, VRButton, XR } from "@react-three/xr";

const World = () => {
  return (
    <>
    <VRButton></VRButton>
    <Canvas>
        <XR>
            <Controllers></Controllers>
            <TeleportationPlane></TeleportationPlane>
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