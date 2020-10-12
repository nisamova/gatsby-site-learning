import React from "react"
import { Link } from "gatsby"
import SEO from "./seo"

import "../styles/style.scss"
import { Container, Row, Col } from "react-bootstrap"
import {
  FaFacebook,
  FaInstagramSquare,
  FaEnvelope,
  FaPhoneSquareAlt,
} from "react-icons/fa"

const Header = () => {
  return (
    <header>
      <SEO />
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
        <Row sm={1} md={2} lg={2}>
          <Col>
            <Link to="/">
              <img
                src="Party-Ambiance-square-logo.jpg"
                width="150"
                height="150"
                alt="Party in Style"
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
