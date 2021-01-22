import React from 'react';
import './button.css';

const index = ({ type, text, onClick, ...item }) => {
	return (
		<button onClick={onClick} type={type} style={{ ...item }}>
			{text}
		</button>
	);
};

export default index;
