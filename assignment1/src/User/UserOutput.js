import React from 'react';

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p onChange={props.changed}>This is your name: {props.name}</p>
		</div>
	)
};

export default userOutput;