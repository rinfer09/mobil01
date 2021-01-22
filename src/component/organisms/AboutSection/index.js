import React from 'react';
import { mobilIllus } from '../../../assets';
import { About } from '../../moleculs';
import './aboutSection.css';

const index = () => {
	return (
		<div className="about-section">
			<div className="about-quotes">
				<About />
			</div>
			<div className="about-illus">
				<img className="mobil-illus" src={mobilIllus} alt="mobil-illus" />
			</div>
		</div>
	);
};

export default index;
