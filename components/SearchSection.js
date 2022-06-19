import usePlaces from 'hooks/usePlaces'
import React from 'react'
import { MutatingDots } from 'react-loader-spinner'
import { SwiperSlide } from 'swiper/react'
import SearcField from './SearcField'
import SliderSearch from './SliderSearch'
import isEmpty from 'lodash/isEmpty'

const RightComponents = ({ data, isLoading }) => {
	if (isLoading) {
		return (
			<div className='flex items-center justify-center'>
				<MutatingDots color='#697161' secondaryColor='#697161' />
			</div>
		)
	}

	const places = data || []

	if (places.length === 0) {
		return (
			<div className='flex items-center justify-center'>
				<p>Hasil pencarian tidak di temukan</p>
			</div>
		)
	}

	return (
		<SliderSearch>
			{places?.slice(0, 6).map((item) => (
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
	)
}

const SearchSection = () => {
	const { data, isLoading } = usePlaces()
	const [filteredData, setFilteredData] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		if (!isLoading) {
			setFilteredData(data.data)
		}
	}, [isLoading])

	React.useEffect(() => {
		if (isEmpty(searchValue)) {
			setFilteredData(data.data)
		} else {
			setFilteredData(
				data.data.filter((item) => {
					return item.name.toLowerCase().includes(searchValue.toLowerCase())
				})
			)
		}
	}, [searchValue])

	return (
		<div className='bg-[#e9e4de]' id='piko-search'>
			<div className='max-w-7xl mx-auto px-10 mt-28 grid grid-cols-7 py-20 '>
				<div className='col-span-7 md:col-span-4'>
					<div>
						<p className='font-bold text-4xl text-[#56514B] tracking-wide mt-2 max-w-[323px]'>Lebih mudah cari coffee shop pake Piko!</p>
						<p className='mt-6 text-sm text-[#999999] max-w-2xl mx-auto'>Piko akan selalu membantumu</p>
					</div>
					<div className='flex items-center mt-12 space-x-4 relative'>
						<SearcField
							value={searchValue}
							onChange={(e) => {
								setSearchValue(e.target.value)
							}}
						/>
						{/* <button className='h-[58px] w-[58px] bg-white rounded-lg p-4 border border-[#C9CFCE] outline-[#C9CFCE]'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-[#C9CFCE]' viewBox='0 0 20 20' fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
									clipRule='evenodd'
								/>
							</svg>
						</button>

						<div className='absolute -left-[16px] top-[72px] bg-white p-4 rounded-2xl shadow-lg min-w-[343px]'>
							<div className='flex items-center justify-between m-0'>
								<button className=' font-semibold text-[#6A6761] text-base'>X</button>
								<p className='text-center font-semibold text-[#6A6761] text-base'>Filter</p>
								<button className='opacity-0'>X</button>
							</div>
						</div> */}
					</div>
				</div>
				<div className=' relative md:px-12 col-span-7 md:col-span-3'>
					<RightComponents data={filteredData} isLoading={isLoading} />
				</div>
			</div>
		</div>
	)
}

export default SearchSection
