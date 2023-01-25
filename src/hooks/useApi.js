import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_LOGIN,
});

export const useApi = () => ({
  Login: async (data) => {
    const res = await api.post("/login", data);
    return res.data;
  },
  Register: async (data) => {
    const { res } = await api.post("/register", data);
    return res.data;
  },

  ValidateToken: async (data) => {
    const res = await api.post("/validate", data);

    return res.data;
  },
  GetPagesByToken: async (data) => {
    const res = await api.post("/getPages", data);

    return res.data;
  },
  GetPageByPageId: async (data) => {
    const res = await api.post("/getPage", data);

    return res.data;
  },
  CreateLinkByPage: async (data) => {
    const res = await api.post("/createLink", data);

    return res.data;
  },
  DeleteLinkById: async (data) => {
    const res = await api.post("/deleteLink", data);

    return res.data;
  },
  ChangeTextsLink: async (data) => {
    const res = await api.post("./changeTextsLink", data);

    return res.data;
  },
  ChangeOrderLink: async (data) => {
    const res = await api.post("./changeOrderLink", data);

    return res.data;
  },
  GetLinksByPage: async (data) => {
    const res = await api.post("/getLinks", data);

    return res.data;
  },
});
