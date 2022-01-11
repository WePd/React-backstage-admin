import { Navigate } from "react-router-dom"
import Home from "../views/Home"
import Login from "../views/Login"

const routes = [
	{ path: "/", element: <Login /> },
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/home",
		element: <Home />
	},
	{
		path: "*",
		element: <Navigate to="/home" />
	}
]

export default routes
