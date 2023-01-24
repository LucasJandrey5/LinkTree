import React from "react";

import { ButtonStyle } from "./style.js";

const LoginButton = (props) => {
  return (
    <ButtonStyle onClick={() => props.onClick} type={props.type}>
      {props.text}
    </ButtonStyle>
  );
};

export default LoginButton;
