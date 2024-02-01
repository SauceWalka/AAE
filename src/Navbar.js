import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from "./logo.png"
import "./index.css"

export default function Navbar() {
    return ( 
    <nav className="nav">
        <Link to="/" className="site-title">
            <img src={logo} width="300" height="150"/>
        </Link>
        <ul>
            <CustomLink to="/Temp"><b>Need to fix these</b></CustomLink>
        </ul>
    </nav>
  )
}


function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
   
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}