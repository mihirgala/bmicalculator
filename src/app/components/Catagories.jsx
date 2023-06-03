import React from 'react'

const Catagories = () => {
    return (
        <div className='flex justify-center flex-col p-10 w-full md:w-[50%] mx-auto text-center '>
            <div className='backdrop-blur-xl bg-inherit/80 shadow-lg ring-offset-0 ring-2 ring-[#daa520b7] rounded-lg p-5'>
            <h3 className='text-xl'>Catagories</h3>
                <p className='bg-[#ffe23f] rounded-xl p-2 my-2'>Underweight</p>
                <p className='bg-[#0b7522] rounded-xl p-2 my-2'>Normal weight</p>
                <p className='bg-[#ffe23f] rounded-xl p-2 my-2'>Over weight</p>
                <p className='bg-[#920808] rounded-xl p-2 my-2'>Obesity</p>
            </div>
        </div>
    )
}

export default Catagories