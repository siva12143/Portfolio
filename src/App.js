import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import About from './components/About';
import Project from './components/project';

import Service from './components/service';
import FullPage from './fullPage';

function App() {

  
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<FullPage/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
