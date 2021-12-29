import React from "react";
import "./App.css";
import SignIn from "./signIn/Index";
import Header from "./Header";
import SingUp from "./signUp/Index";
import ModelList from "./modelList/Index";
import InvalidPath from "./invalidPath/Index";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const token = localStorage.getItem("Token");
  const [login, setLogin] = React.useState(false)

  return (
    <div>
      <Header setLogin={setLogin}/>
      <Routes>
        <Route exact path="/" element={<SingUp setLogin={setLogin} />} />
        <Route exact path="/login" element={<SignIn  setLogin={setLogin} />} />
        {token && <Route path="/models" exact element={<ModelList />} />}
        <Route path="*" element={<InvalidPath />} />
      </Routes>
    </div>
  );
}
