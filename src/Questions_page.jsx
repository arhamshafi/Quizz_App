import React, { useContext, useEffect, useState } from 'react';
import { appcontext } from './Context';
import ScreenLoader from './ScreenLoader';
import Question_anime from "./Question_anime";
import Quest_dot from './Ques_dot';

function Questions_page() {
    const { questionsData, answers, setAnswers, results , inp_disable } = useContext(appcontext);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);


    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // 
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    // console.log(answers);

    useEffect(() => {
        if (questionsData) {
            const shuffled = questionsData.map(q =>
                shuffleArray([...q.incorrect_answers, q.correct_answer])
            );
            setShuffledAnswers(shuffled);
        }
    }, [questionsData]);

    const handle = (qIndex, selectedOption) => {
        const updatedAnswers = [...answers];
        updatedAnswers[qIndex] = selectedOption;
        setAnswers(updatedAnswers);
    };



    if (!questionsData || shuffledAnswers.length === 0) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <ScreenLoader />
            </div>
        );
    }
    // console.log(questionsData ? questionsData : null);

    return (
        <div className='w-full h-max '>
            <div className="w-full h-screen relative py-3 bg-white flex flex-col overflow-y-auto">
                <h1 className="font-bold text-3xl text-black mt-8 tracking-[2px] text-center relative context tshbl">
                    <span className="text-blue-500 tshb">Answer</span> The Following <span className="text-blue-500 tshb">Question</span>
                </h1>

                <div className="w-full mt-8">
                    {questionsData.map((ele, q_idx) => {
                        const all_answers = shuffledAnswers[q_idx];

                        return (
                            <div
                                key={q_idx}
                                className="rounded-2xl bxshb w-[90%] h-[280px] md:h-[250px] bg-black mx-auto mt-4"
                            >
                                <div className="w-full h-full flex justify-evenly items-center relative overflow-hidden">
                                    <Question_anime style={{ transform: "scale(5)" }} />

                                    <div className="w-full h-full absolute p-5 z-10">
                                        <div className="text-white font-bold text-sm md:text-lg tracking-[1px] mt-2 flex items-center gap-2 tshw">
                                            <div className='w-max hidden sm:block'><Quest_dot /></div>
                                            {ele.question}
                                        </div>

                                        <div className="mt-6">
                                            {all_answers.map((option, slct_answer) => {
                                                return (
                                                    <div key={slct_answer} className="w-full mt-3">
                                                        <div className="flex items-center gap-3">
                                                            <input
                                                                type="radio"
                                                                id={`q${q_idx}-opt${slct_answer}`}
                                                                name={`question-${q_idx}`}
                                                                value={option}
                                                                checked={answers[q_idx] === option}
                                                                disabled={inp_disable}
                                                                onChange={() => handle(q_idx, option)}
                                                                style={{ display: "none" }}
                                                            />

                                                            <label
                                                                htmlFor={`q${q_idx}-opt${slct_answer}`}
                                                                className="check cursor-pointer"
                                                            >
                                                                <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
                                                                    <polyline points="1 9 7 14 15 4" />
                                                                </svg>
                                                            </label>

                                                            <label
                                                                htmlFor={`q${q_idx}-opt${slct_answer}`}
                                                                className="text-white text-sm tracking-[0.5px] cursor-pointer tshw"
                                                            >
                                                                {option}
                                                            </label>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='w-max mx-auto'>
                    <button className="btn_r" onClick={results}
                    ><i className="animation"></i>Show Result<i className="animation"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Questions_page;
