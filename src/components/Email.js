import React from "react"
import styled from "styled-components"
import { Button } from "../components/Button"

import jungle from "../images/jungle.jpg"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>GET IN TOUCH</h1>
        <p>We're looking forward to meeting you</p>
        <form action="#">
          <FormWrap>
            <input inputType="text" placeholder="Your name" id="name" />
            <input inputType="email" placeholder="Your email" id="email" />
            <textarea
              placeholder="Message"
              className="message"
              name="message"
            ></textarea>
            <Button
              as="button"
              type="submit"
              // primary="true"
              round="true"
              css={`
                @media screen and (min-width: 768px) {
                  min-width: 450px;
                }
                @media screen and (max-width: 768px) {
                  width: 100%;
                  min-width: 350px;
                }
                @media screen and (max-width: 400px) {
                  width: 100%;
                  min-width: 250px;
                }
              `}
            >
              Send Message
            </Button>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${jungle}) no-repeat center;
  background-size: cover;
  height: 600px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    color: #e3cba3;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
    font-weight: 100;
    font-family: Lora;
  }

  form {
    width: 100%;
    margin: 0 auto;
  }
`

const FormWrap = styled.div`
  text-align: center;
  input {
    border-radius: 1px;
    border: none;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    margin: 0.5rem 0;
    opacity: 0.6;
    outline: none;
    padding: 1rem 1.5rem;
    width: 500px;
  }

  textarea {
    border: none;
    border-radius: 1px;
    display: block;
    font-size: 13px;
    height: 100px;
    line-height: 18px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    min-width: 100%;
    opacity: 0.6;
    outline: none;
    padding: 1rem 1.5rem;
    resize: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input {
      width: 100%;
    }
  }
`
