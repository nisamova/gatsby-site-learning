import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Social from "../components/social"
import { Link } from "gatsby"
import { FaMapMarkerAlt } from "react-icons/fa"

export default function About({ data }) {
  return (
    <footer
      style={{
        background: "#f4d9e9",
        color: "#7b7d7e",
        "text-align": "center",
        "padding-top": "20px",
        "padding-bottom": "20px",
      }}
    >
      <Container>
        <Row>
          <Col>
            <figure>
              <Link to="/">
                <img
                  src="/circle-logo.png"
                  width="220"
                  height="220"
                  alt="Party in Style"
                />
              </Link>
            </figure>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ul
              style={{
                display: `inline-block`,
                "list-style-type": `none`,
                marginBottom: "20px",
              }}
            >
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "18px" }}
                >
                  Home
                </Link>
              </li>
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/portfolio"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "18px" }}
                >
                  Portfolio
                </Link>
              </li>
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/pricing"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "18px" }}
                >
                  Pricing
                </Link>
              </li>
              <li style={{ display: `inline`, marginRight: `2rem` }}>
                <Link
                  to="/orderform"
                  activeStyle={{ color: "#7b7d7e" }}
                  style={{ color: "#4e2140", fontSize: "18px" }}
                >
                  Order Here
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <span style={{ "font-size": "22px" }}>
                {" "}
                <FaMapMarkerAlt />
              </span>{" "}
              Omaha, Nebraska
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            © {new Date().getFullYear()} Party Ambiance, All Rights Reserved
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>Designed by Paisley Creative</Col>
        </Row>
        <Row>
          <Col>
            <Social />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
