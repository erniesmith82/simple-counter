import React from "react";

import { Counter } from "./counter.jsx";



export const Home = () => {
	return (
		<>
		<div>		<Dead/></div>

			<div className="timer">
			<Counter/>
			
			</div>
			</>
	);
	
};
 function Dead(){
	return(
		<h1>hello</h1>
	)
}