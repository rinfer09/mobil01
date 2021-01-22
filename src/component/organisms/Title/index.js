import React from 'react';
import { mobilBg } from '../../../assets';
import './title.css';

const index = () => {
	return (
		<div className="title">
			<img className="mobil-bg" src={mobilBg} alt="mobil-bg" />
			<div className="quotes">
				<h1 className="heading1">Dapatkan mobil impianmu</h1>
			</div>
		</div>
	);
};

export default index;
