import {Navbar, Container} from 'react-bootstrap';

function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="danger" variant="dark">
        <Container className="p-2">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>©Copyright 2021 North Korea. All Rights Reserved</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
