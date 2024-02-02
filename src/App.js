// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import NewsDesign from './componets/NewsDesign';
import Navbar from './componets/Navbar';
import News from './componets/News';
import { useState } from 'react';

function App() {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div className="App">
      <>
        <BrowserRouter>
        <Navbar setSearchWord={setSearchWord} searchWord={searchWord}/>
          <Routes>
            <Route path='/' element={<News key="general" country="in" category="general" pagesize={12} searchWord={searchWord}/>} />
            <Route path='/Business' element={<News key="Business" country="in" category="business"  pagesize={12} searchWord={searchWord}/>} />
            <Route path='/Entertainment' element={<News key="Entertainment" country="in" category="entertainment"  pagesize={12}searchWord={searchWord}/>} />
            <Route path='/Health' element={<News key="Health" country="in" category="health"  pagesize={12}searchWord={searchWord}/>}/>
            <Route path='/science' element={<News key="science" country="in" category="science"  pagesize={12}searchWord={searchWord}/>} />
            <Route path='/Sports' element={<News key="Sports" country="in" category="sports"  pagesize={12}searchWord={searchWord}/>} />
            <Route path='/Technology' element={<News key="Technology" country="in" category="technology"  pagesize={12}searchWord={searchWord}/>}/>
          </Routes>
        </BrowserRouter>
      </>
      
    </div>
  );
}

export default App;