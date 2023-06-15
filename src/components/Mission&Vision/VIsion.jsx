import React from 'react'
import './Mission.css';
import Lottie from "lottie-react";
import Vision from '../../assets/Vision.json'
function VIsion() {
    return (
        <div className='mb-5 pb-md-5 pb-3' style={{ width: "100%" }}>
            <div className='MissionMainDiv'>
                <div className='MissionImageDiv'>
                    <Lottie animationData={Vision} style={{ width: "100%", height: "100%" }} />
                    {/* <img src='https://img.freepik.com/free-vector/ambition-abstract-concept_335657-3013.jpg' className='ImageGoal' /> */}
                </div>
                <div className='MissionTextDiv'>
                    <div className='MissionTitle'>
                        <h1>Our Vision</h1>
                    </div>
                    <div className='MissonDesc'>
                        {/* <p style={{ margin: "auto", width: "auto", width: "80%", textAlign: "center", marginTop: "2%" }}>Remove the excuse that</p> */}
                        <p>
                            To provide the best mentor at an
                            affordable price so that any student
                            can afford it and achieve equally
                            better results as well-funded
                            students.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VIsion