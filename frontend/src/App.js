import "./App.css";
import MainPage from "./page/main";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MyAsset from "./page/myAsset";
import StakePage from "./page/stake";
import styled from "styled-components";

const Background = styled.div`
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
`;

function App() {
  return (
    <Background className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/stake" element={<StakePage />}></Route>
          <Route path="/my-asset" element={<MyAsset />}></Route>
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;
