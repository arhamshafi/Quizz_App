import React from 'react'
import { appcontext } from './Context'
import Pencil from './Pencil_loader'

function Result_page() {
    let { answer , questionsData } = appcontext
  return (
    <div className='w-full h-max py-3 '>
        <h1 className='text-blue-500 font-bold text-center mt-8 text-3xl context tshb tracking-[3px]'>Result <span className='text-black tshbl'>Page</span></h1>

            <div className='w-[90%] py-4 border mt-12 mx-auto'>

                <div className='w-max mx-auto'> <Pencil/> </div>
                <h1 className='text-black font-bold text-lg context'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores necessitatibus, saepe animi officiis voluptatum temporibus vero quas ipsam inventore?</h1>
                <p className='text-black text-md context mt-4'>Correct_Answer : <span className='text-green-600 font-bold'>kjbekfjb</span> </p>
                <p className='text-black text-md mt-4 context'>Selected By User : <span className='text-blue-500 font-bold'>dwedjlj</span> </p>
                
            

            </div>

             <h2 className='text-black text-xl mt-5 text-center context'>Total Correct Answers: <span className='text-blue-600 font-bold'>23 out of 40</span> </h2>
             <div className='w-max mx-auto mt-8'>
             <button className='border py-2 px-3 rounded transition-all cursor-pointer duration-150 ease-in hover:bg-black hover:text-white'>Wanna Try Again..?</button>
                </div>
    </div>
  )
}

export default Result_page