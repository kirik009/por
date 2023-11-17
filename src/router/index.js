import users from "../pages/Users.jsx"
import Auth from "../pages/Auth.jsx"
import Registr from "../pages/Registr.jsx"

export const publicRoutes = [
    {path: '/auth', element: Auth},
    {path: '/registr', element: Registr}
]
export const privateRoutes = [
 
    {path: '/users', element: users}
]



