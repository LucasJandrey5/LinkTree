import styled from "styled-components";

export const PhoneComponent = styled.div`
  min-height: 40rem;
  width: 100%;

  background-color: #eee;

  @media (min-width: 428px) {
    max-width: 21rem;
    min-height: 40rem;
    border-radius: 0rem;
    border: 0.5rem solid gray;
    border-radius: 2rem;
  }

  .page-background {
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .page-presentation {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 6rem;
        border-radius: 50%;
      }
    }

    .block-list {
      width: 100%;

      display: flex;
      justify-content: center;

      .blocks-section {
        width: 95%;
      }
    }

    .new-link-box {
      background-color: white;
      border-radius: 1.2rem;
      width: 95%;
      margin-block: 0.5rem;
      height: 3.5rem;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      .plus-icon {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
