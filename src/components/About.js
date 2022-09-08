import React from "react"
import styled from "styled-components"
import { aboutData } from "../data/AboutData"

const About = () => {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <Wrapper>
        {aboutData.map((item, index) => {
          return (
            <AboutBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </AboutBox>
          )
        })}
      </Wrapper>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem calc((100vw - 1100px) / 2);
  width: 100%;
`

const Heading = styled.div`
  font-family: Lora;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 2rem;
  padding: 0 2rem;
  text-align: start;
`

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }
`

const AboutBox = styled.div`
  height: 100%;
  padding: 2rem;
  width: 100%;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`

const Title = styled.p`
  font-family: Lora;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
`

const Description = styled.div`
  font-size: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 0.5rem;
  }
`
