import {useState} from 'react';
import {Container, Button, Fade, Row, Col} from 'react-bootstrap';

function Main() {
  const [quoteButton, setQuoteButton] = useState(false);
  const [quoteStyle, setQuoteStyle] = useState('outline-primary');
  const [quoteText, setQuoteText] = useState('Get qoute of great leader!');

  const buttonHandler = () => {
    setQuoteButton(!quoteButton);
    quoteStyle === 'outline-primary' ? setQuoteStyle('primary') : setQuoteStyle('outline-primary');
    quoteText === 'Get qoute of great leader!' ? setQuoteText('Push to get another quote') : setQuoteText('Get qoute of great leader!');
  };

  return (
    <>
      <Container className="p-5">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button className="justify-content-md-center"
              variant={quoteStyle} 
              onClick={buttonHandler} 
              aria-controls="example-fade-text" 
              aria-expanded={quoteButton}
              size="lg">
              {quoteText}
            </Button>
          </Col>
        </Row>
      </Container>
      <Fade in={quoteButton}>
        <Container id="example-fade-text">
          <Row className="justify-content-md-center">
            <Col md="auto" className="p-3">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
}

export default Main;
