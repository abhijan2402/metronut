import React, { useState } from 'react'
import Form from '../FormModal/Form'
import './Home.css'
function Home() {
    const [FormActive, setFormActive] = useState(false)
    return (
        <div className='HomeMainDiv'>
            {
                FormActive ?
                    <Form /> : null

            }
        </div>
    )
}

export default Home