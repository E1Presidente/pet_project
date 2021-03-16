import {Container, Row, Col} from 'react-bootstrap';

function Error() {
  return (
    <>
      <Container className="pt-5">
        <Row className="justify-content-sm-center m-4">
          <Col md="auto"><h1>ERROR</h1></Col>
        </Row>
        <Row className="justify-content-sm-center m-4">
          <Col md="auto"><h3>No such page!</h3></Col>
        </Row>
      </Container>
    </>
  );
}

export default Error;
