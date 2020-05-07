import React from 'react';
import "../src/App.css";
import '../src/components/Header/Header.css';
import '../src/components/Sidebar/Sidebar.css';
import './components/Boxs/Box.css';

import { Sidebar } from "./components/Sidebar/Sidebar";
import { MainBox } from "./containers/MainBox";
import { SimpleMap } from "./components/Maps/SimpleMap"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainBox/>
      <SimpleMap/>
    </div>
  );
}

export default App;
