import ExternalLinks from "./externalLinks"
import Languages from "./languages"
import ListRouter from "./listRouter"
import Logo from "./logo"

const Nav = ({ user, isOpen }) => {
	//TODO: data for pages

	return (
		<nav className={isOpen ? "open nav" : "nav"}>
			<Languages />
			<Logo />
			<ListRouter user={user} />
			<ExternalLinks />
		</nav>
	)
}

export default Nav
