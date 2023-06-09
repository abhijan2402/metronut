import React, { useEffect, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { query, where, getDocs } from 'firebase/firestore';
import Lottie from "lottie-react";
import { db } from '../../firebase';
import thankYou from '../../assets/thankYou.json'
import './Form.css';
function Form({ state }) {
  const [name, setname] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [classVal, setclassVal] = useState('');
  const [problem, setProblem] = useState('');
  const [AniActive, setAniActive] = useState(false)
  const SubmitForm = async () => {
    console.log(name, phoneNumber, classVal, problem);
    try {
      if (name === '') throw alert('Please Enter Name');
      if (phoneNumber === '') throw alert('Please Enter Phone Number');
      if (classVal === '') throw alert('Please Enter Class');
      else {
        const date = new Date();
        const CHeckD = date.toISOString();
        console.log(CHeckD, 'jj');
        let resultArray = [];
        var len = 0;
        const baseQuery = query(collection(db, 'FormData'));
        await getDocs(baseQuery).then((res) => {
          res.forEach((item) => {
            resultArray.push({ id: item.id, ...item.data() });
          });
          len = resultArray.length;
          console.log(len, 'hjj');
        });
        console.log(len, 'i m len');
        const docRef = await addDoc(collection(db, 'FormData'), {
          Name: name,
          Class: classVal,
          Mobile: phoneNumber,
          Problem: problem,
          Date: CHeckD,
          Note: '',
          Num: len,
        })
          .then((res) => {
            console.log('Document written with ID: ', res.id);
            setAniActive(true);
            setTimeout(() => {
              state(false);
              setAniActive(false)
            }, 6000);
          })
          .catch((e) => {
            throw 'Please try again,Some error occured !!';
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    console.log('kkk');
    let resultArray = [];
    const baseQuery = query(collection(db, 'FormData'));
    getDocs(baseQuery).then((res) => {
      res.forEach((item) => {
        resultArray.push({ id: item.id, ...item.data() });
      });
      let len = resultArray.length;
      console.log(len, 'I am len');
      return len;
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="FormMainOuterDiv">
      <div className="fromblur" />
      <div className="FormMainDiv">
        <div className="ImageCross" onClick={state}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png"
            className="FormImage"
          />
        </div>
        {
          AniActive ? <div>
            <h4 style={{ textAlign: "center", margin: "2% 5%" }}> We will connect with you shortly!!!</h4>
            <Lottie animationData={thankYou} style={{ width: "100%", height: "100%" }} />
          </div> :
            <>
              <div className="FormHeadingDiv">
                <h2 className="FormHeading">
                  Fill out the Form To Get Free Demo by IITian
                </h2>
                {/* </div> */}
              </div>
              <div className="OuterFormDiv">
                <div className="InputMainDiv">
                  <label className="FormLabel">Name *</label>
                  <input
                    className="FormInput"
                    type="text"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
                </div>
                <div className="InputMainDiv">
                  <label className="FormLabel">Mobile *</label>
                  <input
                    className="FormInput"
                    type="text"
                    onChange={(e) => {
                      setphoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="InputMainDiv">
                  <label className="FormLabel">Class *</label>
                  <div className="InputradioDiv">
                    <div className="InputInnerDivR">
                      <input
                        type="radio"
                        id="11th"
                        name="11th"
                        value="11th"
                        onClick={(e) => {
                          setclassVal(e.target.value);
                        }}
                      />
                      <label htmlFor="vehicle1">11th</label>
                    </div>
                    <div className="InputInnerDivR">
                      <input
                        type="radio"
                        id="11th"
                        name="11th"
                        value="12th"
                        onClick={(e) => {
                          setclassVal(e.target.value);
                        }}
                      />
                      <label htmlFor="vehicle1">12th</label>
                    </div>
                    <div className="InputInnerDivR">
                      <input
                        type="radio"
                        id="11th"
                        name="11th"
                        value="Dropper"
                        onClick={(e) => {
                          setclassVal(e.target.value);
                        }}
                      />
                      <label htmlFor="vehicle1">Dropper</label>
                    </div>
                    <div className="InputInnerDivR">
                      <input
                        type="radio"
                        id="11th"
                        name="11th"
                        value="Below11th"
                        onClick={(e) => {
                          setclassVal(e.target.value);
                        }}
                      />
                      <label htmlFor="vehicle1"> Below 11th</label>
                    </div>
                  </div>
                </div>
                <div className="InputMainDiv">
                  <label className="FormLabel">Problem (Optional)</label>
                  <textarea
                    placeholder="Kindly share your problem in brief"
                    className="FormInput"
                    type="text"
                    rows="5"
                    onChange={(e) => {
                      setProblem(e.target.value);
                    }}
                  />
                </div>
                <div className="ButtonFormDiv">
                  <button className="FormBtn" onClick={SubmitForm}>
                    Submit
                  </button>
                </div>
              </div>
            </>
        }
        {/* <div> */}
      </div>
    </div>
  );
}

export default Form;
