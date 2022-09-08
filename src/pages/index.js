import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Discover from "../components/Discover"
import About from "../components/About"
import Email from "../components/Email"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Anahata Nicaragua" />
    <Hero />
    <Discover heading="Discover the Anahata State of Mind" />
    <About />
    <Email />
    <Footer />
  </Layout>
)

export default IndexPage
