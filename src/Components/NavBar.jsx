import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/Settings">
                <button>Settings</button>
            </Link>
            <Link to="/ServiceSearch">
                <button>Search for Services</button>
            </Link>
            <Link to="/About Us">
                <button>About Us</button></Link>
        </>
    )
}