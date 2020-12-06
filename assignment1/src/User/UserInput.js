import React from 'react';

const userInput = (props) => {
	return (
		<div className="UserInput">
			<p>Type in your name below: </p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
	)
};

export default userInput;