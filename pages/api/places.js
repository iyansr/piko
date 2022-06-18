import axios from 'axios'
import qs from 'qs'

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).end()
	}

	try {
		const params = qs.stringify(
			{
				populate: ['image', 'gallery', 'facilities'],
				pagination: {
					page: req.query?.page ?? 1,
					pageSize: 20,
				},
			},
			{
				encodeValuesOnly: true,
			}
		)

		const response = await axios.request({
			method: 'GET',
			baseURL: process.env.API_URL,
			url: `/api/places?${params}`,
		})

		return res.status(response.status).json({
			data: response.data.data.map((place) => {
				return {
					id: place.id,
					...place.attributes,
					image: place.attributes.image.data?.attributes.url ?? null,
					gallery: place.attributes.gallery.data?.map((image) => {
						return image.attributes.url
					}),
					facilities: place.attributes.facilities.data?.map((facility) => {
						return { name: facility.attributes.name, id: facility.id }
					}),
				}
			}),
			pagination: response.data.meta.pagination,
		})
	} catch (error) {
		if (error.response) {
			return res.status(error.response.status).json(error.response.data)
		}

		return res.status(500).json({ status: 500, message: error.message })
	}
}
