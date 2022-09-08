import React from "react"
import styled from "styled-components"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import anahata from "../images/carousel/anahata.jpg"
import cacao from "../images/carousel/cacao.jpg"
import coworking from "../images/carousel/coworking.jpg"
import coworking2 from "../images/carousel/coworking2.jpg"
import hike from "../images/carousel/hike.jpg"
import market from "../images/carousel/market.jpg"
import nature from "../images/carousel/nature.jpg"
import ometepe from "../images/carousel/ometepe.jpg"
import sanjuan from "../images/carousel/sanjuan.jpg"
import surf1 from "../images/carousel/surf1.jpg"
import surf2 from "../images/carousel/surf2.jpg"
import surf3 from "../images/carousel/surf3.jpg"
import surf4 from "../images/carousel/surf4.jpg"
import yoga from "../images/carousel/yoga.jpg"

const Discover = ({ heading }) => {
  return (
    <DiscoverContainer>
      <DiscoverHeading>{heading}</DiscoverHeading>
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div>
          <img src={anahata} />
          <p className="legend">
            Sustainable jungle resort in the Emerald Coast of Nicaragua.
          </p>
        </div>
        <div>
          <img src={cacao} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={coworking} />
          <p className="legend">
            Tale your job on the road, make meaningful connections, experience
            the world.
          </p>
        </div>
        <div>
          <img src={coworking2} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={hike} />
          <p className="legend">Discover the Emerald Coast of Nicaragua.</p>
        </div>
        <div>
          <img src={market} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={nature} />
          <p className="legend">
            Surrounded by an amazing forest and all its wonders.
          </p>
        </div>
        <div>
          <img src={ometepe} />
          <p className="legend">
            Discover all the wonders that Nicaragua has to offer.
          </p>
        </div>
        <div>
          <img src={sanjuan} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={surf1} />
          <p className="legend">
            Two minutes walk from great surfbreaks; Playa Colorado and Panga
            Drops.
          </p>
        </div>
        <div>
          <img src={surf2} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={surf3} />
          <p className="legend">
            One of the best surf breaks in Central America.
          </p>
        </div>
        <div>
          <img src={surf4} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={yoga} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </DiscoverContainer>
  )
}

export default Discover

const DiscoverContainer = styled.div`
  background-color: #000;
  margin: 0 auto;
  min-height: 50vh;
  opacity: 0.7;
  padding: 2rem calc((100vw - 1100px) / 2);
  text-align: center;

  & .carousel-root {
    margin: 0 auto;
    width: 60vw;
    @media screen and (max-width: 400px) {
      width: 100vw;
    }
  }
`

const DiscoverHeading = styled.div`
  color: #fff;
  font-family: Lora;
  font-size: clamp(1rem, 4vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;

  @media screen and (max-width: 400px) {
    margin-bottom: 1rem;
  }
`
