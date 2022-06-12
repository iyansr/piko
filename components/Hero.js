import React from 'react'

const Hero = () => {
	return (
		<div className='relative overflow-x-hidden'>
			<div className='relative overflow-hidden w-screen min-h-[490px]'>
				<img src='/header_home.png' alt='' className='w-screen min-h-[490px] object-cover' />
				<img src='/coffe_header.png' alt='' className='w-screen min-h-[490px] object-cover absolute inset-0 -z-10' />
			</div>

			<div className='absolute space-x-4 max-w-7xl mx-auto  top-0 z-10 left-0 bottom-0 right-0 flex items-center justify-center'>
				<div className='flex-1 px-14'>
					<h2 className='font-bold text-5xl text-white'>Tentang Piko</h2>
					<p className='text-sm text-white mt-4 tracking-wider'>
						Piko adalah aplikasi pintar yang dapat kamu andalkan untuk memilih coffee shop yang sesuai dengan seleramu. Berbagai coffee shop di seluruh
						jabodetabek telah bergabung, ribuan pengguna telah merasakan manfaatnya. No worry, temukan coffee shop buat nongkrong asik sesuai dengan
						gayamu disini!
					</p>
				</div>
				<div className='flex-1'></div>
			</div>
		</div>
	)
}

export default Hero
