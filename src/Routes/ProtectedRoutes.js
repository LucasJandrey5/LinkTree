import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/auth/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const [isLogged, setIsLogged] = useState();
  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const VerifyAuth = async () => {
    setIsLogged(await auth.Validate());
  };

  useEffect(() => {
    VerifyAuth();
  }, []);

  if (isLogged === undefined) {
    return;
  }

  return isLogged ? children : navigate("/login");
};

export default ProtectedRoutes;
