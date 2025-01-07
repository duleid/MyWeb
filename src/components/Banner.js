import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Development Enthusiast", "Finance & Accounting Analyst", "Cat Lover"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting && updatedText === '') {
      setDelta(200);
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
    } else if (!isDeleting && updatedText === fullText) {
      setDelta(period);
      setIsDeleting(true);
    } else {
      setDelta(120);
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                {/* <h1>Hi! I'm Daniel.</h1> */}
                <h1>Hi! I'm Daniel. <span className="txt-rotate" data-period="3000" data-rotate='[ "Web Developer", "Web Designer", "Finance & Accounting Analyst" ]'><span className="wrap">{text}</span></span></h1>              
                  <p>
                  As a web development enthusiast with a background in computer science, I have a deep passion for coding and a strong interest in driving cars and caring for cats. Alongside my role as a Finance & Accounting Analyst, I am currently honing my skills in React and actively seeking collaboration opportunities in the field of web development. With a strong foundation in both technical expertise and creative problem-solving, I am dedicated to delivering high-quality solutions that meet the needs of both businesses and users.
                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}

            </TrackVisibility>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
