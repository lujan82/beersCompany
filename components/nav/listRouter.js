import { ROUTER } from "../core/routes"

import NavLink from "./navLink"

const ListRouter = ({ user }) => {
	return (
		<ul>
			{ROUTER.map(item => (
				<NavLink path={item.href} text={item.text} key={item.id} />
			))}
			{user?.email !== "" ? <NavLink path={"/login"} text="logout" /> : <NavLink path={"/login"} text="login" />}
		</ul>
	)
}

export default ListRouter
