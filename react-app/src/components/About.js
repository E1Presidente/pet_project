import {Container, Row, Col} from 'react-bootstrap';

function About() {
  return (
    <>
      <Container className="p-3">
        <Row className="justify-content-md-left">
          <Col md="auto" className="p-5">
            <p>This app contains parting words of the great leader of all Korea, Kim Jong-un.</p>
            <p>The main goal is to demonstrate the greatness of our leaders and inspire the working people for new exploits.</p>
            <p>Also, here you can see the weather in Pyongyang &#128513;.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
