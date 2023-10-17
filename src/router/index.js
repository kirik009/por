import users from "../pages/users.js"
import Auth from "../pages/Auth.jsx"
import Registr from "../pages/Registr.jsx"

export const publicRoutes = [
    {path: '/auth', element: Auth},
    {path: '/registr', element: Registr}
]
export const privateRoutes = [
 
    {path: '/users', element: users}
]



