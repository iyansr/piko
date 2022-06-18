import useSWR from 'swr'
import { BASE_URL } from 'utils/config'

export const PLACES_KEY = '/api/places'

export const fetchPlaces = async () => {
	const res = await fetch(BASE_URL + PLACES_KEY)
	const resJson = await res.json()
	return resJson
}

const usePlaces = () => {
	const { data, error } = useSWR(PLACES_KEY, () => fetchPlaces())

	return {
		data,
		error,
		isLoading: !error && !data,
	}
}

export default usePlaces
