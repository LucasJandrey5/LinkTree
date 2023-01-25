import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../../Contexts/Pages/PageContext";
import { CreateTreeSection } from "./style";
import Phone from "../../../Components/Phone";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const pages = useContext(PageContext);

  let { pageId } = useParams();
  const [links, setLinks] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const GetPageData = async () => {
    await setPageData(await pages.GetPageByPageId(pageId));
  };

  const GetLinksData = async () => {
    await setLinks(await pages.GetLinksByPage(pageId));
  };

  const handleCreateNewLink = async () => {
    await pages.CreateLinkByPage(pageId);
    GetLinksData();
  };

  const handleDeleteLink = async (linkId) => {
    setLinks(
      links.filter((item) => {
        return item.id !== linkId;
      })
    );
    await pages.DeleteLinkById(linkId);
    GetLinksData();
  };

  const handleOrderUpdateLink = async (props) => {
    var updatedLinks = links;

    var from = props[0].source.index;
    var to = props[0].destination.index;

    updatedLinks.splice(to, 0, links.splice(from, 1)[0]);

    var dataUpdateLinksOrderDB = [];

    updatedLinks.forEach((item, i) => {
      dataUpdateLinksOrderDB.push({ linkId: item.id, order: i });
    });

    setLinks(updatedLinks);

    await pages.ChangeLinksOrder(dataUpdateLinksOrderDB);
  };

  const handleTextUpdate = async (linkId, titleText, link) => {
    var updatedLinks = links;

    var index = updatedLinks.findIndex((item) => {
      return item.id == linkId;
    });

    updatedLinks[index].title = titleText;
    updatedLinks[index].link = link;

    setLinks(updatedLinks);

    var dataUpdateLinksTextsDB = {
      linkId: updatedLinks[index].id,
      title: updatedLinks[index].title,
      link: updatedLinks[index].link,
    };

    pages.UpdateTextLinkByPageId(dataUpdateLinksTextsDB);
  };

  useEffect(() => {
    GetLinksData();
    GetPageData();
  }, []);

  return (
    <CreateTreeSection>
      {links && (
        <Phone
          pageData={pageData}
          links={links}
          handleCreateNewLink={handleCreateNewLink}
          handleDeleteLink={handleDeleteLink}
          handleOrderUpdateLink={handleOrderUpdateLink}
          handleTextUpdate={handleTextUpdate}
        />
      )}
    </CreateTreeSection>
  );
};

export default EditPage;
