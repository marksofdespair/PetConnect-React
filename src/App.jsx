import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Settings from './Pages/Settings'; // Assuming this is where your Settings component is located
import AboutUs from './Pages/AboutUs';
import RegisterForm from './Pages/RegisterForm';
import ProviderProfile from './Pages/Provider/ProviderProfile';
import UserProfile from './Pages/User/UserProfile';
import LogoutPage from './Pages/LogoutPage';
import WelcomeBack from './Pages/WelcomeBack';

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/UserHome" element={<UserHome />} />
            <Route path="/ServiceSearch" element={<ServiceSearch />} />
            <Route path="/AddService" element={<AddService />} />
            <Route path="/AddPet" element={<AddPet />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
            <Route path="/ProviderProfile" element={<ProviderProfile />} />
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/Pets" element={<Pets />} />
            <Route path="/AddCat" element={<AddCat />} />
            <Route path="/AddDog" element={<AddDog />} />
            <Route path="/LogoutPage" element={<LogoutPage />} />
            <Route path="/WelcomeBack" element={<WelcomeBack />} />
            <Route path="/Settings" element={<Settings />} /> 
          </Route>
        </Routes>
      </Router>
      {/* Footer and other elements */}
    </div>
  );
};

export default App;
