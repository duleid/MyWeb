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
  const toRotate = ["Business & Data Analyst", "Cat Lover", "Car Enthusiast"];
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
                <h1>Hi! I'm Daniel.</h1>
                <h2><span className="txt-rotate" data-period="3000" data-rotate='[ "Busines & Data Analyst" ]'><span className="wrap">{text}</span></span></h2>              
                  <p style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', padding: '10px', borderRadius: '5px' }}>
                  As a business and data analyst with a background in computer science, I combine technical expertise with creative problem-solving to deliver impactful insights and solutions. Beyond my professional role, I am passionate about coding, driving, and caring for cats. Currently, I am enhancing my skills in interactive data visualization and BI dashboard development, while seeking opportunities to collaborate on innovative data analysis projects. My dedication to quality and user-focused solutions drives me to continuously refine my knowledge and contribute meaningfully to transforming data into actionable insights.
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
