import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("red");
	const [amarillo, setAmarillo] = useState("yellow");
	const [verde, setVerde] = useState("green");

	return (
		<>
			<div className="semaforo">
				<div
					className={rojo}
					onClick={() => {
						setRojo("red light");
						setAmarillo("yellow");
						setVerde("green");
					}}></div>

				<div
					className={amarillo}
					onClick={() => {
						setAmarillo("yellow light");
						setRojo("red");
						setVerde("green");
					}}></div>
				<div
					className={verde}
					onClick={() => {
						setAmarillo("yellow");
						setRojo("red");
						setVerde("green light");
					}}></div>
			</div>
		</>
	);
};

export default Home;
