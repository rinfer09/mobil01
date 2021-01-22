import React from 'react';
import './why-card.css';

const index = ({ image, alt, judul, text }) => {
	return (
		<div className="icon-container">
			<img className="why-icon" src={image} alt={alt} />
			<div className="why-quotes-container">
				<h1>{judul}</h1>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default index;
