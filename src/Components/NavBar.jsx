import { Link } from 'react-router-dom';
import '../Layout.css';

export function NavBar() {
  return (
    <ul className="navBar">

        <Link to="/">Home</Link>

        <Link to="/Settings">Settings</Link>

        <Link to="/ServiceSearch">Search for Services</Link>

        <Link to="/AboutUs">About Us</Link>

    </ul>
  );
}