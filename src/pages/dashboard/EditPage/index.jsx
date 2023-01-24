import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../../Contexts/Pages/PageContext";
import { CreateTreeSection } from "./style";
import Phone from "../../../Components/Phone";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const pages = useContext(PageContext);

  let { pageId } = useParams();
  const [links, setLinks] = useState([]);

  const GetLinksData = async () => {
    setLinks(await pages.GetLinksByPage(pageId));
  };

  useEffect(() => {
    GetLinksData();
  }, []);

  useEffect(() => {
    console.log("links: ", links);
  }, [links]);

  return (
    <CreateTreeSection>{links && <Phone links={links} />}</CreateTreeSection>
  );
};

export default EditPage;
