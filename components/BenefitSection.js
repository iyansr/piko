import React, { useRef } from 'react'
import BenefitSlider from './BenefitSlider'

const BenefitSection = () => {
	return (
		<div className='grid grid-cols-12 max-w-7xl mx-auto px-10 mt-28'>
			<div className='md:col-span-3 col-span-12'>
				<p className='font-semibold text-sm text-[#999999]'>Benefit</p>
				<p className='font-bold text-4xl text-[#56514B] tracking-wide mt-2'>Nikmati kemudahan akses untuk mencari coffeeshop favorite mu!</p>
				<p className='mt-6 text-sm text-[#999999]'>Piko akan selalu membantumu </p>
			</div>
			<div className='col-span-12 md:col-span-9 relative  md:px-12'>
				<BenefitSlider />
			</div>
		</div>
	)
}

export default BenefitSection
