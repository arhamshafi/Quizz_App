import React, { useContext } from "react";
import ScreenLoader from "./ScreenLoader";
import Head_loader from "./Head_loader";
import { useNavigate } from "react-router-dom";
import { appcontext } from "./Context";

function Quiz() {
  let {
    category,
    selected_category,
    setselected_Category,
    difficulty,
    setdifficulty,
    question_num,
    setquestion_num,
    loader,
    start_quiz,
    
  } = useContext(appcontext);

  let navigate = useNavigate();

  let handleStart = () => {
    start_quiz();
    navigate("/Questions");
  };

  if (loader) {
    return (
      <div className="w-full h-screen flex justify-center items-center ">
        <ScreenLoader />
      </div>
    );
  }

  return (
    <div className="w-full py-12 ">
      <div className="w-full flex justify-center items-center">
        <Head_loader />
        <h1 className="text-center font-bold text-blue-500 context text-3xl sm:text-5xl tshb tracking-[2px] flex justify-center items-center gap-3">
          QUIZ <span className="text-black tshbl">APP</span>
        </h1>
        <Head_loader />
      </div>

      <div className=" card w-[80%] sm:w-[550px] mx-auto mt-16 py-8 rounded-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 flex justify-center items-center flex-col">

        <div className="relative w-[80%] my-4">
          <select
            id="selected_category"
            required
            value={selected_category}
            onChange={(e) => setselected_Category(e.target.value)}
            className="peer w-full px-4 py-3 text-md border-2 rounded-2xl bg-white text-black outline-none transition-all duration-300 border-transparent shadow-inner appearance-none pr-10 focus:border-blue-600"
          >
            <option value="" disabled hidden></option>
            {category.map((ele) => (
              <option
                key={ele.id}
                className="bg-black text-white hover:bg-blue-100 hover:text-blue-700"
                value={ele.id}
              >
                {ele.name}
              </option>
            ))}
          </select>
          <label
            htmlFor="selected_category"
            className={`absolute left-3 px-1 text-sm bg-white rounded-md pointer-events-none text-gray-500 transition-all duration-300 ${selected_category ? "top-[-10px] scale-90 text-blue-500" : "top-[14px]"
              } peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-blue-500`}
          >
            Select Category
          </label>
        </div>
        <div className="relative w-[80%] my-4">
          <input
            type="number"
            id="number"
            placeholder=" "
            required
            value={question_num}
            onChange={(e) => setquestion_num(e.target.value)}
            min={2}
            className="peer w-full context px-4 py-3 text-md border-2 rounded-2xl bg-white text-black outline-none transition-all duration-300 border-transparent shadow-inner focus:shadow-none focus:border-blue-600"
          />
          <label
            htmlFor="number"
            className="absolute left-3 top-[14px] px-1 text-sm bg-white rounded-md transition-all duration-300 pointer-events-none text-gray-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:translate-y-[-130%] peer-focus:scale-90 peer-focus:text-blue-500 peer-[&:not(:placeholder-shown)]:translate-y-[-130%] peer-[&:not(:placeholder-shown)]:scale-90 peer-[&:not(:placeholder-shown)]:text-blue-500"
          >
            Select Number of Question
          </label>
        </div>

        <div className="relative w-[80%] my-4">
          <select
            id="difficulty"
            required
            value={difficulty}
            onChange={(e) => setdifficulty(e.target.value)}
            className="peer w-full px-4 py-3 text-md border-2 rounded-2xl bg-white text-black outline-none transition-all duration-300 border-transparent shadow-inner appearance-none pr-10 focus:border-blue-600"
          >
            <option value="" disabled hidden></option>
            <option
              className="bg-black text-white hover:bg-blue-100 hover:text-blue-700"
              value="easy"
            >
              Easy
            </option>
            <option
              className="bg-black text-white hover:bg-blue-100 hover:text-blue-700"
              value="medium"
            >
              Medium
            </option>
            <option
              className="bg-black text-white hover:bg-blue-100 hover:text-blue-700"
              value="hard"
            >
              Hard
            </option>
          </select>
          <label
            htmlFor="difficulty"
            className={`absolute left-3 px-1 text-sm bg-white rounded-md pointer-events-none text-gray-500 transition-all duration-300 ${difficulty ? "top-[-10px] scale-90 text-blue-500" : "top-[14px]"
              } peer-focus:top-[-10px] peer-focus:scale-90 peer-focus:text-blue-500`}
          >
            Select Difficulty
          </label>
        </div>


        <button className="btn_q" disabled={!selected_category || !question_num || !difficulty} onClick={handleStart}
        ><i className="animation"></i> Start Quiz<i className="animation"></i>
        </button>



      </div>
    </div>
  );
}

export default Quiz;
