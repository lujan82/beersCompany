import MainLayout from "../components/layouts/mainLayout"
import BeersList from "../components/list/beersList"
import BEER_PREMIUM from "../data/premiumBeers"
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils"

const PremiumBeers = props => {
	return (
		<MainLayout props={props}>
			<ul className="container-premium-beers">
				{BEER_PREMIUM.map((i, index) => (
					<BeersList i={i} key={index} isPremium />
				))}
			</ul>
		</MainLayout>
	)
}

export default PremiumBeers

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
