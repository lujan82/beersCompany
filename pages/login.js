import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useDispatch } from "react-redux"

import Form from "../components/form/form"
import MainLayout from "../components/layouts/mainLayout"
import {
	absoluteUrl,
	getAppCookies,
	setLogout,
	verifyToken,
} from "../middleware/utils"
import { userLogin } from "../redux/user/userAction"

const Login = props => {
	const { baseApiUrl } = props

	const dispatch = useDispatch()

	const [login, setLogin] = useState()
	const [loading, setLoading] = useState(false)
	const [stateFormMessage, setStateFormMessage] = useState({})

	const handleSubmit = async e => {
		setLoading(true)
		e.preventDefault()
		console.log("login", login)

		const loginApi = await fetch(`${baseApiUrl}/auth`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(login),
		}).catch(error => {
			console.error("Error:", error)
		})

		let result = await loginApi.json()

		if (result.success && result.token) {
			Cookies.set("token", result.token)
			const data = {
				...login,
				token: result.token,
			}
			dispatch(userLogin(data))
		} else {
			setStateFormMessage(result)
		}
		setLoading(false)
	}

	const handleSubmitLogOut = () => {
		dispatch(userLogout())
	}

	return (
		<MainLayout props={props}>
			<div className="container-login">
				<Form
					login={login}
					setLogin={setLogin}
					handleSubmit={handleSubmit}
					handleSubmitLogOut={handleSubmitLogOut}
				/>
			</div>
		</MainLayout>
	)
}

export default Login

export async function getServerSideProps(context) {
	const { req } = context
	const { origin } = absoluteUrl(req)

	const baseApiUrl = `${origin}/api`

	const { token } = getAppCookies(req)
	const profile = token ? verifyToken(token.split(" ")[1]) : ""

	return {
		props: {
			baseApiUrl,
			profile,
		},
	}
}
