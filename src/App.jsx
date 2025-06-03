import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DeletePet from './Pages/User/DeletePet';
import PetInfo from './Pages/User/PetInfo';
import Settings from './Pages/Settings'; 
import AboutUs from './Pages/AboutUs';
import RegisterForm from './Pages/RegisterForm';
import LogoutPage from './Pages/LogoutPage';
import WelcomeBack from './Pages/WelcomeBack';
import Profile from './Pages/Profile';
import './App.css';
import './Layout';


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
            <Route path="/AboutUs" element={<AboutUs />} /> {/* Route for AddService */}
            <Route path="/RegisterForm" element={<RegisterForm />} /> {/* Route for RegisterForm */}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Profile/:userId" element={<Profile />} />
            <Route path="/Pets" element={<Pets />} /> {/* Route for Pets */}
            <Route path="/AddCat" element={<AddCat />} /> {/* Route for AddCat */}
            <Route path="/AddDog" element={<AddDog />} /> {/* Route for AddDog */}
            <Route path="/AddPet" element={<AddPet />} /> {/* Route for AddPet */}
            <Route path="/DeletePet/:petId" element={<DeletePet />} /> {/* Route for DeletePet */}
            <Route path="/PetInfo/:petId" element={<PetInfo />} /> {/* Route for PetInfo */}
            <Route path="/LogoutPage" element={<LogoutPage />} /> {/* Route for LogoutPage */}
            <Route path="/WelcomeBack" element = {<WelcomeBack />} /> {/* Route for WelcomeBack*/}
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