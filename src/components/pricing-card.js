import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {FaRegCheckSquare} from 'react-icons/fa'

/**import { FaFacebook, FaInstagramSquare, FaEnvelope, FaPhoneSquareAlt} from 'react-icons/fa'*/




function Pricingcard() {
  const data = useStaticQuery(graphql`
  query Images {
    imageballoonwall: file(relativePath: { eq: "balloon-wall-arrangement-party.jpg"}) {
      id 
      childImageSharp {
        fluid (maxWidth:300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageballoongarland: file(relativePath: { eq: "garland-gold-pink-birthday-balloon-design.jpg"}) {
      id 
      childImageSharp {
        fluid (maxWidth:300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageballoonbouque: file(relativePath: { eq: "bouque-balloon-arrangements.jpg"}) {
      id 
      childImageSharp {
        fluid (maxWidth:300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imagebaloonlogopink: file(relativePath: { eq: "balloon-logo-transparent c.png" }) {
      id
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return (
    <section style={{color:'#4e2140'}}>
<Container>
<Row>
            <Col>
            <h1 class="d-flex justify-content-center" style={{'padding-top': '35px'}}> Pricing</h1>
            <hr style={{'width':'20%', 'border-width':'5px', 'background-color':'#f4d9e9'}}></hr>
              </Col>
              </Row>
  <Row sm={1} lg md={3}>
    <Col md={4}>
      <Card>
        <Card.Body>
    <Img fluid={data.imageballoonwall.childImageSharp.fluid} alt="Garland" />
      <Card.Title className="mt-3">
        Balloon Wall
      </Card.Title>
      <Card.Text>
        Starting at <span style={{'font-size':'20px', 'color':'#4e2140'}}> $250</span>
      </Card.Text>
    </Card.Body>
    </Card>
    <hr></hr>  
    </Col>
    <Col md={4}>
    <Card>
        <Card.Body>
    <Img fluid={data.imageballoongarland.childImageSharp.fluid} alt="Garland" />
    <Card.Title className="mt-3">
        Balloon Garland
      </Card.Title>
      <Card.Text>
        Starting at <span style={{'font-size':'20px', 'color':'#4e2140'}}>$125 </span>
      </Card.Text>
    </Card.Body>
    </Card>
    <hr></hr>  
    </Col>
    <Col md={4}>
    <Card>
        <Card.Body>
    <Img fluid={data.imageballoonbouque.childImageSharp.fluid} alt="Garland" />
    <Card.Title className="mt-3">
        Balloon Bouquet
      </Card.Title>
      <Card.Text>
        Starting at <span style={{'font-size':'20px', 'color':'#4e2140'}}>$100 </span>
      </Card.Text>
    </Card.Body>
    </Card>
    <hr></hr>  
    </Col>
  </Row>
  </Container>
  <hr style={{'width':'20%', 'border-width':'5px', 'background-color':'#f4d9e9'}}></hr> 
  <Container>
    <Row>
    <Col>
    <hr></hr>  
    <Card>
      <Card.Title>
    <h1 class="d-flex justify-content-center" style={{'padding-top':'10px'}}> <Img fixed={data.imagebaloonlogopink.childImageSharp.fixed}
      alt="Balloon Logo Brand" /> For Special Orders <Img fixed={data.imagebaloonlogopink.childImageSharp.fixed}
      alt="Balloon Logo Brand" /></h1>
      </Card.Title>
      <Card.Body>
        <h2 class="d-flex justify-content-center" style={{'font-size':'22px'}}>We create, style and install balloon decorations for ALL occasions</h2>

        
        <h3 class="d-flex justify-content-center" style={{'font-size':'18px'}}> <FaRegCheckSquare /> Birthdays </h3>
        <h4 class="d-flex justify-content-center" style={{'font-size':'18px'}}><FaRegCheckSquare /> Baby Showers </h4>
        <h5 class="d-flex justify-content-center" style={{'font-size':'18px'}}><FaRegCheckSquare /> Bridal Showers </h5>
        <h6 class="d-flex justify-content-center" style={{'font-size':'18px'}}> <FaRegCheckSquare /> Corporate Events </h6>
        <h6 class="d-flex justify-content-center" style={{'font-size':'18px'}}> <FaRegCheckSquare />Private Events</h6>

        <p class="d-flex justify-content-center">Contact us for more details.</p>
      </Card.Body>
      </Card>
      <hr></hr>  
    </Col>
    </Row>
    </Container>      
    </section>
  )
}
  
  export default Pricingcard


/**
 *  <section class="d-flex justify-content-center">
            <a href="tel: 402-401-4343">
           <span style={{color: '#4e2140','font-size':'24px','text-decoration':'none','margin-right':'1rem'}}>< FaPhoneSquareAlt /></span>
            </a> 
            <a href="mailto:party.ambiance.omaha@gmail.com"> 
            <span style={{color: '#4e2140','font-size':'24px','padding-right':'1rem'}}>< FaEnvelope /> </span>
            </a>
            </section>
 */