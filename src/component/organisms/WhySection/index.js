import React from 'react';
import { amanIcon, cepatIcon, mobilIcon, mudahIcon } from '../../../assets';
import { WhyCard } from '../../moleculs';
import './whySection.css';

const index = () => {
	const data = [
		{
			image: mobilIcon,
			alt: 'mobilIcon',
			judul: 'Lengkap',
			text: 'Mobil01 menyediakan berbagai merk ternama di seluruh Indonesia.',
		},
		{
			image: amanIcon,
			alt: 'mudah-icon',
			judul: 'Transaksi Mudah',
			text: 'Transaksi dapat dilakukan dimana saja dan kapan saja.',
		},
		{
			image: mudahIcon,
			alt: 'aman-icon',
			judul: 'Aman',
			text: 'Semua transaksi Anda terhubung langsung dengan penjual.',
		},
		{
			image: cepatIcon,
			alt: 'cepat-icon',
			judul: 'Respon Cepat',
			text:
				'Penjual akan menghubungi Anda. Anda bisa pesan mobil dari mana saja.',
		},
	];
	return (
		<div className="why-section">
			<h1 className="why-heading">Kenapa Mobil one?</h1>
			<div className="card-container">
				{data.map((e, index) => (
					<WhyCard
						image={e.image}
						alt={e.alt}
						judul={e.judul}
						text={e.text}
						key={index}
					/>
				))}

				{/* image, alt, judul, text */}
			</div>
		</div>
	);
};

export default index;
