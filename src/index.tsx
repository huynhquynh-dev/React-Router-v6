import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import App from './App';
import Abouts from './components/Abouts';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './index.css';
import About from './components/About';
import NewAbout from './components/NewAbout';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<Abouts />}>
            <Route index element={<><h2>Please select about</h2></>} />
            <Route path=":aboutId" element={<About />} />
            <Route path="new" element={<NewAbout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
