import React from 'react'
import './Mission.css'
import Lottie from "lottie-react";
import target from '../../assets/target.json'
function Mission() {
    return (
        <div className='mt-5 pt-2 pt-md-5' style={{ width: "100%" }}>
            <div className='MissionMainDiv'>
                <div className='MissionTextDiv'>
                    <div className='MissionTitle'>
                        <h1>Our Mission</h1>
                    </div>
                    <div className='MissonDesc'>
                        <p style={{ margin: "auto", width: "auto", width: "80%", textAlign: "center", marginTop: "2%" }}>Remove the excuse that</p>
                        <p>
                            "I did not do well because
                            I didn't have proper guidance"
                            because now we are providing the
                            best mentor from your dream college.</p>
                    </div>
                </div>
                <div className='MissionImageDiv'>
                    {/* <img src='https://img.freepik.com/free-vector/ambition-abstract-concept_335657-3013.jpg' className='ImageGoal' /> */}
                    <Lottie animationData={target} style={{ width: "100%", height: "100%" }} />

                </div>
            </div>
        </div>
    )
}
export default Mission