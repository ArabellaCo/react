import {
  Container,
  Row,
  Col,
  Nav,
  TabContainer,
  TabContent,
} from "react-bootstrap";
import converter from "../assets/img/converter.png";
import calculator from "../assets/img/calculator.svg";
import tree from "../assets/img/tree.png";
import flowers from "../assets/img/flower.png";
import games from "../assets/img/games.svg";
import team from "../assets/img/team.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

  return (
    <div>
      <section className="projects" id="projects">
        <Container>
          <Col size={12}>
            <Row>
              <TrackVisibility>
                <h2>My Projects</h2>
                <p>
                  These are the projects and homework that we did on Kodego.
                </p>

                {/* Flowers */}

                <div>
                  <Row size={12} sm={6} md={4}>
                    <div className="proj-image">
                      <img
                        className="img-project"
                        src={flowers}
                        alt="project for card"
                      />
                      <div className="proj-text">
                        <br />
                        <a href="https://bellasia.github.io/MiniProjectA/index.html">
                          <h4 className="Project-Button">Flowers</h4>
                        </a>
                        <div>
                          <TabContainer id="projects-tabs">
                            <Nav
                              variant="pills"
                              className="nav-pills mb-5 justify-content-center align-items-center"
                              id="pills-tab"
                            ></Nav>
                            <TabContent id="slideInUp"></TabContent>
                          </TabContainer>
                        </div>
                      </div>
                    </div>


                    {/* Games */}

                    <div className="proj-image">
                      <img
                        className="img-project"
                        src={games}
                        alt="project for card"
                      />
                      <div className="proj-text">
                        <br />
                        <a href="https://bellasia.github.io/Rock-Paper-Scissors/">
                          <h4 className="Project-Button"> Games </h4>
                        </a>
                        <div>
                          <TabContainer id="projects-tabs">
                            <Nav
                              variant="pills"
                              className="nav-pills mb-5 justify-content-center align-items-center"
                              id="pills-tab"
                            ></Nav>
                            <TabContent id="slideInUp"></TabContent>
                          </TabContainer>
                        </div>
                      </div>
                    </div>


                    {/* Converter */}
                    <div className="proj-image">
                      <img
                        className="img-project"
                        src={converter}
                        alt="project for card"
                      />
                      <div className="proj-text">
                        <br />
                        <a href="https://bellasia.github.io/temperature/">
                          <h4 className="Project-Button">Converter</h4>
                        </a>
                        <div>
                          <TabContainer id="projects-tabs">
                            <Nav
                              variant="pills"
                              className="nav-pills mb-5 justify-content-center align-items-center"
                              id="pills-tab"
                            ></Nav>
                            <TabContent id="slideInUp"></TabContent>
                          </TabContainer>
                        </div>
                      </div>
                    </div>

                    {/* Calculator */}

                    <div className="proj-image">
                      <img
                        className="img-project"
                        src={calculator}
                        alt="project for card"
                      />
                      <div className="proj-text">
                        <br />
                        <a href="https://bellasia.github.io/javaObject/">
                          <h4 className="Project-Button">Calculator</h4>
                        </a>
                        <div>
                          <TabContainer id="projects-tabs">
                            <Nav
                              variant="pills"
                              className="nav-pills mb-5 justify-content-center align-items-center"
                              id="pills-tab"
                            ></Nav>
                            <TabContent id="slideInUp"></TabContent>
                          </TabContainer>
                        </div>
                      </div>
                    </div>

                    {/* Christmas tree */}
                    <div className="proj-image">
                      <img
                        className="img-project"
                        src={tree}
                        alt="project for card"
                      />
                      <div className="proj-text">
                        <br />
                        <a href="https://bellasia.github.io/chirstmastree/">
                          <h4 className="Project-Button">Christmas Tree</h4>
                        </a>
                        <div>
                          <TabContainer id="projects-tabs">
                            <Nav
                              variant="pills"
                              className="nav-pills mb-5 justify-content-center align-items-center"
                              id="pills-tab"
                            ></Nav>
                            <TabContent id="slideInUp"></TabContent>
                          </TabContainer>
                        </div>
                      </div>
                    </div>

                    {/* group project */}
                    <div className="proj-image">
                      <img
                        className="img-project"
                        src={team}
                        alt="project for card"
                      />
                      <div className="proj-text">
                        <br />
                        <a href="https://vernaloqui.github.io/Farmer-sHubReact/">
                          <h4 className="Project-Button">Unity</h4>
                        </a>
                        <div>
                          <TabContainer id="projects-tabs">
                            <Nav
                              variant="pills"
                              className="nav-pills mb-5 justify-content-center align-items-center"
                              id="pills-tab"
                            ></Nav>
                            <TabContent id="slideInUp"></TabContent>
                          </TabContainer>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>

              </TrackVisibility>
            </Row>
          </Col>
        </Container>
      </section>
    </div>
  );
};
