import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Pricingcard from "../components/pricing-card"
import Portfoliocard from "../components/portfolio-card"
import { Container, Row, Col } from 'react-bootstrap'





export default function Portfolio() {
  return (
      <Layout>
        <Container>
              <Row>
                <Col>
                <Portfoliocard />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
              </Row>
        </Container>
    </Layout>
  )
}
