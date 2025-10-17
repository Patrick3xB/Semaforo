import React from "react";
import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
	return (
		<div className="text-center">
			<h1 className="mt-4 mb-4" style={{ color: "#222", fontWeight: "600" }}>
				🚦 Semáforo React
			</h1>

			<TrafficLight />
		</div>
	);
};

export default Home;
