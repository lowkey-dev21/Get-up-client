import axios from "../services/api";
import Cookies from "js-cookie";

export interface FormData {
  [key: string]: any;
}

export const getConfig = async (api: string) => {
  try {
    const token = Cookies.get("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const res = await axios.get(api, config);
    return res.data;
  } catch (error) {
    console.error("Error fetching config:", error);
  }
};

export const postConfig = async (api: string, formData: FormData) => {
  try {
    const token = Cookies.get("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.post(api, formData, config);
    return res.data;
  } catch (error) {
    console.error("Error fetching config:", error);
  }
};

export const putConfig = async (api: string, formData: FormData) => {
  try {
    const token = Cookies.get("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.put(api, formData, config);
    return res.data;
  } catch (error) {
    console.error("Error fetching config:", error);
  }
};
