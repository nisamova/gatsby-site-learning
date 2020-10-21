import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { Form, Container, Row, Col, Button } from "react-bootstrap"

function Orderform() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1
              class="d-flex justify-content-center"
              style={{ "padding-top": "35px" }}
            >
              {" "}
              Order Here
            </h1>
            <hr
              style={{
                width: "20%",
                "border-width": "5px",
                "background-color": "#f4d9e9",
              }}
            ></hr>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Form
              name="Website Order"
              method="post"
              data-netlify="true"
              onSubmit="submit"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="Website Order" />
              <p hidden>
                <label>
                  {" "}
                  Do not fill this out: <input name="bot-field" />{" "}
                </label>
              </p>
              <Form.Row>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Name" name="name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="email" name="email" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formBasicHowdidyouhear">
                  <Form.Label>How did you hear about us?</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="..."
                    name="How did you hear about us"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formBasicDeliverytime">
                  <Form.Label>
                    When would you like your balloons delivered ?
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="..."
                    name="Delivery Time"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formBasicDeliveryplace">
                  <Form.Label>
                    Where would you like your balloons delivered ?
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="..."
                    name="Delivery Place"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="formBasicEventtime">
                  <Form.Label>
                    Event start time (We will coordinate delivery time based on
                    this)
                  </Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="..."
                    name="Event-Time"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="IndoorOutdoorEvent">
                  <Form.Label>Indoor or Outdoor Event ?</Form.Label>
                  <Form.Control as="select" name="Outdoor or Indoor">
                    <option> Choose One </option>
                    <option>Indoor Event </option>
                    <option>Outdoor Event </option>
                    <option> Both </option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="AboutOcasionColor">
                  <Form.Label>
                    Tell us about your special event! Color, theme, occasion.
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="..."
                    name="Event Info"
                    rows="6"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group>
                  <Button type="submit" variant="secondary" size="lg">
                    Submit
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Orderform
/**
 * name="website-order" method="post" data-netlify="true"
            data-netlify-honeypot="bot-field" >
 */
