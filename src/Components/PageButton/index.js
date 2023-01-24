import React, { useContext } from "react";
import { PageContext } from "../../Contexts/Pages/PageContext";
import { useNavigate } from "react-router-dom";

import { PageButtomStyle } from "./style";

const PageButton = ({ id, title, description }) => {
  const navigate = useNavigate();

  const handleClickEditPage = () => {
    navigate("/dashboard/page/" + id);
  };

  return (
    <PageButtomStyle onClick={() => handleClickEditPage()}>
      <h3>{title}</h3>
      <p>{description}</p>
    </PageButtomStyle>
  );
};

export default PageButton;
