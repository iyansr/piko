import usePlaces from 'hooks/usePlaces'
import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const PartnerSection = () => {
	const { data, isLoading } = usePlaces()
	return (
		<div className=' max-w-7xl mx-auto px-10 mt-28'>
			<div className='text-center'>
				<p className='font-bold text-4xl text-[#56514B] tracking-wide mt-2'>Partner</p>
				<p className='mt-6 text-sm text-[#999999] max-w-2xl mx-auto'>
					Jadi bagian dari Piko dan temukan berbagai keajaibannya. Domu coffee, toko kopi bahagia dan masih banyak lagi sudah menjadi bagian dari Piko.{' '}
				</p>
			</div>
			<div className=' relative md:px-12'>
				{isLoading ? (
					<div className='flex items-center justify-center'>
						<MutatingDots color='#697161' secondaryColor='#697161' />
					</div>
				) : (
					<Swiper
						height={412}
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						pagination={{ clickable: true }}
						slidesPerView={2}
						spaceBetween={18}
						breakpoints={{
							768: {
								slidesPerView: 3,
								spaceBetween: 0,
							},
						}}>
						{data?.data?.slice(0, 6)?.map((item) => (
							<SwiperSlide key={item.id} className='mb-3'>
								<div className='h-[380px] flex items-center justify-center'>
									<img src={item.image} className='object-cover' />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</div>
	)
}

export default PartnerSection
