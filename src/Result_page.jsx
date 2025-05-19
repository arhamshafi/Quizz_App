import React, { useContext } from 'react'
import { appcontext } from './Context'
import Pencil from './Pencil_loader'

function Result_page() {
  let { answers, questionsData, count , reset } = useContext(appcontext)
  // console.log(questionsData);

  return (
    <div className='w-full h-max py-3 pb-8 '>
      <h1 className='text-blue-500 font-bold text-center mt-8 text-3xl context tshb tracking-[3px]'>Result <span className='text-black tshbl'>Page</span></h1>
      <div className='w-[90%] py-4 mt-12 mx-auto'>
        {
           questionsData && questionsData.map((ele, idx) => {

            return (
              <div key={idx} className='mt-4 relative'>
                <div className='w-max mx-auto absolute top-[38%] right-[0] sm:right-[10%] '> <Pencil /> </div>
                <h1 className='text-black font-bold context text-md sm:text-xl '>Q{idx + 1} : {ele.question}`</h1>
                <p className='text-black text-md context mt-4 text-sm sm:text-lg'>Correct_Answer : <span className='text-green-600 font-bold'>{ele.correct_answer}</span> </p>
                <p className='text-black text-md mt-4 context text-sm sm:text-lg'>Selected By User : <span className='text-blue-500 font-bold'>{answers[idx]}</span> </p>
                <div className='w-[90%] h-[1px] bg-gray-400 mx-auto mt-12 rounded-[3px]'></div>
              </div>
            )
          })
        }

      </div>

      <h2 className='text-black text-xl mt-5 text-center context'>Total Correct Answers: <span className='text-blue-600 font-bold'>{count}</span> </h2>
      <div className='w-max mx-auto mt-8'>
        <button className="btn_r" onClick={reset}
        ><i className="animation"></i>Wanna Try Again...??<i className="animation"></i>
        </button></div>
    </div>
  )
}

export default Result_page