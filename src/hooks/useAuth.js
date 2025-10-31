import { useEffect, useState } from "react";
import api_Client from "../ServicesApi/api_Client";
import authApiClient from "../ServicesApi/auth-api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };
  const [authTokens, setAuthTokens] = useState(getToken());

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  const handleAPIError = (
    error,
    defaultMessage = "something went Wrong! try again"
  ) => {
    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(errorMessage);
      return { success: false, message: errorMessage };
    }
    setErrorMsg(defaultMessage);
    return {
      success: false,
      message: defaultMessage,
    };
  };

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const response = await authApiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      setUser(response.data);
    } catch (error) {
      console.log("Error fetching", error.response?.data || error);
    }
  };

  // update users profile
  const updateUserProfile = async (data) => {
    setErrorMsg("");
    try {
      await api_Client.put("/auth/users/me/", data, {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Password Change
  const changePassword = async (data) => {
    setErrorMsg("");
    try {
      await api_Client.post("/auth/users/set_password/", data, {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
    } catch (error) {
      return handleAPIError(error);
    }
  };

  //Login user
  const loginUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await api_Client.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));

      //After login set user
      await fetchUserProfile(response.data.access);
      return { success: true };
    } catch (error) {
      setErrorMsg("Login Error", error.response.data?.detail);
      return { success: false };
    }
  };

  // Register user
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      await api_Client.post("/auth/users/", userData);
      return {
        success: true,
        message:
          "Registration Successfull. Check your email to activate your account.",
      };
    } catch (error) {
      return handleAPIError(error);
    }
  };

  // Logout user
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };
  return {
    user,
    errorMsg,
    loginUser,
    registerUser,
    logoutUser,
    updateUserProfile,
    changePassword,
  };
};
export default useAuth;
