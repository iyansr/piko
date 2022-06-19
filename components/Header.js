import React from 'react'
import Link from 'next/link'

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'Coffe Shop', href: '#piko-search' },
	{ name: 'Join Us', href: '#' },
]

function Header() {
	return (
		<header className='bg-transparent absolute z-40 top-0 left-0 right-0  bg-clip-padding'>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='w-full py-6 flex items-center justify-between  border-none'>
					<div className='flex items-center'>
						<a href='#'>
							<span className='sr-only'>Piko</span>
							<img className='h-10 w-auto' src='/icon.png' alt='Piko Icon' />
						</a>
						<div className='ml-10 space-x-8 block'>
							{navigation.map((link, index) => (
								<Link key={link.name} href={link.href} passHref>
									<a
										className='text-base font-medium text-white hover:text-indigo-50'
										onClick={(e) => {
											if (index === 1) {
												document.getElementById('piko-searchfield').focus()
											}
										}}>
										{link.name}
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
