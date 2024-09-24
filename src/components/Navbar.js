// function MyNavbar({authenticated, onLogout}) {
//     let navAuthenticated = getAuthenticated()
  
//     React.useEffect(() => {
//       navAuthenticated = getAuthenticated()
//       async function loadUsername() {
//         let userNameSpan = document.getElementById('userNameSpan')
//         userNameSpan.innerText = await getUsername()
//     }
//       let userName = loadUsername()
//       console.log("Username: " + userName)
//     })
  
//     function handleLogout() {
//       onLogout()
//     }
  
//     async function restartGame() {
//       console.log("In restart game")
//       let userName = document.getElementById('userNameSpan').innerText
//       let response = await fetch('/api/auth/restart?userName=' + userName, {
//         method: 'DELETE'
//       })
//       location.reload()
//     }
    
//     async function handleSave() {
//       if(authenticated) {
//         saveGame();
//       } else {
//         window.location.href = '/login';
//       }
//     }
  
//     return (
//       <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
//         <Container>
//           <Navbar.Brand href="#">
//             <img
//               src="./xorm1.png"
//               alt=""
//               width="30"
//               height="24"
//               className="d-inline-block align-text-top"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarNav" />
//           <Navbar.Collapse id="navbarNav">
//             <Nav className="mr-auto">
//             <NavLink className='nav-link' to='/'>Play</NavLink>
//               <NavLink className='nav-link loginButton' style={{display: authenticated ? 'none' : 'block'}} to='login'>Login</NavLink>
//               <Nav.Link id="logoutButton" style={{display: authenticated ? 'block' : 'none'}}  onClick={() => handleLogout()}>Logout</Nav.Link>
//               <NavLink className='nav-link' to='about'>About</NavLink>
//               <Nav.Link href="https://github.com/greyxr/startup">GitHub</Nav.Link>
//               <Nav.Link onClick={() => handleSave()}>Save</Nav.Link>
//               <Nav.Link onClick={() => {
//                 restartGame()
//               }}>Restart</Nav.Link>
//               <Nav.Link id="userCount" disabled>
//                 currently logged in as <span id="userNameSpan"></span>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   };