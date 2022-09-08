import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Sorry</h1>
    <p>Site under construction</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
