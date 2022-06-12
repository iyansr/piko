import React from 'react'
import { SwiperSlide } from 'swiper/react'
import benefits from '../data/benefits'
import Slider from './Slider'

const Card = ({ benefit }) => {
	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden text-left' style={{ height: 394 }}>
			<div className='h-1/2 flex items-center justify-center'>
				<img src={benefit.image} alt={benefit.title} />
			</div>
			<div className='p-6'>
				<p className='text-base font-semibold'>{benefit.title}</p>
				<p className='text-[#666666] text-sm mt-3'>{benefit.description}</p>
			</div>
		</div>
	)
}

const BenefitSlider = () => {
	return (
		<Slider>
			{benefits.map((benefit, key) => (
				<SwiperSlide key={key}>
					<Card benefit={benefit} />
				</SwiperSlide>
			))}
		</Slider>
	)
}

export default BenefitSlider
