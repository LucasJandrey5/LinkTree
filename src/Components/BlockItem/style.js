import styled from "styled-components";

export const BlockItemStyle = styled.div`
  background-color: white;
  height: 6rem;
  margin-block: 0.5rem;
  border-radius: 1.2rem;

  display: flex;
  justify-content: space-between;

  .div1 {
    padding: 0 0.3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .handleDrag {
      width: 1rem;
      height: 1rem;
    }
  }
  .div2 {
    padding: 0 1rem;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    div {
      width: 100%;
      border-bottom: 1px solid gray;
      margin: 0.3rem 0;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      label {
        font-size: 0.8rem;
        color: lightgray;
      }

      input {
        width: 100%;
        font-size: 0.8rem;
        height: 0.9rem;
      }
    }
  }

  .div3 {
    width: 2.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
      height: 2.5rem;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      .trashIcon {
        width: 1.6rem;
      }
    }
  }
`;
