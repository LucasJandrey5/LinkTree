import styled from "styled-components";

export const RegisterSection = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .hr-text {
      width: 100%;
      line-height: 1em;
      position: relative;
      outline: 0;
      border: 0;
      color: black;
      text-align: center;
      height: 1.5em;
      opacity: 0.5;
      &:before {
        content: "";
        // use the linear-gradient for the fading effect
        // use a solid background color for a solid bar
        background: linear-gradient(
          to right,
          transparent,
          #818078,
          transparent
        );
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
      }
      &:after {
        content: attr(data-content);
        position: relative;
        display: inline-block;
        color: black;

        padding: 0 0.5em;
        line-height: 1.5em;
        // this is really the only tricky part, you need to specify the background color of the container element...
        color: #818078;
        background-color: #fcfcfa;
      }
    }

    form {
      width: 100%;

      display: flex;
      flex-direction: column;

      input {
        width: 100%;
        height: 2.8rem;
        border-radius: 0.7rem;
        margin-top: 0.6rem;
        border: 1px solid lightgray;
        border-radius: 0.7rem;
        padding: 0 1rem;
        font-size: 1.1rem;
      }

      input.valid {
        border: 2px solid lightgreen;
      }

      input.invalid {
        border: 1px solid red;
      }

      .errorText {
        align-self: center;
        text-align: center;
        font-size: 0.8rem;
        padding: 0.3rem 0.5rem 0.5rem 0rem;
        font-family: "regular";
        color: red;
      }
    }

    p {
      margin-top: 3rem;
    }
  }
`;

export const Social = styled.section`
  width: 80%;
  margin-top: 1.2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  button {
    width: 4rem;
    height: 3rem;
    box-shadow: 0px 5px 5px 2px rgba(207, 207, 207, 1);
    border-radius: 0.6rem;
    background-color: white;
    cursor: pointer;
  }

  img {
    width: 1.7rem;
    background: none;
  }
`;
