import React, { useRef } from 'react'
import BenefitSlider from './BenefitSlider'

const PartnerSection = () => {
	return (
		<div className=' max-w-7xl mx-auto px-10 mt-28'>
			<div className='text-center'>
				<p className='font-bold text-4xl text-[#56514B] tracking-wide mt-2'>Partner</p>
				<p className='mt-6 text-sm text-[#999999] max-w-2xl mx-auto'>
					Jadi bagian dari Piko dan temukan berbagai keajaibannya. Domu coffee, toko kopi bahagia dan masih banyak lagi sudah menjadi bagian dari Piko.{' '}
				</p>
			</div>
			<div className=' relative  md:px-12'>
				<BenefitSlider />
			</div>
		</div>
	)
}

export default PartnerSection
