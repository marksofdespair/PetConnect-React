import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            PetConnect is a Capstone Project created by the Team Laika capstone project group for the May 2024 Full-Stack web developer program.
            <br></br>
            <br></br>
 
                <p><h1>The Techstack</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                </ul>

                <p><h1>The Team</h1></p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>[Sign Your Name Here!]</li>
                    <li><a href="https://github.com/wssommerhauser" target="_blank" rel="noopener noreferrer">Will - wssommerhauser</a></li>
                    <li><a href="https://github.com/trappmichael" target="_blank" rel="noopener noreferrer">Michael - trappmichael</a></li>
                    <li><a href="https://github.com/marksofdespair" target="_blank" rel="noopener noreferrer">Dia - Marksofdespair</a></li>
                </ul>
        </div>
    )
}

export default AboutUs;
