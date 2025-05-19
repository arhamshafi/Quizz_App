import React from "react";
import Quiz from "./Quiz";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Questions_page from "./Questions_page";
import Result_page from "./Result_page";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/Questions" element={<Questions_page />} />
          <Route path="/Result" element={<Result_page />} />
        </Routes>
  );
}

export default App;
