import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './routes/about/About.jsx';
import Home from './routes/home/Home.jsx'
import { MyNavbar } from './components/myNavbar.jsx';
import SqlChat from './routes/sqlChat/sqlChat.jsx';


export default function App() {
  const baseUrl = '/simple-chat-frontend'
  const headerArt = String.raw`
    ____  ___                  ___.          .__   _____      
    \   \/  /___________  _____\_ |__ _____  |  |_/ ____\_ __ 
     \     //  _ \_  __ \/     \| __ \\__  \ |  |\   __\  |  \
     /     (  <_> )  | \/  Y Y  \ \_\ \/ __ \|  |_|  | |  |  /
    /___/\  \____/|__|  |__|_|  /___  (____  /____/__| |____/ 
          \_/                 \/    \/     \/                 
    `;
  return (
    <BrowserRouter>
      <div className="body">
        <header>
          <pre>{headerArt}</pre>
        </header>
        <Routes>
          <Route path={baseUrl + '/'} element={<Home />} exact />
          <Route path={baseUrl + '/about'} element={<About />} />
          <Route path={baseUrl + '/chat'} element={<SqlChat />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer>
          <hr />
          <MyNavbar />
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main>404: Return to sender. Address unknown.</main>;
}