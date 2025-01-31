import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';


export const Projects = () => {
  const projects1 = [
    {
      title: "Sales Order Dashboard",
      description: "Track sales orders by produts, customers and time",
      imgUrl: projImg4,
      linkUrl: ""
    },

    {
      title: "Products Sales Dashboard",
      description: "All products sales by financial period",
      imgUrl: projImg5,
      linkUrl: ""
    },
  ];

  const projects2 = [
    {
      title: "Financial Analysis",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "https://danieldu22.github.io/"
    },
  ];

  const projects3 = [
    {
      title: "Responsive Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "https://duleid2.github.io/"  
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl:"https://danieldu22.github.io/"
    },
    {
      title: "Flappy bird",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl:"https://duleid3.github.io/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The web projects are developed using open source technologies, and we proudly support the open source community. Long live open source - 开源万岁!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Business Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Financial Analysis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Frontend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
