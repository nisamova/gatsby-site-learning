import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Pricingcard from "../components/pricing-card"
import { Container, Row, Col } from 'react-bootstrap'
import Social from "../components/social"


export default function Pricing() {
  return (
      <Layout>
       <Pricingcard />
    </Layout>
  )
}