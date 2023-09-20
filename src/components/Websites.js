import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React, { useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-image-1.png";
import projImg2 from "../assets/img/project-image-2.png";
import projImg3 from "../assets/img/project-image-3.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Websites = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

   // Detect user's preferred color scheme
   const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const projects = [

    {
      title: "Event Booking",
      description: "Seamless Event Booking: Your Gateway to Memorable Experiences.",
      imgUrl: projImg1,
    },
    {
      title: "Ecommerce",
      description: "Elevate Your Shopping Experience: Discover Our E-commerce Wonderland.",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Empowering Entrepreneurs: Launch Your Vision with Our Business Startup Support.",
      imgUrl: projImg2,
    },

  ];

  const styles = {
    projectModal: {
      position: 'fixed',
      top: '10%',
      left: '10%',
      right: '10%',
      bottom: '10%',
      backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalContent: {
      position: 'relative',
      backgroundColor: isDarkMode ? '#333' : 'white',
      color: isDarkMode ? 'white' : 'black',
      padding: '20px',
      borderRadius: '10px',
      width: '80%',
      height: '80%',
      overflow: 'auto'
    },
    exitButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: isDarkMode ? '#555' : 'red',
      color: isDarkMode ? '#ddd' : 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer'
    },
    projectImage: {
      width: '100%', // This will make the image take the full width of its container
      maxHeight: '60vh',
      objectFit: 'contain', // This ensures the image isn't stretched
      display: 'block', // This will remove any unwanted space below the image
      margin: '0 auto'
    }
  };
  


  return (
    <section className="websites" id="websites">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Templates</h2>
                  <p>Introducing the future of your website!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => handleProjectClick(project)}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Future websites to be added!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Future websites to be added!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {
        selectedProject && (
          <div style={styles.projectModal}>
            <div style={styles.modalContent}>
              <button onClick={handleClose} style={styles.exitButton}>Exit</button>
              <img src={selectedProject.imgUrl} alt={selectedProject.title} style={styles.projectImage} />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        )
      }
    </section>
  )


}


