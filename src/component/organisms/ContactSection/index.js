import React from 'react';
import { chatIcon } from '../../../assets';
import { Button } from '../../atoms';
import { useHistory } from 'react-router-dom';

import './contactSection.css';

const Index = () => {
	const History = useHistory();
	return (
		<div className="contact-section">
			<img className="chat-icon" src={chatIcon} alt="chat-icon" />
			<div className="contact-quotes">
				<h1>Hubungi Kami!</h1>
				<p>Jangan ragu untuk hubungi kami.</p>
				<Button
					text="Hubungi kami"
					width="120px"
					height="40px"
					fontSize="16px"
					onClick={() => History.push('/contact')}
				/>
			</div>
		</div>
	);
};

export default Index;
