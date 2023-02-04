import Link from "next/link"

const BeersList = ({ i, isPremium }) => {
	return isPremium ? (
		<Link href={`./beers/${i.urlName}`}>
			<div className="premium-beers__item">
				<img src={i.url} alt="" />
			</div>
		</Link>
	) : (
		<div className="beers__item">
			<Link href={`./beers/${i.urlName}`}>
				<img src={i.url} alt="" />
			</Link>
		</div>
	)
}

export default BeersList
