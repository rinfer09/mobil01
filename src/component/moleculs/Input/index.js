import React from 'react';
import './input.css';

const index = ({ onChange, label, placeholder, type, value, ...item }) => {
	return (
		<div className="input-container">
			<label>{label} :</label>
			<input
				onChange={onChange}
				type={type}
				style={{ ...item }}
				placeholder={placeholder}
				value={value}
			/>
		</div>
	);
};

export default index;
