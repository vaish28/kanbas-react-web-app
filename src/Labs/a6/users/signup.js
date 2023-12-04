/** @format */

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import * as client from "./client"
import './signup.css';


function Signup() {
	const [error, setError] = useState("")
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	})
	const navigate = useNavigate()
	const signup = async () => {
		try {
			const sucredentials = await client.signup(credentials)
			console.log(sucredentials);
			navigate("/Labs/a6/account")
		} catch (err) {
			setError(err.response.data.message)
		}
	}
	return (
		<div>
			<h1 className="heading">Signup</h1>
			{error && <div>{error}</div>}
			<input className="userNameInput"
				value={credentials.username}
				onChange={(e) =>
					setCredentials({
						...credentials,
						username: e.target.value,
					})
				}
			/>
			<input className="passwordInput"
				value={credentials.password}
				onChange={(e) =>
					setCredentials({
						...credentials,
						password: e.target.value,
					})
				}
			/>
			<button onClick={signup} className="signupbutton">Signup</button>
		</div>
	)
}
export default Signup
