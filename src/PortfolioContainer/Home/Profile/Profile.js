import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                             <a href='https://www.facebook.com/jayed018'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href=''>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href=''>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Jayed Bin Nazir</span>
                           
                            <span className="wave">👋</span> 
                        
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            steps = {[
                                "Front-end Dev 😎",1000,
                                "React Dev 🌐",1000,
                                "Java Dev 📱",1000,
                                "Back-end Dev 💻",1000,
                            ]}
                            loop={Infinity}
                            />
                            </h1>
                            <span className='profile-role-tagline'>
                           <span>Knack of building application or website with back end operations.</span> 
                           
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                    <a  href='https://www.linkedin.com/in/jayed-bin-nazir-253322235/'>
                        <button className='btn highlighted-btn'>
                            LinkedIn
                        </button>
                        </a>
                        <a href ='https://github.com/jayedbinnazir'>
                            <button type="button" className='btn highlighted-btn '>
                               
                                Github
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;