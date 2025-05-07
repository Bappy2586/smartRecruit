import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";

import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaCartPlus } from "react-icons/fa";
import testi1 from "./assets/test.png";
import "./Home.css";
import TestimonialSlider from "./component/Testimoniaslide";
import Demo from "./component/demo";
import blackImage from "./assets/Black.png";
import long from "./assets/long.png";
import long2 from "./assets/long2.png";
import labor3 from "./assets/labor3.png";
import moon from "./assets/moon.png";
import profile from "./assets/profile.png";
import watching from "./assets/watching.png";
import labour from "./assets/labour.png";
import black2 from "./assets/black2.png";
import deal from "./assets/deal.png";
import boat from "./assets/boat.png";


const Home = () => {
  return (
    <>
      <Slider />
      <div style={{ display: "show" }}>
        <div style={{ marginLeft: "20px", padding: "20px" }}>
          <div className="row" style={{ textAlign: "center" }}>


            <div className="col-md-12">
              <h1>
                Why choose smart Recruit?
              </h1>
              <p>
                We make hiring skilled workers Simple, Efficient <br />
                and Reliable
              </p>
            </div>



            <div className="col-md-4">
              <Card style={{ padding: '20px' }}>
                <h4>Global Talent Pool</h4>
                <div style={{ marginTop: '20px' }}></div>

                <p>Access a diverse pool of skilled
                  workers from Nepal, Bangladesh, India, the Philippines, and Europe.</p>
              </Card>
            </div>


            <div className="col-md-4">
              <Card style={{ padding: '20px' }}>
                <h4>Dedicated Employer Support</h4>
                <div style={{ marginTop: '20px' }}></div>

                <p>Our team offers personalized support, ensuring your
                  staffing needs are met with precision and care.</p>
              </Card>
            </div>





            <div className="col-md-4">
              <Card style={{ padding: '20px' }}>
                <h4>Tailored Recruitment</h4>
                <div style={{ marginTop: '20px' }}></div>

                <p>We customize our recruitment process to match
                  your specific industry requirements.</p>
              </Card>
            </div>




            <div style={{ marginTop: "30px" }}></div>




            <div className="col-md-4">
              <Card style={{ padding: '20px' }}>
                <h4>Seamless Process</h4>
                <div style={{ marginTop: '20px' }}></div>

                <p>Access a diverse pool of skilled
                  workers from Nepal, Bangladesh, India, the Philippines, and Europe.</p>
              </Card>
            </div>




            <div className="col-md-4">
              <Card style={{ padding: '20px' }}>
                <h4>Proven Success</h4>
                <div style={{ marginTop: '20px' }}></div>

                <p>With over 10,000 successful placements
                  and a 98% visa approval rate, we’re a trusted partner.</p>
              </Card>
            </div>





            <div className="col-md-4">
              <Card style={{ padding: '20px' }}>
                <h4>Worker Readiness</h4>
                <div style={{ marginTop: '20px' }}></div>

                <p>Our workers undergo rigorous training,
                  including language skills and cultural integration.</p>
              </Card>
            </div>


          </div>


          <div style={{ marginTop: "50px" }}></div>

          <div>
            <img
              src={blackImage}
              alt="Black"
              style={{ width: "100%", height: "auto" }} // This makes the image fill the container
            />
          </div>

          <div style={{ marginTop: "50px" }}></div>



          <div style={{ marginTop: "30px" }}></div>

          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="col-6 p-2 bd-highlight">
              <div style={{ marginTop: "80px,", textAlign: "left" }}></div>
              <h1 style={{ textAlign: "left" }}>About Smart Recruit</h1>
              <p style={{ textAlign: "left" }}>Smart Recruit links talent from Nepal, Bangladesh, and India to<br /> European jobs, empowering 10,000+ workers since 2020.We provide<br />
                training and support in hospitality, logistics, and healthcare.</p>
              <button
                style={{
                  backgroundColor: "#ff6666", // light red
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                  display: "block"
                }}
              >
                Learn More
              </button>
            </div>


            <div class="col-6 p-2 bd-highlight">
              <img
                src={labour} // Replace blackImage with your actual image path or variable
                alt="Description of the image" // Set a meaningful description for accessibility
                style={{ width: "100%", height: "400px" }} // Adjust width and height as needed
              />
            </div>

          </div>


          <div style={{ marginTop: "40px" }}></div>



          <div>
            <img
              src={black2}
              alt="black2"
              style={{ width: "100%", height: "500px" }} // This makes the image fill the container
            />
          </div>

          <div style={{ marginTop: "40px" }}></div>

          <div>
            <h1> Your Success Starts with Our<br />
              All-Inclusive Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt convallis vulputate.<br />
              Suspendisse dignissim urna efficitur magna
              consectetur ullamcorper.<br />
              Aenean elementum,  </p>

          </div>


          <div style={{ marginTop: "40px" }}></div>


          <div class="d-flex flex-row bd-highlight mb-3">

            <div class="col-6 p-2 bd-highlight">
              <img
                src={labor3} // Replace blackImage with your actual image path or variable
                alt="Description of the image" // Set a meaningful description for accessibility
                style={{ width: "100%", height: "400px" }} // Adjust width and height as needed
              />
            </div>

            <div class="col-6 p-2 bd-highlight">
              <div style={{ marginTop: "80px" }}></div>
              <h1 style={{ textAlign: "left", paddingLeft: "70px" }}>Recruitment</h1>

              <p style={{ textAlign: "left", paddingLeft: "70px" }}>Source skilled workers from third countries like Nepal, Bangladesh, <br />
                India, and the Philippines, or from Europe forfaster recruitment.<br />
                Source skilled workers from third countries like Nepal, Bangladesh, <br />
                India, and the Philippines, or from Europe for faster recruitment.</p>
            </div>

          </div>


          <div style={{ marginTop: "30px" }}></div>

          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="col-6 p-2 bd-highlight">
              <div style={{ marginTop: "80px" }}></div>
              <h1 style={{ textAlign: "left" }}>Temporary Staffing</h1>
              <p style={{ textAlign: "left" }}>Access flexible staffing solutions with our temporary workforce for
                seasonal or project-based needs.Access flexible staffing solutions
                with our temporary workforce for seasonal or project-based needs.</p>
            </div>

            <div class="col-6 p-2 bd-highlight">
              <img
                src={deal} // Replace blackImage with your actual image path or variable
                alt="Description of the image" // Set a meaningful description for accessibility
                style={{ width: "100%", height: "400px" }} // Adjust width and height as needed
              />
            </div>
          </div>


          <div style={{ marginTop: "30px" }}></div>



          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="col-6 p-2 bd-highlight">
              <img
                src={watching} // Replace blackImage with your actual image path or variable
                alt="Description of the image" // Set a meaningful description for accessibility
                style={{ width: "100%", height: "400px" }} // Adjust width and height as needed
              />
            </div>
            <div class="col-6 p-2 bd-highlight">
              <div style={{ marginTop: "80px" }}></div>
              <h1 style={{ textAlign: "left", marginLeft: "70px" }}>On-Spot Recruiting Fairs</h1>
              <p style={{ textAlign: "left", marginLeft: "70px" }}>Join our recruiting
                fairs in Qatar, Dubai, Saudi Arabia, and the<br /> Philippines to
                interview and hire workers on the spot.Join our<br /> recruiting fairs in
                Qatar, Dubai, Saudi Arabia,
                and the Philippines<br /> to interview and hire workers on the spot.</p>
            </div>


          </div>

          <div>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#fff", // White background
                color: "#", // Red text
                border: "2px solid red", // Red border
                borderRadius: "5px", // Optional: Rounded corners
                cursor: "pointer",
                fontWeight: "bold", // Optional: Bold text
              }}
            >
              Learn More
            </button>
          </div>

          <div style={{ marginTop: "80px" }}></div>

          <div style={{ backgroundColor: "black", color: "white" }} className="d-flex flex-row bd-highlight mb-3">
            <div className="col-6 p-2 bd-highlight">
              <div style={{ marginTop: "80px" }}></div>
              <h1 style={{ textAlign: "left", marginLeft: "70px" }}>Temporary Staffing</h1>
              <p style={{ textAlign: "left", marginLeft: "70px" }}>
                Access flexible staffing solutions with our temporary workforce for<br />
                seasonal or project-based needs. Access flexible staffing solutions<br />
                with our temporary workforce for seasonal or project-based<br /> needs.
              </p>
              <button
                style={{
                  backgroundColor: "#f28b82", // light red
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "block",        // makes alignment easier
                  marginLeft: "70px"          // aligns it to the left
                }}
              >
                Learn more
              </button>

            </div>
            <div className="col-6 p-2 bd-highlight" style={{ backgroundColor: "#2f4f4f", color: "white" }} >
              <img
                src={boat} // Replace blackImage with your actual image path or variable
                alt="Description of the image"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </div>

          <div style={{ marginTop: "40px" }}></div>
          <div>
            <h1>How we work</h1>
          </div>
          <div style={{ marginTop: "20px" }}></div>


          <div class="d-flex justify-content-center">
            <div class="p-2 bd-highlight"> <button
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                color: "black",
                border: "white",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Employer
            </button></div>
            <div class="p-2 bd-highlight"> <button
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                color: "black",
                border: "white",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Worker
            </button></div>
            <div class="p-2 bd-highlight"> <button
              style={{
                padding: "10px 20px",
                backgroundColor: "white",
                color: "black",
                border: "white",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Partner
            </button></div>
          </div>


          <div style={{ marginTop: "50px" }}></div>

          <div>
            <img
              src={long}
              alt="Black"
              style={{ width: "100%", height: "auto" }} // This makes the image fill the container
            />
          </div>

          <div class="d-flex justify-content-around">
            <div class="p-2 bd-highlight">
              <h3>Submit Details</h3>
              <p>Fill out a short form with your <br /> basic information.<br />
                Our team will contact you to <br /> guide you through the <br /> next steps.</p>
            </div>
            <div class="p-2 bd-highlight"><h3>Counseling</h3>
              <p>Join a friendly session <br />with our team to<br /> understand
                job options, <br />requirements, and how<br /> we can help you work<br />
                abroad.</p></div>
            <div class="p-2 bd-highlight"><h3>Submit CV</h3>
              <p>Share your updated CV <br />with us. We’ll review it <br />and prepare
                it for the<br /> companies looking for<br /> your skills.</p></div>
            <div class="p-2 bd-highlight"><h3>Company</h3>
              <p>We’ll match you with <br />job openings from <br />trusted European <br />employers
                that fit
                your qualifications.</p></div>
          </div>



          <div style={{ marginTop: "50px" }}></div>

          <div>
            <img
              src={long2}
              alt="Black"
              style={{ width: "100%", height: "auto" }} // This makes the image fill the container
            />
          </div>



          <div class="d-flex justify-content-around">
            <div class="p-2 bd-highlight">
              <p style={{ marginLeft: "80px" }}>Once selected, we’ll work <br />with the employer to secure<br />
                your work permit,
                so you're <br />officially ready to start the<br /> process.</p></div>
            <div class="p-2 bd-highlight">
              <p>After getting your permit,<br /> we’ll help you submit the <br />right
                documents to
                the <br />embassy or visa center for<br /> approval.</p></div>
            <div class="p-2 bd-highlight">
              <p>Once your visa is approved,<br /> we’ll assist with booking <br />your
                flight and make sure<br /> you’re welcomed upon <br />arrival.</p></div>
          </div>



          <div style={{ marginTop: "50px" }}></div>
          <div>
            <h1>Clients Feedback Corner</h1>
          </div>
          <div style={{ marginTop: "50px" }}></div>



          <div>
            <img
              src={profile}
              alt="profile"
              style={{ width: "100%", height: "auto" }} // This makes the image fill the container
            />
          </div>


          {/* 
const testimonials = [
  {
    name: "John Doe",
    title: "Co-Founder",
    companyLogo: "https://cdn.worldvectorlogo.com/logos/collato.svg", // Placeholder Collato logo
    description: "Smart Recruit made our hiring process seamless. Their support and guidance were outstanding.",
  },
  {
    name: "Alexandra Chetrus",
    title: "Co-Founder",
    companyLogo: "https://cdn.worldvectorlogo.com/logos/collato.svg",
    description: "We partnered with Smart Recruit to fill hospital roles. The workers were reliable and dedicated.",
  },
  {
    name: "Linia Melosky",
    title: "Co-Founder",
    companyLogo: "https://cdn.worldvectorlogo.com/logos/collato.svg",
    description: "I was impressed by the professionalism and dedication the Smart Recruit team showed.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      {testimonials.map((t, index) => (
        <div key={index} className="testimonial-card">
          <div className="image-wrapper">
            <img src={profileImage} alt={t.name} className="profile-img" />
            <div className="play-button">▶</div>
          </div>
          <h3>{t.name}</h3>
          <p className="title">{t.title}</p>
          <img src={t.companyLogo} alt="Company logo" className="company-logo" />
          <p className="description">{t.description}</p>
        </div>
      ))}
    </div>
  );
}; */}



          <div style={{ marginTop: "50px" }}></div>

          <div>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div style={{ marginTop: "50px" }}></div>



          <div>
            <div class="d-flex justify-content-between">
              <div class="p-2"><div className="dropdown">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
                  >
                    What does Smart Recruit do?
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    style={{ backgroundColor: 'white' }}
                  >
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                    <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                  </div>

                </div>
              </div>
              </div>
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                What industries does Smart Recruit serve?
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex justify-content-between">
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                Dropdown button
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div></div>
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                How can Smart Recruit help my business hire workers?
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div></div>
            </div>
          </div>

          <div>
            <div class="d-flex justify-content-between">
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                How does Smart Recruit ensure ethical recruitment practices?
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div></div>
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                What kind of support do workers receive from Smart Recruit?
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div></div>
            </div>
          </div>

          <div>
            <div class="d-flex justify-content-between">
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                How does your company improve business recruitment?
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div></div>
              <div class="p-2"><button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc' }}
              >
                How can my agency partner with Smart Recruit?
              </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ backgroundColor: 'white' }}
                >
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Another action</a>
                  <a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a>
                </div></div>
            </div>
          </div>




        </div>
      </div>
    </>
  );
};

export default Home;
