/** @format */

import Signin from "./users/signin"
import { Routes, Route, Navigate, Link } from "react-router-dom"
import Account from "./users/account"
import Table from "./users/table"
import Signup from "./users/signup"

import "./index.css"

function Project() {
	return (
		<div className='row'>
			<h1>A6 MONGO - FA23</h1>

			<p className="signup">Sign Up for new user!</p>
			<Link to={`/Labs/a6/signup`}>
				<button className="signupbutton">Sign Up</button>
			</Link>
			<p className="signIn">Sign In for old users</p>
			<br />
			<br />
			<Link to={`/Labs/a6/signin`}>
				<button className="signinbutton">Sign In</button>
			</Link>

			<div className='col-10'>
				<Routes>
					<Route path='/' element={<Navigate to='/Labs/a6/account' />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/account' element={<Account />} />
					<Route path='/admin/users' element={<Table />} />
					<Route path='/account/:id' element={<Account />} />
				</Routes>
			</div>
		</div>
	)
}
export default Project
