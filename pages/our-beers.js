import MainLayout from "../components/layouts/mainLayout"
import BeersList from "../components/list/beersList"
import BEER from "../data/beers"
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils"

const OurBeers = props => {
	return (
		<MainLayout props={props}>
			<div className="container-beers">
				{BEER.map((i, index) => (
					<BeersList i={i} key={index} />
				))}
			</div>
		</MainLayout>
	)
}

export default OurBeers

export async function getServerSideProps(context) {
	const { req } = context
	const { origin } = absoluteUrl(req)

	const baseApiUrl = `${origin}/api/about`

	const { token } = getAppCookies(req)
	const profile = token ? verifyToken(token.split(" ")[1]) : ""

	return {
		props: {
			baseApiUrl,
			profile,
		},
	}
}
