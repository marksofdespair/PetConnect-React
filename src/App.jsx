import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import UserHome from './Pages/User/UserHome';
import ServiceSearch from './Pages/ServiceSearch'; 
import AddService from './Pages/Provider/AddService';
import Pets from './Pages/User/Pets';
import AddPet from './Pages/User/AddPet';
import AddCat from './Pages/User/AddCat';
import AddDog from './Pages/User/AddDog';
import Settings from './Pages/Provider/Settings';
import AboutUs from './Pages/AboutUs';
import RegisterForm from './Pages/RegisterForm';
import Profile from './Pages/Profile';
import ProviderProfile from './Pages/Provider/ProviderProfile';
import ProviderProfileView from './Pages/User/ProviderProfileView';
import UserProfile from './Pages/User/UserProfile';
import UserSettings from './Pages/User/UserSettings';
import './App.css';
import './Layout';
import LogoutPage from './Pages/LogoutPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
            <Route path="/" element={<Home />} /> {/* Route for Home page/Home */}
            <Route path="/Login" element={<Login />} /> {/* Route for Login */}
            <Route path="/UserHome" element={<UserHome />} /> {/* Route for UserHome */}
            <Route path="/ServiceSearch" element={<ServiceSearch />} /> {/* Route for ServiceSearch */}
            <Route path="/AddService" element={<AddService />} /> {/* Route for AddService */}
            <Route path="/AddPet" element={<AddPet />} /> {/* Route for AddPet */}
            <Route path="/Settings" element={<Settings />} /> {/* Route for Provider Settings */}
            <Route path="/UserSettings" element={<UserSettings />} /> {/* Route for User Settings */}
            <Route path="/AboutUs" element={<AboutUs />} /> {/* Route for AddService */}
            <Route path="/RegisterForm" element={<RegisterForm />} /> {/* Route for RegisterForm */}
            <Route path="/ProviderProfile" element={<ProviderProfile />} /> {/* Route for ProviderProfile */}
            <Route path="/ProviderProfileView" element={<ProviderProfileView />} /> {/* Route for ProviderProfileView */}
            <Route path="/UserProfile" element={<UserProfile />} /> {/* Route for UserProfile */}
            <Route path="/Profile" element={<Profile />} /> {/* Route for Profile */}
            <Route path="/Pets" element={<Pets />} /> {/* Route for Pets */}
            <Route path="/AddCat" element={<AddCat />} /> {/* Route for AddCat */}
            <Route path="/AddDog" element={<AddDog />} /> {/* Route for AddDog */}
            <Route path="/AddPet" element={<AddPet />} /> {/* Route for AddPet */}
            <Route path="/LogoutPage" element={<LogoutPage />} /> {/* Route for LogoutPage */}
          </Route>
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <footer>© Team Laika Capstone Project 2024</footer>
    </div>
  );
};

export default App;
