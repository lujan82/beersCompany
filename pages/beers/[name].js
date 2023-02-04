import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import MainLayout from "../../components/layouts/mainLayout"
import BEER from "../../data/beers"
import BEER_PREMIUM from "../../data/premiumBeers"
import { backgroundRandom } from "../../utils/backgroundRandom"

const DetailBeer = () => {
	const router = useRouter()

	const [beer, setBeer] = useState("")
	const [comeBack, setComeBack] = useState("")
	const myBeer = BEER.find(i => i.urlName === router.query.name)

	useEffect(() => {
		if (myBeer) {
			if (myBeer.premium) {
				setComeBack("/premium-beers/")
				return setBeer(BEER_PREMIUM.find(i => i.urlName === router.query.name))
			}
			setComeBack("/our-beers/")
			setBeer(BEER.find(i => i.urlName === router.query.name))
		}
	}, [myBeer])

	let background = backgroundRandom()
	if (beer.premium) {
		background = "#000"
	}

	return (
		<MainLayout>
			<div className="detail-page">
				<Link href={comeBack} legacyBehavior>
					<a className="comeback">Back</a>
				</Link>

				{beer !== undefined && (
					<div className="beer-detail">
						<div
							className="beer-detail__img" /* style={{ background: `url(${myBeer.url})` }} */
						>
							{beer?.url && <img src={beer.url} alt="" />}
						</div>

						<div
							className="beer-detail__content"
							style={{ backgroundColor: background }}
						>
							<div>
								<div className="beer-detail__name">
									{beer?.name && beer.name}
								</div>

								<div className="beer-detail__description-container">
									<div className="beer-detail__description-title">
                    Description
									</div>
									<div className="beer-detail__description-text">
										<p> {beer?.description} </p>
										<p>
											{" "}
											<strong>Ingredients :</strong> {beer?.ingredients}{" "}
										</p>
									</div>
								</div>

								<div className="beer-detail__info-container">
									<div className="beer-detail__info-title">Info</div>
									<div className="beer-detail__info">
										<div className="beer-detail__info-q">Alc</div>
										<div className="beer-detail__info-r">{beer.alc}</div>
									</div>
									<div className="beer-detail__info">
										<div className="beer-detail__info-q">ML</div>
										<div className="beer-detail__info-r">{beer.ml}</div>
									</div>
									<div className="beer-detail__info">
										<div className="beer-detail__info-q">Session</div>
										<div className="beer-detail__info-r">Wheat</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	)
}

/* export async function getStaticPaths() {

  const paths = BEER.map(i => i.name)

  return {
    paths: [
      { params: {name: 'hola'} } // See the "paths" section below
    ],
     fallback: true // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  console.log('params', params);
  
  const { req } = context;
  const { origin } = absoluteUrl(req);

  const baseApiUrl = `${origin}/api/about`;

  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(' ')[1]) : '';

  // Pass post data to the page via props
  return {
    props: {
      baseApiUrl,
      profile,
    },
  };
} */

export default DetailBeer
