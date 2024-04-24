import { Link } from 'react-router-dom';
import '../Layout.css';

export function NavBar() {
  const accountType = localStorage.getItem('accountType');

  return (
    <ul className="navBar">
        <Link to="/">Home</Link>
        <Link to="/ProfileView">Profile</Link>
        <Link to="/Settings">Settings</Link>
        <Link to="/Pets">Pets</Link>
        <Link to="/Services">Search for Services</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/LogoutPage">Logout</Link>
    </ul>
  );
}
