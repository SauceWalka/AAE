import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import logo from "./logo.png"
import "./index.css"

export default function Navbar() {
    return ( 
    <nav className="nav">
        <Link to="/" className="site-title">
            <img src={logo} width="150" height="75"/>
        </Link>  
        <ul>
            <li>
            <HashLink to="/#PC"><b>Projects</b></HashLink>
            </li>
            <li>
            <HashLink to="/#LT"><b>Learn</b></HashLink>
            </li>
            <li>
            <HashLink to="/#FT"><b>Future</b></HashLink>
            </li>
            <li>
            <HashLink to="/#RT"><b>Review</b></HashLink>
            </li>
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