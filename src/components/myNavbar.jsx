import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
      const baseUrl = '/simple-chat-frontend'
      let navAuthenticated = true
      let authenticated = true
    
      function handleLogout() {
        console.log('logged out')
      }

      function handleLogin() {
        console.log('logged in')
      }
    
      async function restartGame() {
        console.log("In restart game")
        // let userName = document.getElementById('userNameSpan').innerText
        // let response = await fetch('/api/auth/restart?userName=' + userName, {
        //   method: 'DELETE'
        // })
        location.reload()
      }
      
      async function handleSave() {
        // if(authenticated) {
        //   saveGame();
        // } else {
        //   window.location.href = '/login';
        // }
      }
    return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand href={baseUrl}>
          <img
            src="./xorm1.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
          <NavLink className='nav-link' to={baseUrl}>Home</NavLink>
            <NavLink className='nav-link loginButton' style={{display: authenticated ? 'none' : 'block'}} to='login'>Login</NavLink>
            <Nav.Link id="logoutButton" style={{display: authenticated ? 'block' : 'none'}}  onClick={() => handleLogout()}>Logout</Nav.Link>
            <NavLink className='nav-link' to={baseUrl + '/about'}>About</NavLink>
            <NavLink className='nav-link' to={baseUrl + '/chat'}>SQL Chat</NavLink>
            <Nav.Link href="https://github.com/greyxr/startup">GitHub</Nav.Link>
            <Nav.Link onClick={() => handleSave()}>Save</Nav.Link>
            <Nav.Link onClick={() => {
              restartGame()
            }}>Restart</Nav.Link>
            <Nav.Link id="userCount" disabled>
              currently logged in as <span id="userNameSpan"></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { MyNavbar }