import React from 'react';

import "../src/main.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Sidebar } from "./components/Sidebar/Sidebar";
import { MainBox } from "./containers/MainBox/MainBox";


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainBox/>
    </div>
  );
}

export default App;
