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
				filters: {
					slug: {
						$eq: req.query.slug,
					},
				},
				populate: ['image', 'gallery'],
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

		if (response.data.data.length === 0) {
			return res.status(404).json({
				status: 404,
				message: 'Not found',
			})
		}

		return res.status(response.status).json(
			response.data.data.map((place) => {
				return {
					id: place.id,
					...place.attributes,
					image: place.attributes.image.data?.attributes.url ?? null,
					gallery: place.attributes.gallery.data?.map((image) => {
						return image.attributes.url
					}),
				}
			})[0]
		)
	} catch (error) {
		if (error.response) {
			return res.status(error.response.status).json(error.response.data)
		}

		return res.status(500).json({ status: 500, message: error.message })
	}
}
