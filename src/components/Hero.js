import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../videos/beach.mp4"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBackground>
      <HeroContent>
        <HeroItems>
          <HeroTitle>ADVENTURE AWAITS</HeroTitle>
          <HeroText>
            Sustainable Jungle Resort in the Emerald Coast of Nicaragua
          </HeroText>
          <Button primary="true" big="true" round="true" to="/page-2">
            Book Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  align-items: center;
  background: #0c0c0c;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin-top: -80px;
  padding: 0 1rem;
  position: relative;

  :before {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent 100%);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
`

const HeroBackground = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`

const VideoBackground = styled.video`
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  width: 100%;
`

const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  z-index: 3;
`

const HeroItems = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100vh;
  justify-content: center;
  line-height: 1.1;
  max-height: 100%;
  padding: 0;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`

const HeroText = styled.p`
  font-family: Lora;
  font-size: clamp(1rem, 2vw, 3rem);
  font-weight: 100;
  margin-bottom: 2rem;
`
