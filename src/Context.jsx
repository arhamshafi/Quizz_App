import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export let appcontext = createContext();

function Context({ children }) {
    let [category, setCategory] = useState([]);
    let [selected_category, setselected_Category] = useState("");
    let [difficulty, setdifficulty] = useState("");
    let [question_num, setquestion_num] = useState("");
    let [loader, setloader] = useState(false);
    let [questionsData, setQuestionsData] = useState(null);
    let [answers, setAnswers] = useState({});
    let [count, setcount] = useState(null)
    let navigate = useNavigate();


    let Main_fetch = async () => {
        try {
            setloader(true);
            let response = await fetch(`https://opentdb.com/api_category.php`);
            let main_data = await response.json();
            setCategory(main_data.trivia_categories);
        } catch {
            console.log("API is not working");
        } finally {
            setloader(false);
        }
    };

    let Fectch_f = async () => {
        try {
            setloader(true);
            let response = await fetch(
                `https://opentdb.com/api.php?amount=${question_num}&category=${selected_category}&difficulty=${difficulty}&type=multiple`
            );
            let data = await response.json();
            setQuestionsData(data.results);
            setAnswers(Array(data.results.length).fill(""))

        } catch {
            console.log("2nd API is not working");
        } finally {
            setloader(false);
        }
    };

    useEffect(() => {
        Main_fetch();
    }, []);

    let start_quiz = () => {
        Fectch_f();
        setselected_Category("");
        setdifficulty("");
        setquestion_num("");
    };

    function results() {
        let counter = 0
        answers.forEach((ele, idx) => {
            if (ele === questionsData[idx].correct_answer) {
                counter++
            }
        })
        setcount(counter)
        navigate("/Result")
    }
    function reset(){
        setAnswers([])
        setcount(null)
        navigate("/")
        
    }



    return (
        <appcontext.Provider
            value={{
                category,
                selected_category,
                setselected_Category,
                difficulty,
                setdifficulty,
                question_num,
                setquestion_num,
                loader,
                start_quiz,
                questionsData,
                setQuestionsData,
                answers,
                setAnswers,
                results,
                count,
                reset
            }}
        >
            {children}
        </appcontext.Provider>
    );
}

export default Context;
