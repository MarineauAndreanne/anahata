import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { FaLeaf } from "react-icons/fa"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">
        ANAHATA
        <span>
          <FaLeaf />
        </span>
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((menuData, index) => (
          <NavLink to={menuData.link} key={index}>
            {menuData.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavButton>
        <Button primary="true" round="true" to="/page-2">
          Book Now
        </Button>
      </NavButton>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1450px) / 2);
  position: relative;
  z-index: 100;
`

const NavLink = styled(Link)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 100%;
  letter-spacing: 4px;
  padding: 0 1rem;
  text-decoration: none;
  transition: all 200ms ease-in-out;

  span {
    margin-left: 5px;
  }
`
const Bars = styled(FaBars)`
  color: #fff;
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    font-size: 1.8rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 75%);
  }
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavButton = styled.div`
  align-items: center;
  display: flex;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
