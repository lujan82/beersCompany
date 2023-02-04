import Link from "next/link"

import HeadPage from "../components/layouts/headPage"
import MainLayout from "../components/layouts/mainLayout"
import Posts from "../components/list/posts"
import { POSTS } from "../data/posts"
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils"

const Blog = props => {
	return (
		<MainLayout props={props} className="isfixed">
			<div className="container-blog">
				<Link href="/wt" legacyBehavior>
					<a className="comeback">Back</a>
				</Link>

				<HeadPage title="Blog" subtitle="write by wt" />

				<div className="blog__list-post">
					{POSTS.map(i => (
						<Posts
							key={i.id}
							title={i.title}
							date={i.date}
							prev={i.prev}
							path={i.path}
							img={i.img}
						/>
					))}
				</div>
			</div>
		</MainLayout>
	)
}

export default Blog

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
