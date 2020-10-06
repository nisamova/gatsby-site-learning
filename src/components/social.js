import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagramSquare} from 'react-icons/fa'



const Social = () => {
        return (
        <Container>
          <Row>
            <Col>
            <hr style={{'width':'100%', 'border-width':'5px'}}></hr>
            </Col>
            <Col>
            <div class="d-flex justify-content-center" style={{'padding-top':'10px', 'padding-bottom':'10px'}}>
            <a href="https://www.facebook.com/party_ambiance-101522987907135"> 
            <span style={{color: '#4e2140','font-size':'24px','padding-right':'1rem'}}><FaFacebook /> </span>
            </a> 
            <a href="https://www.instagram.com/stories/party_ambiance/2412964182917360549/"> 
            <span style={{color: '#4e2140','font-size':'24px','padding-right':'1rem'}}>< FaInstagramSquare /> </span>
            </a>  
            </div>
            </Col>
            <Col>
            <hr style={{'width':'100%', 'border-width':'5px'}}></hr>
            </Col>
            </Row>
            </Container>

        
    
  )
}

export default Social
/**
 * {{'padding-top': '20px', 'padding-bottom': '20px'}}
 */
