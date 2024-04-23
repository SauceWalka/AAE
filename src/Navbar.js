import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import logo from "./logo.png"
import "./index.css"

export default function Navbar() {
    return ( 
    <nav className="nav">
        <Link to="/" className="site-title">
            <img src={logo} width="225" height="100"/>
        </Link>  
        <ul>
            <li>
            <HashLink to="/#Projects"><b>Projects</b></HashLink>
            </li>
            <li>
            <HashLink to="/#Learn"><b>Learn</b></HashLink>
            </li>
            <li>
            <HashLink to="/#Future"><b>Future</b></HashLink>
            </li>
            <li>
            <HashLink to="/#Reviews"><b>Reviews</b></HashLink>
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