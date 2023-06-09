import React from 'react'
import './Form.css'
function Form() {
    return (
        <div className='FormMainOuterDiv'>
            <div className='FormMainDiv'>
                <div className='ImageCross'>
                    <img src='https://cdn-icons-png.flaticon.com/128/2976/2976286.png' className='FormImage' />
                </div>
                {/* <div> */}
                <div className='FormHeadingDiv'>
                    <h2 className='FormHeading'>Fill out the Form To Get Free Demo by IITian</h2>
                    {/* </div> */}
                </div>
                <div className='OuterFormDiv'>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Name</label>
                        <input className="FormInput" type="text" />
                    </div>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Mobile</label>
                        <input className="FormInput" type="text" />
                    </div>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Class</label>
                        <div className='InputradioDiv'>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1">11th</label>
                            </div>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1">12th</label>
                            </div>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1">Dropper</label>
                            </div>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1"> Below 11th</label>
                            </div>
                        </div>
                    </div>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Problem</label>
                        <textarea className="FormInput" type="text" rows="5" />
                    </div>
                    <div className='ButtonFormDiv'>
                        <button className='FormBtn'>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form