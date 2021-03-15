import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {useRef} from 'react';

function Header() {
  const nodeRef = useRef(null);
  // nodeRef={nodeRef}

  return (
    <>
      <Navbar bg="danger" variant="dark" expand="sm">
        <Container className="p-2">
          <Navbar.Brand as={NavLink} to="/">Great Leader App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} exact to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} exact to="/weather">Weather</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;