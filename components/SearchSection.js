import usePlaces from 'hooks/usePlaces'
import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { Swiper, SwiperSlide } from 'swiper/react'
import SliderSearch from './SliderSearch'

const SearchSection = () => {
	const { data, isLoading } = usePlaces()
	return (
		<div className='bg-[#e9e4de]'>
			<div className='max-w-7xl mx-auto px-10 mt-28 grid grid-cols-7 py-12 '>
				<div className='col-span-4'>
					<p className='font-bold text-4xl text-[#56514B] tracking-wide mt-2 max-w-[323px]'>Lebih mudah cari coffee shop pake Piko!</p>
					<p className='mt-6 text-sm text-[#999999] max-w-2xl mx-auto'>Piko akan selalu membantumu</p>
				</div>
				<div className=' relative md:px-12 col-span-3'>
					{isLoading ? (
						<div className='flex items-center justify-center'>
							<MutatingDots color='#697161' secondaryColor='#697161' />
						</div>
					) : (
						<SliderSearch>
							{data.data.slice(0, 6).map((item) => (
								<SwiperSlide key={item.id} className='mb-3'>
									<div className='h-[444px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col'>
										<div className='relative h-[266px] rounded-lg overflow-hidden'>
											<img src={item.gallery[0]} className='object-cover rounded-lg h-[266px] w-full' />
											<div className='absolute left-0 right-0 bottom-0 bg-white/50 z-10 text-center py-4'>
												<p className='text-white font-semibold text-base'>{item.name}</p>
											</div>
										</div>
										<div className='flex-1 flex flex-col justify-between p-4'>
											<div className='ml-auto text-sm text-gray-600 flex items-end space-x-2'>
												<svg fill='#f8c23b' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
													<path d='M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z' />
												</svg>
												<p>{item.rating}</p>
											</div>
											<div className='italic text-xs text-gray-600 text-center line-clamp-2'>
												<p className='my-auto'>{item.description}</p>
											</div>
											<div className='ml-auto text-sm text-gray-600 text-center'>
												<p>Detail</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</SliderSearch>
					)}
				</div>
			</div>
		</div>
	)
}

export default SearchSection
