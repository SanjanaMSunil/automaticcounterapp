import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar className="head" style={{backgroundColor:"purple"}}>
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://cdn.dribbble.com/users/79396/screenshots/3175195/counter.gif"
          width="60"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Automatic Counter
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header