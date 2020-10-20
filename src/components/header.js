import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap"
import {
  FaFacebook,
  FaInstagramSquare,
  FaEnvelope,
  FaPhoneSquareAlt,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query imagesForLogo {
      imagelogosquare: file(
        relativePath: { eq: "Party-Ambiance-square-logo.jpg" }
      ) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <div class="d-flex justify-content-end">
              <a href="https://www.facebook.com/party_ambiance-101522987907135">
                <span
                  style={{
                    color: "#4e2140",
                    "font-size": "18px",
                    "text-decoration": "none",
                    "margin-right": "1rem",
                  }}
                >
                  <FaFacebook />{" "}
                </span>
              </a>
              <a href="https://www.instagram.com/stories/party_ambiance/2412964182917360549/">
                <span
                  style={{
                    color: "#4e2140",
                    "font-size": "18px",
                    "text-decoration": "none",
                    "margin-right": "1rem",
                  }}
                >
                  <FaInstagramSquare />{" "}
                </span>
              </a>
              <a href="mailto:party.ambiance.omaha@gmail.com">
                <span
                  style={{
                    color: "#4e2140",
                    "font-size": "18px",
                    "text-decoration": "none",
                    "margin-right": "1rem",
                  }}
                >
                  <FaEnvelope />
                </span>
              </a>
              <a href="tel: 402-401-4343">
                <span
                  style={{
                    color: "#4e2140",
                    "font-size": "18px",
                    "text-decoration": "none",
                  }}
                >
                  <FaPhoneSquareAlt /> Phone: (402)-401-4343
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container style={{ "background-color": "#f4d9e9" }}>
        <Navbar expand="lg">
          <Navbar.Brand>
            {" "}
            <img
              src="Party-Ambiance-square-logo.jpg"
              width="150"
              height="150"
              alt="Party in Style"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link
                  to="/"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{
                    color: "#4e2140",
                    fontSize: "20px",
                    marginRight: `2rem`,
                  }}
                >
                  Home
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  to="/portfolio"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{
                    color: "#4e2140",
                    fontSize: "20px",
                    marginRight: `2rem`,
                  }}
                >
                  Portfolio
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/pricing"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{
                    color: "#4e2140",
                    fontSize: "20px",
                    marginRight: `2rem`,
                  }}
                >
                  Pricing
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  to="/orderform"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{
                    color: "#4e2140",
                    fontSize: "20px",
                    marginRight: `2rem`,
                  }}
                >
                  Order Here
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header

/**
 *      <Row>
          <Col>
          <Social />
          </Col>
        </Row>
 */

/**
   * Old Header Styling:
   * 
   * <Container style={{ "background-color": "#f4d9e9" }}>
        <Row sm={1} md={2} lg={2}>
          <Col>
            <Link to="/">
              <Img
                fluid={data.imagelogosquare.childImageSharp.fluid}
                alt="Party Ambiance Logo"
              />
            </Link>
          </Col>
          <Col>
            <ul
              style={{
                display: `inline-block`,
                "list-style-type": `none`,
                float: `right`,
                marginTop: `5rem`,
              }}
            >
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "20px" }}
                >
                  Home
                </Link>
              </li>
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/portfolio"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "20px" }}
                >
                  Portfolio
                </Link>
              </li>
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/pricing"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "20px" }}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
   */
