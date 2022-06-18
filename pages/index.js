import BenefitSection from 'components/BenefitSection'
import Header from 'components/Header'
import Hero from 'components/Hero'
import PartnerSection from 'components/PartnerSection'
import { fetchPlaces, PLACES_KEY } from 'hooks/usePlaces'
import React from 'react'
import { SWRConfig } from 'swr'

function Home({ fallback }) {
	return (
		<SWRConfig value={{ fallback }}>
			<div style={{ background: '#F5F9F9' }} className='min-h-screen pb-32'>
				<Header />
				<Hero />
				<BenefitSection />
				<PartnerSection />
			</div>
		</SWRConfig>
	)
}

export async function getStaticProps() {
	// `getStaticProps` is executed on the server side.
	const places = await fetchPlaces()
	return {
		props: {
			fallback: {
				[PLACES_KEY]: places,
			},
		},
	}
}

export default Home
