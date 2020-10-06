import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



function Portfoliocard() {
  const data = useStaticQuery(graphql`
  query imagesAndImages {
    imageballoonwall: file(relativePath: { eq: "large-balloon-wall-gold-pink.jpg"}) {
      id 
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageballoongarland: file(relativePath: { eq: "Party-Ambiance-square-logo.jpg"}) {
      id 
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageballoonbouque: file(relativePath: { eq: "party-ambiance-balloon-design.jpg"}) {
      id 
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageBirthdayballoons: file(relativePath: { eq: "40th-birthday-balloon-deco.jpg"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagegraduationbaloon: file(relativePath: { eq: "graduation-2020-balloon-towers.jpg"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageGenderreveal: file(relativePath: { eq: "gender-reveal-party.jpg"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagesquarelogo: file(relativePath: { eq: "pink-logo-balloon-2.png"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSuperhero: file(relativePath: { eq: "super-hero-balloon-design.jpg"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSteamtheme: file(relativePath: { eq: "stem-theme-balloon-design.jpg"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSweetsixteen: file(relativePath: { eq: "sweet-sixteen-balloon-bouque.png"}) {
        id 
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagePrincesbirthday: file(relativePath: { eq: "princes-birthday-balloon-bouque.jpg"}) {
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
<Row >
            <Col>
            <h1 class="d-flex justify-content-center" style={{'padding-top': '35px', }}> Portfolio</h1>
            <hr style={{'width':'20%', 'border-width':'5px', 'background-color':'#f4d9e9'}}></hr>
              </Col>
              </Row>
  <Row>
    <Col md={4}>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imageballoonwall.childImageSharp.fluid} alt="Balloon Wall Arangement" />
    </p>
    </Col>
    <Col md={4}>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imageballoongarland.childImageSharp.fluid} alt="Balloon Garland Decorations" />
    </p>
    </Col>
    <Col md={4}>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imageballoonbouque.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" />
    </p>
    </Col>
  </Row>


  <Row>
          <Col md={6}>
          <p style={{'padding-top':'30px'}}> 
        <Img fluid={data.imageGenderreveal.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" /></p>
          </Col>
          <Col md={6}>
          <p style={{'padding-top':'30px'}}> 
            <Img fluid={data.imagegraduationbaloon.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" /></p>
            </Col>
      </Row>

    
  <Row>
    <Col md={4}>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imageSuperhero.childImageSharp.fluid} alt="Pink and White Balloon Wall Arangement" />
    </p>
    </Col>
    <Col md={4}>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imagesquarelogo.childImageSharp.fluid} alt="Party Ambiance Square Logo" />
    </p>
    </Col>
    <Col md={4}>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imageSteamtheme.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" />
    </p>
    </Col>
  </Row>
  <Row sm={1} lg md={3}>
    <Col>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imagePrincesbirthday.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" /></p>
    </Col>
    <Col xs={5}>
    <p style={{'padding-top':'30px'}}>
      <Img fluid={data.imageBirthdayballoons.childImageSharp.fluid} alt="Balloons 40th Birthday Party celebration" />
    </p>
    </Col>
    <Col>
    <p style={{'padding-top':'30px'}}> 
    <Img fluid={data.imageSweetsixteen.childImageSharp.fluid} alt="Balloon Bouque Birthday Party" /></p>
    </Col>
  </Row>

    </Container>      
    </section>
  )
}
  
  export default Portfoliocard


