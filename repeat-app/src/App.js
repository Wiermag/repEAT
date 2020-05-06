import React from 'react';
import "../src/App.css";
import '../src/components/Sidebar/Sidebar.css';
import '../src/components/Box/Box.css';
import { Sidebar } from "./components/Sidebar/Sidebar";
import { MainBox } from "./components/Box/MainBox";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainBox/>
    </div>
  );
}

export default App;
