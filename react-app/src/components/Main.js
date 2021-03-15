import {useState, useRef} from 'react';
import {Container, Button, Fade, Row, Col, Spinner} from 'react-bootstrap';

function Main() {
  const buttonOriginal = 'Get qoute of great leader!';
  const buttonNew = 'Push to get another quote';

  const [quoteButton, setQuoteButton] = useState(false);
  const [quoteStyle, setQuoteStyle] = useState('outline-primary');
  const [quoteText, setQuoteText] = useState(buttonOriginal);
  const [quoteFetch, setQuoteFetch] = useState(false);
  //findDOMNode error in StrictMode without this ref
  const nodeRef = useRef(null);

  const buttonHandler = () => {
    if (quoteButton === false) setQuoteButton(true);
    if (quoteStyle === 'outline-primary') setQuoteStyle('primary');
    if (quoteText === buttonOriginal) setQuoteText(buttonNew);
    setQuoteFetch(false);
    getQuote();
  };

  const getQuote = () => {
    fetch('http://localhost:3500/quotes')
      .then(response => response.json())
      .then(data => setQuoteFetch(data.quote))
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
      <Fade nodeRef={nodeRef} in={quoteButton}>
        <Container id="example-fade-text">
          <Row className="justify-content-md-center">
            <Col md="auto" className="p-3">
              {quoteFetch === false ? <Spinner animation="border" variant="primary" /> : <h4>{quoteFetch}</h4>}
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
}

export default Main;
