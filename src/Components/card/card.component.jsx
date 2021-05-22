import React from "react";
import "./card.style.css";
export const Card=(props)=>(
<div className="card-container">
	<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&Size=100*100`}/>
	<h2> {props.monster.email} </h2>

</div>
)