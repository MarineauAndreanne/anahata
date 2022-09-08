import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "transparent" : "#e3cba3")};
  border: 4px solid #e3cba3;
  border-radius: 1px;
  color: ${({ primary }) => (primary ? "#e3cba3" : "#fff")};
  cursor: pointer;
  display: inline-block;
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  min-width: 100px;
  padding: ${({ big }) => (big ? "24px" : "10px")};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s ease 0s;
  white-space: nowrap;
  z-index: 1;

  &:hover {
    background: ${({ primary }) => (primary ? "#e3cba3" : "transparent")};
    border-color: #e3cba3;
    color: #fff;
    transition: all 0.4s ease 0s;
  }
`
