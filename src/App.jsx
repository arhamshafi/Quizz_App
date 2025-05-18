import React from "react";
import Quiz from "./Quiz";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Questions_page from "./Questions_page";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/Questions" element={<Questions_page />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
