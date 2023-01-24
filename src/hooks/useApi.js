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
  GetLinksByPage: async (data) => {
    const res = await api.post("/getLinks", data);

    return res.data;
  },
});
