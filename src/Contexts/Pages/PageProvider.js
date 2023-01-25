import React, { Children } from "react";
import { PageContext } from "./PageContext";
import { useApi } from "../../hooks/useApi";

const PageProvider = ({ children }) => {
  const api = useApi();

  const GetPagesByToken = async () => {
    var token = localStorage.getItem("token");

    var data = { token };

    const res = await api.GetPagesByToken(data);

    return res.response;
  };

  const GetPageByPageId = async (pageId) => {
    var token = localStorage.getItem("token");

    var data = { token, pageId };

    const res = await api.GetPageByPageId(data);

    return res.response;
  };

  const CreateLinkByPage = async (pageId) => {
    var token = localStorage.getItem("token");

    var data = { token, pageId };

    var res = await api.CreateLinkByPage(data);

    return res.response;
  };

  const DeleteLinkById = async (linkId) => {
    var token = localStorage.getItem("token");

    var data = { token, linkId };

    var res = await api.DeleteLinkById(data);

    return res.response;
  };

  const ChangeLinksOrder = async (linksOrder) => {
    var token = localStorage.getItem("token");

    var data = { token, newOrder: linksOrder };

    var res = await api.ChangeOrderLink(data);

    return res.data;
  };

  const GetLinksByPage = async (pageId) => {
    var token = localStorage.getItem("token");

    var data = { token, pageId };

    var res = await api.GetLinksByPage(data);

    return res.links;
  };

  const UpdateTextLinkByPageId = async (data) => {
    var token = localStorage.getItem("token");

    var data = {
      token,
      linkId: data.linkId,
      title: data.title,
      link: data.link,
    };

    await api.ChangeTextsLink(data);

    return;
  };

  return (
    <PageContext.Provider
      value={{
        GetPagesByToken,
        CreateLinkByPage,
        DeleteLinkById,
        GetLinksByPage,
        ChangeLinksOrder,
        GetPageByPageId,
        UpdateTextLinkByPageId,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
