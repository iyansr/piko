import Header from 'components/Header'
import Hero from 'components/Hero'
import React from 'react'

function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
		</div>
	)
}

export default Home
