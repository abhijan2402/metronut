import React from 'react'
import './About.css'
import Team from '../../assets/images/Team.json'
import Story from '../../assets/images/Story.json'
import VisMiss from '../../assets/images/VisMiss.json'
import Lottie from "lottie-react";
import Navbar from '../../components/navbar/Navbar'

function About() {
    return (
        <div className='AboutMainDiv'>
            <Navbar />
            <div className='AboutInnerDiv'>
                <p className='AboutTitle'>Know Us Better</p>
                <p className='AboutTitleInner'>Powered by mentors from IIT
                    Bombay, we are here for long
                    term to Organic Mentorship
                    World</p>
            </div>
            <div className='MidAboutSection'>
                <div className='MidAbSec1'>
                    <Lottie animationData={Story} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className='MidAbSec2'>
                    <h1>Our Story</h1>
                    <p>The next step is to determine
                        which channels will generate
                        leads for each market
                        segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        business</p>
                </div>
            </div>


            <div className='MidAboutSection'>

                <div className='MidAbSec2'>
                    <h1>Our Vision and mission</h1>
                    <p>The next step is to determine
                        which channels will generate
                        leads for each market
                        segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        business
                    </p>
                </div>
                <div className='MidAbSec1'>
                    <Lottie animationData={VisMiss} style={{ width: "100%", height: "100%" }} />
                </div>
            </div>


            <div className='MidAboutSection'>
                <div className='MidAbSec1'>
                    <Lottie animationData={Team} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className='MidAbSec2'>
                    <h1>Our Team</h1>
                    <p>The next step is to determine
                        which channels will generate
                        leads for each market
                        segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        businessThe next step is to
                        determine which channels will
                        generate leads for each
                        market segment. A modern
                        business</p>
                </div>
            </div>
        </div>
    )
}

export default About