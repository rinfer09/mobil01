import React from 'react';
import './TextAreaInput.css';

const index = ({ label, placeholder, ...item }) => {
	return (
		<div className="text-area">
			<label>{label} :</label>
			<textarea style={{ ...item }} placeholder={placeholder} />
		</div>
	);
};

export default index;
