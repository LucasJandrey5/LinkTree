import React, { useContext, useEffect, useState } from "react";
import PageButton from "../../../Components/PageButton";
import { PageContext } from "../../../Contexts/Pages/PageContext";

import { ShowPagesSection } from "./style";

const ShowPages = () => {
  const pages = useContext(PageContext);

  const [pagesData, setPagesData] = useState([]);

  const GetPages = async () => {
    console.log(await pages.GetPagesByToken());
    setPagesData(await pages.GetPagesByToken());
  };

  useEffect(() => {
    GetPages();
  }, []);

  return (
    <ShowPagesSection>
      <h1>Show pages</h1>
      {pagesData?.map((item, i) => (
        <PageButton
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </ShowPagesSection>
  );
};

export default ShowPages;
