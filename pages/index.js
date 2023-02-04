import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Carousel } from "react-responsive-carousel"

import CarouselItems from "../components/carousel/carouselItems"
import MainLayout from "../components/layouts/mainLayout"
import BEER from "../data/beers"
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

export default function Home(props) {
	const [t] = useTranslation("home")

	return (
		<MainLayout className={"home"} props={props}>
			<div className="home-container">
				<div className="column">
					<div className="container-promo">
						<Link href="/shop">
							<div className="discover-beers">
								<div>
									<img src="/images/logo.png" alt="" />
									<h1>{t("discover")}</h1>
								</div>
							</div>
						</Link>
						<Carousel
							autoPlay
							infiniteLoop
							showThumbs={false}
							showArrows={false}
							showIndicators={false}
							showStatus={false}
						>
							{BEER.map((i, index) => (
								<CarouselItems i={i} key={index} />
							))}
						</Carousel>
					</div>
				</div>

				<div className="column">
					<Link href="/shop">
						<div className="shop-container">
							<div className="option-shop">
								<div>
									<img src="/images/04.png" alt="" />
									<h2>{t("shop")}</h2>
								</div>
							</div>
						</div>
					</Link>
					<div className="options-nav">
						<div className="column">
							<Link href="/premium-beers">
								<div className="option-premium">
									<div>
										<img src="/images/03.png" alt="" />
										<h2>{t("premium")}</h2>
									</div>
								</div>
							</Link>
						</div>
						<div className="column">
							<Link href="/history">
								<div className="option-history">
									<div>
										<img src="/images/02.png" alt="" />
										<h2>{t("history")}</h2>
									</div>
								</div>
							</Link>
							<Link href="/jobs">
								<div className="option-jobs">
									<div>
										<img src="/images/05.png" alt="" />
										<h2>{t("jobs")}</h2>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}

export async function getServerSideProps(context) {
	const { req } = context
	const { origin } = absoluteUrl(req)

	const baseApiUrl = `${origin}/api`

	const { token } = getAppCookies(req)
	const profile = token ? verifyToken(token.split(" ")[1]) : ""

	return {
		props: {
			baseApiUrl,
			profile,
		},
	}
}
