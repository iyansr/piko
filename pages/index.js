import BenefitSection from 'components/BenefitSection'
import Header from 'components/Header'
import Hero from 'components/Hero'
import React from 'react'

function Home() {
	return (
		<div style={{ background: '#F5F9F9' }} className='min-h-screen pb-32'>
			<Header />
			<Hero />
			<BenefitSection />
		</div>
	)
}

export default Home
