import React from 'react'
import './Header.css'

const Header = ({text1, text2, text3}) => {
  return (
    <h1
        className="text-center pt-5 pb-5 header1"
      >
        {text1}{' '}
        <span >
        {text2}
        </span>{' '}
        {text3}
      </h1>
  )
}

export default Header