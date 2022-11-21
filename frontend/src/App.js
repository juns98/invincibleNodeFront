import MainPage from  "./page/main";
import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MyAsset from "./page/myAsset";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path='/my-asset' element={<MyAsset />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
