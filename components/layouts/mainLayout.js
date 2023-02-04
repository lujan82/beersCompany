import { useState } from "react"
import Head from "next/head"
import Hamburger from "hamburger-react"
import { useSelector } from "react-redux"

import Nav from "../nav/nav"

const MainLayout = ({ children, className }) => {
	const user = useSelector(state => state.user)
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<Head>
				<title>Beers shop</title>
				<link rel="shortcut icon" href="/favicon.png" />
			</Head>
			<main className={className}>
				<div className="burger-responsive">
					<Hamburger toggled={isOpen} toggle={setOpen} size={26} />
				</div>
				<Nav user={user} isOpen={isOpen} />
				<div className="container">{children}</div>
			</main>
		</>
	)
}

export default MainLayout
