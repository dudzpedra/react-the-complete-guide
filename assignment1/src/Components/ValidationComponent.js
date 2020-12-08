import React from 'react';

const validationComponent = (props) => {
	return (
		<div className="validationComponent">
			<p>Characters: {props.length}</p>
		</div>
	)
};

export default validationComponent;