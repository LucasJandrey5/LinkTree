import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const api = useApi();

  useEffect(() => {
    Validate();
  }, []);

  const Login = async (data) => {
    const res = await api.Login(data);

    if (!res.erro) {
      localStorage.setItem("token", res.token);

      setUser(res.user);
      return true;
    }

    return;
  };

  const Register = async (data) => {
    const res = await api.Register(data);

    return !res.err;
  };

  const Validate = async () => {
    var data = { token: localStorage.getItem("token") };
    const res = await api.ValidateToken(data);

    if (!res.erro) {
      setUser(res.user);
      return true;
    }

    return false;
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, Login, Register, Validate, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
