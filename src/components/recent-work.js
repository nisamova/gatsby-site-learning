import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


function Recentwork() {
    const data = useStaticQuery(graphql`
    query imagesAndImages {
        imagehalloweenballoons: file(relativePath: { eq: "halloween-party-balloons.jpg"}) {
          id 
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imagecolorbliss: file(relativePath: { eq: "color-bliss-ballon-decoration.jpg"}) {
          id 
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imagePastelcolors: file(relativePath: { eq: "pastel-colors-balloon-garland.jpg"}) {
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
      <section >
  <Container>
  <Row>
            <Col md={6}>
            <p style={{'padding-top':'30px'}}> 
          <Img fluid={data.imagehalloweenballoons.childImageSharp.fluid} alt="Halloowen Theme Party Balloons" /></p>
            </Col>
            <Col md={6}>
            <p style={{'padding-top':'30px'}}> 
              <Img fluid={data.imagecolorbliss.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" /></p>
              </Col>
        </Row>
</Container>      
      </section>
    )
  }
    
    export default Recentwork
  
  
  