const Ground = () => {
    return (
        <>
        <mesh scale={10} rotation-x={-Math.PI * 0.5}>
            <planeGeometry></planeGeometry>
            <meshStandardMaterial color="green"></meshStandardMaterial>
        </mesh>
        </>
    )
}

export default Ground;
