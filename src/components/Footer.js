import React from "react"
import { Link } from "gatsby"
import { FaLeaf } from "react-icons/fa"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        ANAHATA
        <span>
          <FaLeaf />
        </span>
      </FooterDescription>

      <FooterLinkItems>
        <FooterLink to="/page-2">Work</FooterLink>
        <FooterLink to="/page-2">Stay</FooterLink>
        <FooterLink to="/page-2">Play</FooterLink>
        <FooterLink to="/page-2">About</FooterLink>
        <FooterLink to="/page-2">Contact</FooterLink>
      </FooterLinkItems>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background: #fafafb;
  color: #000;
  display: flex;
  justify-content: space-between;
  letter-spacing: 4px;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`

const FooterDescription = styled.div`
  align-self: center;
  letter-spacing: 4px;
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  span {
    margin-left: 5px;
    @media screen and (max-width: 400px) {
      margin: 10px 0 0 0;
      display: block;
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FooterLink = styled(Link)`
  border-bottom: 4px solid #fafafb;
  color: #3d3d4e;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 4px;
  margin-right: 2rem;
  padding: 10px;
  text-decoration: none;

  &:hover {
    border-bottom: 4px solid #e3cba3;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0.5rem;
  }
`
