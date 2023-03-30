import React from "react";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Players />
      <ToastContainer />
    </div>
  );
}

export default App;
