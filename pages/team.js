import Link from "next/link"

import MainLayout from "../components/layouts/mainLayout"
import Founders from "../components/list/founders"
import { FOUNDERS } from "../data/founder"
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils"

const Team = props => {
	return (
		<MainLayout props={props}>
			<Link href="/wt" legacyBehavior>
				<a className="comeback">Back</a>
			</Link>
			<div className="container-team">
				{FOUNDERS.map(founder => (
					<Founders
						key={founder.id}
						name={founder.name}
						position={founder.position}
						path={founder.path}
					/>
				))}
			</div>
		</MainLayout>
	)
}

export default Team

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
