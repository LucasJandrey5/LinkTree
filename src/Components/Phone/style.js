import styled from "styled-components";

export const PhoneComponent = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 5rem;
  background-color: #eee;

  @media (min-width: 428px) {
    max-width: 21rem;
    max-height: 40rem;
    border-radius: 0rem;
    border: 0.5rem solid gray;
    border-radius: 2rem;
  }

  .page-background {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .block-list {
      width: 100%;

      display: flex;
      justify-content: center;

      .blocks-section {
        width: 95%;
      }
    }
  }
`;
