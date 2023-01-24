import React, { Children } from "react";
import { PageContext } from "./PageContext";
import { useApi } from "../../hooks/useApi";

const PageProvider = ({ children }) => {
  const api = useApi();

  const GetPagesByToken = async () => {
    var token = localStorage.getItem("token");

    var data = { token: token };

    const res = await api.GetPagesByToken(data);

    return res.response;
  };

  const GetLinksByPage = async (pageId) => {
    var token = localStorage.getItem("token");

    var data = { token: token, pageId: pageId };

    var res = await api.GetLinksByPage(data);

    return res.links;
  };

  return (
    <PageContext.Provider value={{ GetPagesByToken, GetLinksByPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
