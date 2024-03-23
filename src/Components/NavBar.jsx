import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Settings"></Link>
            <Link to="/ServiceSearch"></Link>
        </>
    )
}