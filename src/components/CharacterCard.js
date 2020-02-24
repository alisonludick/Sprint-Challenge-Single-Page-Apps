import React, {useEffect } from "react";

export default function CharacterCard(props) {
	const {
		name,
		gender,
		image,
		species,
		status,
		type
	} = props.data;

	useEffect(() => {
		return () => { };
	}, [])
	return (
		<div className="character">
			<div className="content">
				<div><b>Name:</b> {name}</div>
				<div><b>Gender:</b> {gender}</div>
				<div><b>Species:</b> {species}</div>
				{type ? <div><b>Type:</b> {type}</div> : null}
				{status !== "unknown" ? <div><b>Status:</b> {status}</div> : null}
			</div>
			<img src={image} alt={type ? type : name} />
		</div>
	);
}