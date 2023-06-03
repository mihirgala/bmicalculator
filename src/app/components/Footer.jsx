import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-between px-2 bg-black'>
        <div></div>
        <div><p>BMI Calculator by <a className='underline text-center hover:text-[#daa520]' href="https://mihircodes.me">@Mihir Gala</a></p></div>
        <div><p className=''>version 0.1</p></div>
    </div>
  )
}

export default Footer