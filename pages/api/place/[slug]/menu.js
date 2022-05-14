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
				populate: ['places', 'menu_category'],
				filters: {
					place: {
						slug: {
							$eq: req.query.slug,
						},
					},
				},
			},
			{
				encodeValuesOnly: true,
			}
		)

		const response = await axios.request({
			method: 'GET',
			baseURL: process.env.API_URL,
			url: `/api/menus?${params}`,
		})

		return res.status(response.status).json(
			response.data.data.map((menu) => {
				return {
					id: menu.id,
					...menu.attributes,
				}
			})
		)
	} catch (error) {
		if (error.response) {
			return res.status(error.response.status).json(error.response.data)
		}

		return res.status(500).json({ status: 500, message: error.message })
	}
}
