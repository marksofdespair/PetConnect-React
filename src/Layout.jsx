import { NavBar } from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import PetConnectLogoMini from './assets/PetConnectLogoMini.png';
import './Layout.css'; // Import CSS file for layout styles

export function Layout() {
    return (
        <div className="container">
            <header>
                <h1 className="logo">
                    <img src={PetConnectLogoMini} alt="Team Laika logo" /> Pet Connect
                </h1>
            </header>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
