// 링크 모음

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./function/ScrollToTop"
import Landing from "./components/landingPage"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
