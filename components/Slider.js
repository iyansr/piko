import React, { useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper } from 'swiper/react'

const Slider = ({ children }) => {
	const prevRef = useRef(null)
	const nextRef = useRef(null)
	return (
		<>
			<Swiper
				autoHeight
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation={{
					prevEl: prevRef.current, // Assert non-null
					nextEl: nextRef.current, // Assert non-null
				}}
				slidesPerView={2}
				spaceBetween={18}
				breakpoints={{
					768: {
						slidesPerView: 3,
						spaceBetween: 0,
					},
				}}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current
					swiper.params.navigation.nextEl = nextRef.current
					swiper.navigation.init()
					swiper.navigation.update()
				}}>
				{children}
			</Swiper>
			<div
				ref={prevRef}
				className='bg-white -left-6 md:left-0 cursor-pointer  h-11 w-11 shadow-lg absolute top-[50%] rounded-full z-10 flex items-center justify-center'>
				<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect width='32' height='32' transform='matrix(-1 0 0 1 32 0)' fill='white' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M20.5333 9.86667L18.6667 8L10.6667 16L18.6667 24L20.5333 22.1333L14.4 16L20.5333 9.86667Z'
						fill='#56514B'
					/>
				</svg>
			</div>
			<div
				ref={nextRef}
				className='bg-white h-11 w-11 -right-6 cursor-pointer md:right-0 shadow-lg absolute top-[50%] rounded-full z-10 flex items-center justify-center'>
				<svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<rect width='32' height='32' fill='white' />
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M11.4667 9.86667L13.3333 8L21.3333 16L13.3333 24L11.4667 22.1333L17.6 16L11.4667 9.86667Z'
						fill='#56514B'
					/>
				</svg>
			</div>
		</>
	)
}

export default Slider
