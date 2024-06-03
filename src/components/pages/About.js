import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab((prevTab) => (prevTab === tab ? null : tab));
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="images/user.jpg" alt="User" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>Sean Gambanou is a 22 year old young man of many talents, some would say embodiment of an A Student. He's the type of individual who if he doesn't understand nor have the answers, he will hunt for them. We can spend a whole year running through the autobiography but why don't we rather check the E.E.S.</p>
                        <div className="tab-container">
                            <div className="tab-titles">
                                <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => handleTabClick('education')} data-tab="education">Education</p>
                                <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => handleTabClick('experience')} data-tab="experience">Experience</p>
                                <p className={`tab-links ${activeTab === 'strengths' ? 'active-link' : ''}`} onClick={() => handleTabClick('strengths')} data-tab="strengths">Strengths</p>
                            </div>
                            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                                <ul>
                                    <li><span>Primany</span><br />Sacred Heart Primary (2008-2010), Laerskool WH Coetzer Primary (2010-2014)</li>
                                    <li><span>Secondary</span><br />The Hill High School (2015-2019)</li>
                                    <li><span>Tertiary</span><br />Rosebank College (2020)</li>
                                    <li><span>Current</span><br />ALX Africa (2023-Present) </li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                                <ul>
                                    <li><span>Sales</span><br />Manager (2022-Present)</li>
                                    <li><span>Security</span><br />Technician (2022-Present)</li>
                                    <li><span>Software Development</span><br /> (2020-Present)</li>
                                    <li><span>Music</span><br />Recording Engineer, Mixing Engineer, Mastering Engineer, Songwriter (2018-Present)</li>
                                    <li><span>Marketing</span><br />Social Media Analyst, Copywriter (2023-Present)</li>
                                </ul>
                            </div>
                            <div className={`tab-contents ${activeTab === 'strengths' ? 'active-tab' : ''}`} id="strengths">
                                <ul>
                                    <li><span>Tech-savvy</span><br />Proficient with modern technology and software.</li>
                                    <li><span>Teamplayer</span><br />Works effectively within a team setting.</li>
                                    <li><span>Multitasking</span><br />Handles multiple tasks simultaneously.</li>
                                    <li><span>Initiative</span><br />Takes proactive steps to achieve goals.</li>
                                    <li><span>Attention to Detail</span><br />Ensures accuracy and precision in work.</li>
                                    <li><span>Networking</span><br />Builds and maintains professional connections.</li>
                                    <li><span>Project Management</span><br />Coordinates and oversees projects from start to finish.</li>
                                    <li><span>Cultural Awareness</span><br />Appreciates and respects diverse perspectives.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
