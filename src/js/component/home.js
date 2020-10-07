import React from "react";
import { Traficclight } from "../trafficlight";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Traficclight />
		</div>
	);
}
