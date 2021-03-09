import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

function Header() {
    return (
      <>
        <Navbar bg="danger" variant="dark">
          <Container className="p-2">
            <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} exact to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default Header;