import Link from "next/link"

const BeersList = ({ i, isPremium }) => {
	return isPremium ? (
		<Link href={`./beers/${i.urlName}`}>
			<li className="premium-beers__item">
				<img src={i.url} alt="" />
			</li>
		</Link>
	) : (
		<li className="beers__item">
			<Link href={`./beers/${i.urlName}`}>
				<img src={i.url} alt="" />
			</Link>
		</li>
	)
}

export default BeersList
