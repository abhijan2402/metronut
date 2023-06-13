import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase'
import './Form.css'
function Form({ state }) {
    const [name, setname] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [classVal, setclassVal] = useState("")
    const [problem, setProblem] = useState("")
    const SubmitForm = async () => {
        console.log(name, phoneNumber, classVal, problem)
        try {
            if (name == "")
                throw alert("Please Enter Name")
            if (phoneNumber == "")
                throw alert("Please Enter Phone Number")
            if (classVal == "")
                throw alert("Please Enter Class")
            if (problem == "")
                throw alert("Please Enter Problem Description")
            else {
                const docRef = await addDoc(collection(db, "FormData"), {
                    Name: name,
                    Class: classVal,
                    Mobile: phoneNumber,
                    Problem: problem
                }).then((res) => {
                    console.log("Document written with ID: ", res.id);
                    alert("Your Form submitted,We'll update shortly")
                }).catch((e) => {
                    throw "Please try again,Some error occured !!"
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='FormMainOuterDiv'>
            <div className='FormMainDiv'>
                <div className='ImageCross' onClick={state}>
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
                        <input className="FormInput" type="text" onChange={(e) => { setname(e.target.value) }} />
                    </div>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Mobile</label>
                        <input className="FormInput" type="text" onChange={(e) => { setphoneNumber(e.target.value) }} />
                    </div>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Class</label>
                        <div className='InputradioDiv'>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="11th" name="11th" value="11th" onClick={(e) => { setclassVal(e.target.value) }} />
                                <label for="vehicle1">11th</label>
                            </div>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="11th" name="11th" value="12th" onClick={(e) => { setclassVal(e.target.value) }} />
                                <label for="vehicle1">12th</label>
                            </div>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="11th" name="11th" value="Dropper" onClick={(e) => { setclassVal(e.target.value) }} />
                                <label for="vehicle1">Dropper</label>
                            </div>
                            <div className='InputInnerDivR'>
                                <input type="radio" id="11th" name="11th" value="Below11th" onClick={(e) => { setclassVal(e.target.value) }} />
                                <label for="vehicle1"> Below 11th</label>
                            </div>
                        </div>
                    </div>
                    <div className='InputMainDiv'>
                        <label className='FormLabel'>Problem</label>
                        <textarea className="FormInput" type="text" rows="5" onChange={(e) => { setProblem(e.target.value) }} />
                    </div>
                    <div className='ButtonFormDiv'>
                        <button className='FormBtn' onClick={SubmitForm}>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form