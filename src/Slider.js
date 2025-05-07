import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Sl1 from "./assets/india.png";
import Sl2 from "./assets/india2.png";
import Sl3 from "./assets/napal.png";
import Sl4 from "./assets/bangladesh.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  return (
    <Container fluid>
      <Row>

      <Col
  md={6}
  className="d-flex p-4" // Removed align-items-center
  style={{ height: '800px', width: '50%' }}
>
  <div style={{ textAlign: 'left', padding: '20px', marginTop: '30px' }}>
    <h1 style={{ fontWeight: 'bold' }}>
      The Future of<br />
      <span style={{ color: '#ff6666' }}>Recruitment</span> is Here
    </h1>

    <p>
      With deep expertise and scalable solutions, we redefine <br />
      recruitment. Our smart technology anticipates trends, while<br />
      strategic insights keep clients ahead in talent e.
    </p>

    <button
      style={{
        backgroundColor: '#ff6666',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        marginTop: '10px'
      }}
    >
    Browse Jobs
    </button>
  </div>
</Col>



      

        {/* Right section with carousel */}
        <Col md={6} className="p-0">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Sl1}
                alt="Slide 1"
                style={{ height: "800px", width: "50%", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>India</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Sl2}
                alt="Slide 2"
                style={{ height: "800px", width: "50%", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>India</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Sl3}
                alt="Slide 3"
                style={{ height: "800px", width: "50%", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Nepal</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={Sl4}
                alt="Slide 4"
                style={{ height: "800px", width: "50%", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h3>Bangladesh</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Slider;
