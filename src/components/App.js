import '../App.css';
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
