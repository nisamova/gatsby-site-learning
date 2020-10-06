import React from "react"
import Layout from "../components/layout"
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
