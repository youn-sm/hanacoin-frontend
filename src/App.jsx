import './App.css'
import styled from 'styled-components'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { MenuBar } from './components/MenuBar'
import { MarketPlace } from './pages/MarketPlace'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Login } from './pages/Login'
import { useState } from 'react'
import {Register} from './pages/Register'
import { ProductUpload } from './pages/ProductUpload'



function AppWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  const [username, setUsername] = useState('')
  const [token, setToken] = useState('')

  const PageWrapper = styled.div`
    position: absolute;
    top: 8vh;
  `;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(isLoginPage || isRegisterPage) ? '0' : '20vw'};
  width: ${(isLoginPage || isRegisterPage) ? '100vw' : '80vw'};
  height: 92vh;
`;


  return (
    <>
      <Nav username={username}/>
      <PageWrapper>
  {(isLoginPage || isRegisterPage) ? null : <MenuBar />}
  <ContentWrapper>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/login" element={<Login setUsername={setUsername} setToken={setToken}/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/productupload" element={<ProductUpload/>}/>
    </Routes>
  </ContentWrapper>
</PageWrapper>

    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
