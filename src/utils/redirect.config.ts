import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const redirect = (tk: string, path: string) => {
  const navigate = useNavigate();
  const token = Cookies.get(tk);
  useEffect(() => {
    if (!token) navigate(path);
  }, [token, navigate]);
};

export default redirect;
