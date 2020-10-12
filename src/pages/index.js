import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/style.scss"
import Portfoliocard from "../components/portfolio-card"
import Pricingcard from "../components/pricing-card"
import { FaRegCheckSquare } from "react-icons/fa"
import SEO from "../components/seo"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Party Ambiance Omaha" />
      <Container>
        <Row>
          <Col>
            <Img
              fluid={data.headerImagetwo.childImageSharp.fluid}
              alt="Celebrate in Style"
            />
            <hr></hr>
          </Col>
        </Row>
      </Container>
      <Container>
        <section
          style={{ "background-color": "#f3f2f2", "padding-bottom": "4rem" }}
        >
          <Row sm={1} md={2} lg={2}>
            <Col>
              <span
                class="d-flex justify-content-center"
                style={{
                  color: "#4e2140",
                  "font-size": "24px",
                  "padding-bottom": "1rem",
                  "padding-top": "4rem",
                }}
              >
                <FaRegCheckSquare />{" "}
              </span>
              <h5
                class="d-flex justify-content-center"
                class="d-flex justify-content-center"
                style={{ "padding-bottom": "1rem" }}
              >
                Organic Balloon Garlands
              </h5>
              <hr
                style={{
                  width: "20%",
                  "border-width": "5px",
                  "background-color": "#f4d9e9",
                }}
              ></hr>
            </Col>

            <Col>
              <span
                class="d-flex justify-content-center"
                style={{
                  color: "#4e2140",
                  "font-size": "24px",
                  "padding-bottom": "1rem",
                  "padding-top": "4rem",
                }}
              >
                <FaRegCheckSquare />{" "}
              </span>
              <h5
                class="d-flex justify-content-center"
                class="d-flex justify-content-center"
                style={{ "padding-bottom": "1rem" }}
              >
                Balloon Walls
              </h5>
              <hr
                style={{
                  width: "20%",
                  "border-width": "5px",
                  "background-color": "#f4d9e9",
                }}
              ></hr>
            </Col>

            <Col>
              <span
                class="d-flex justify-content-center"
                style={{
                  color: "#4e2140",
                  "font-size": "24px",
                  "padding-bottom": "1rem",
                  "padding-top": "4rem",
                }}
              >
                <FaRegCheckSquare />{" "}
              </span>
              <h5
                class="d-flex justify-content-center"
                style={{ "padding-bottom": "1rem" }}
              >
                {" "}
                Balloon Bouquets
              </h5>
              <hr
                style={{
                  width: "20%",
                  "border-width": "5px",
                  "background-color": "#f4d9e9",
                }}
              ></hr>
            </Col>

            <Col>
              <span
                class="d-flex justify-content-center"
                style={{
                  color: "#4e2140",
                  "font-size": "24px",
                  "padding-bottom": "1rem",
                  "padding-top": "4rem",
                }}
              >
                <FaRegCheckSquare />{" "}
              </span>
              <h5
                class="d-flex justify-content-center"
                style={{ "padding-bottom": "1rem" }}
              >
                Personalized balloons and more
              </h5>
              <hr
                style={{
                  width: "20%",
                  "border-width": "5px",
                  "background-color": "#f4d9e9",
                }}
              ></hr>
            </Col>
          </Row>
        </section>
        <hr></hr>
      </Container>
      <section>
        <Pricingcard />
        <Portfoliocard />
        <hr
          style={{
            width: "20%",
            "border-width": "5px",
            "background-color": "#f4d9e9",
          }}
        ></hr>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    headerImagetwo: file(
      relativePath: { eq: "Hiro-Image-Party_Ambiance-Omaha.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
/** 
 *  <Col lg md={10} className="justify-content-md-center">
       <div style={{'text-align': 'center'}}><Img fixed={data.brandImage.childImageSharp.fixed}
      alt="Balloon Logo Brand" /></div>
        <h2 style={{'text-align': 'center'}}>Welcome to Party Ambiance</h2>
        </Col>
 */
