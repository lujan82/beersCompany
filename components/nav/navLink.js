import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"

const NavLink = ({ path, text, handleNoAuth }) => {
	const [t] = useTranslation("nav")
	const router = useRouter()

	return handleNoAuth === undefined ? (
		<li>
			<Link href={path} legacyBehavior>
				<a
					className={router.pathname == path ? "nav__link-active" : "nav__link"}
				>
					<span> {t(text)}</span>
				</a>
			</Link>
		</li>
	) : (
		<li onClick={handleNoAuth}>
			<div className="nav__link-active-off">
				<span> {t("premiumBeers")}</span>
			</div>
		</li>
	)
}

export default NavLink
