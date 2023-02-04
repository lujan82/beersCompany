import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import MainLayout from "../../components/layouts/mainLayout"
import { FOUNDERS } from "../../data/founder"

const FoundersDetail = () => {
	const router = useRouter()

	const [founder, setFounder] = useState()
	const [othersFounders, setOthersFounders] = useState()

	const nextPrev = id => {
		if (id === 1) return ["/founders/mark", "/founders/robert"]
		if (id === 2) return ["/founders/gianluca", "/founders/mark"]
		if (id === 3) return ["/founders/robert", "/founders/gianluca"]
	}

	useEffect(() => {
		setFounder(FOUNDERS.find(i => i.pathName === router.query.id))
		setOthersFounders(FOUNDERS.filter(i => i.pathName !== router.query.id))
	}, [router])

	return (
		<MainLayout>
			{founder !== undefined && (
				<div className="founder">
					<Link href="/team" legacyBehavior>
						<a className="comeback">Back</a>
					</Link>

					<div
						className="founder__img"
						style={{ background: `url(${founder.img})` }}
					>
						<div className="founder__others">
							<Link href={nextPrev(founder.id)[0]}>
								<div className="founder__next">
									<img src="/images/arrow.png" />
								</div>
							</Link>
							<Link href={nextPrev(founder.id)[1]}>
								<div className="founder__prev">
									<img src="/images/arrow.png" />
								</div>
							</Link>
						</div>
					</div>

					<div className="founder__content">
						<div className="founder__title">{founder.name}</div>
						<div className="founder__subtitle">{founder.position}</div>
						<div className="founder__text">{founder.text}</div>
					</div>
				</div>
			)}
		</MainLayout>
	)
}

export default FoundersDetail
