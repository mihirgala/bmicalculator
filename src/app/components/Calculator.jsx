'use client'
import { useState } from 'react'

const Calculator = () => {

    const [weight, setWeight] = useState()
    const [height, setHeight] = useState()
    const [weightMetric, setWeightMetric] = useState('KG')
    const [heightMetric, setHeightMetric] = useState('CM')
    const [BMI, setBMI] = useState();
    const [catagory, setCatagory] = useState();

    const calculateBMI = (e) => {
        let tempBMI;
        let tempWeight;
        let tempHeight;

        e.preventDefault()
        if (weightMetric === 'LBS') {
            tempWeight = (weight / 2.205);
        }
        else {
            tempWeight = weight;
        }
        if (heightMetric === 'Foot') {
            tempHeight = (height * 30.48);
        }
        else if(heightMetric === 'Inch'){
            tempHeight = (height * 2.54);
        }
        else {
            tempHeight = height;
        }


        tempBMI = tempWeight / ((tempHeight / 100) * (tempHeight / 100));
        tempBMI = tempBMI.toFixed(1);
            if(tempBMI < 18.5){
                setCatagory('Underweight')
            }
            else if(tempBMI >= 18.5 && tempBMI <= 24.9){
                setCatagory('Normal weight')
            }
            else if(tempBMI >= 25 && tempBMI <= 29.9){
                setCatagory('Over weight')
            }
            else if(tempBMI >= 30){
                setCatagory('Obesity')
            }
        setBMI(tempBMI);
    }


    return (
        <div className="flex justify-center flex-col w-full p-10 md:w-[50%] mx-auto">
            <div className='flex justify-center min-h-[40px] my-3 w-[100%]'>
                {BMI && <p 
                className={`text-2xl text-center w-[100%] p-2 rounded-lg ${catagory === 'Underweight' ? 'bg-[#ffe23f]' : '' || catagory === 'Normal weight' ? 'bg-[#0b7522]' : '' || catagory === 'Over weight' ? 'bg-[#ffe23f]' : '' || catagory === 'Obesity' ? 'bg-[#920808]' : '' }`}
                >Your is BMI : {BMI}</p> || <p className='text-2xl text-center w-[100%] border-[2px] border-[#DAA520] rounded-lg'>Enter Details To Check BMI</p>}
            </div>
            <form className="flex flex-col gap-4 backdrop-blur-xl bg-inherit/80 shadow-lg ring-offset-0 ring-2 ring-[#daa520b7] p-5 rounded-lg" onSubmit={calculateBMI}>
                <div className='flex justify-between px-2'>
                    <input
                        className='border-[2px] bg-inherit w-[70%] border-solid border-[#DAA520] rounded-lg p-2'
                        type="number"
                        name="weight"
                        step={0.01}
                        placeholder='Enter Weight'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required />
                    <select
                        className='border-[2px] bg-inherit w-[25%] border-solid border-[#DAA520] rounded-lg p-2'
                        name="weightMetric"
                        onChange={(e) => setWeightMetric(e.target.value)}
                    >
                        <option className='text-black' value="KG" selected>KG</option>
                        <option className='text-black' value="LBS">LBS</option>
                    </select>
                </div>
                <div className='flex justify-between px-2'>
                    <input
                        className='border-[2px] bg-inherit w-[70%] border-[#DAA520] rounded-lg p-2'
                        type="number"
                        name="height"
                        step={0.01}
                        placeholder='Enter Height'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required />
                    <select
                        className='border-[2px] bg-inherit w-[25%] border-solid border-[#DAA520] rounded-lg p-2'
                        name="heightMetric"
                        onChange={(e) => setHeightMetric(e.target.value)}
                    >
                        <option className='text-black' value="CM" selected>CM</option>
                        <option className='text-black' value="Inch">Inch</option>
                        <option className='text-black' value="Foot">Foot</option>
                    </select>
                </div>
                <div className='flex justify-center'>
                    <input
                        className='border-[2px] cursor-pointer hover:border-white border-solid border-[#DAA520] rounded-lg p-2'
                        type="submit"
                        value="Calculate BMI" />
                </div>
            </form>
        </div>
    )
}

export default Calculator