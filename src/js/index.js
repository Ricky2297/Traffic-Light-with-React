//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import "../styles/index.scss";

import { Home } from "./component/home.js";

import { Trafficlight } from "./trafficlight";

var previousColor = "red";
function changeLight() {
	if (previousColor == "red") {
		previousColor = "green";
	} else if (previousColor == "green") {
		previousColor = "yellow";
	} else if (previousColor == "yellow") {
		previousColor = "red";
	}
	ReactDOM.render(
		<Trafficlight color={previousColor} />,
		document.querySelector("#app")
	);
}
setInterval(changeLight, 1000);
