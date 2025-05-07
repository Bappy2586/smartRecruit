import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaUserCircle, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa"; 

function Footer() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
            </Nav>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className='col-md-3'>
            <p className="me-2" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
              Smart <span style={{ color: 'red' }}>Recruit</span>
            </p>
            <p>
              Sign Up to Receive 10% Off <br />
              Your First Order<br />
              Discover new art and collections <br />
              added weekly by our curators.
            </p>
            <table className='table' style={{ color: 'white' }}>
              <tbody>
                <tr>
                  <td><a href=''><FaUserCircle size={28} color="#ff6666" /></a></td>
                  <td><a href=''><FaFacebook size={28} color="#ff6666" /></a></td>
                  <td><a href=''><FaYoutube size={28} color="#ff6666" /></a></td>
                  <td><a href=''><FaLinkedin size={28} color="#ff6666" /></a></td>
                  <td><a href=''><FaInstagram size={28} color="#ff6666" /></a></td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className='col-md-3'>
            <h4>Quick links</h4>
            <p>How to Buy art Returns Help<br />Center Gift Cart</p>
          </Col>
          <Col className='col-md-3'>
            <h4>For Workers</h4>
            <p>About HerNet fine Art Stories <br />The other Art Fair Sell <br />
              on HerNet fine Art Affiliate Program  <br />Careers Contact Support</p>
          </Col>
          <Col className='col-md-3'>
            <h4>Contact Us</h4>
            <p>Feel free to reach out to us for any inquiries. <br />We are here to assist you!</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Nav>
              <p>2025 Smart Requitment Agency. All right reserved</p>
            </Nav>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
