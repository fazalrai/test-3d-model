import React from "react";
import "./App.css";
import SignIn from "./signIn/Index";
import Header from "./Header";
import SingUp from "./signUp/Index";
import ModelList from "./modelList/Index";
import InvalidPath from "./invalidPath/Index";

import { Routes, Route } from "react-router-dom";
import Box from './threeFibre'
import { Canvas, useFrame } from '@react-three/fiber'
import Xray from './rayCast'

import Test from './Test'
import Github from './GitHub.js'

export default function App() {
  // const token = localStorage.getItem("Token");
  // const [login, setLogin] = React.useState(false)

  return (
    <div>

      {/* <Header setLogin={setLogin}/>
      <Routes>
        <Route exact path="/" element={<SingUp setLogin={setLogin} />} />
        <Route exact path="/login" element={<SignIn  setLogin={setLogin} />} />
        <Route path="/models" exact element={<ModelList />} />
        <Route path="*" element={<InvalidPath />} />
      </Routes> */}

{/* <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
<Github/> */}

<Test/>
  </div>
  );
}
