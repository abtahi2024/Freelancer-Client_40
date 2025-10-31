import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ShopService from "../pages/ShopService";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Deshboard from "../pages/Deshboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DeshboardLayout from "../layouts/DeshboardLayout";
import Profile from "../pages/Profile";
import ServiceDetail from "../pages/ServiceDetail";
import Orders from "../pages/Orders";
import PaymentSuccess from "../pages/PaymentSuccess";
import AddCategory from "../pages/AddCategory";
import AddServices from "../pages/AddServices";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="shopservice" element={<ShopService />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="shopservice/:serviceId" element={<ServiceDetail />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Private Route */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DeshboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Deshboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="payment/success" element={<PaymentSuccess />} />
        <Route path="categories/add" element={<AddCategory />} />
        <Route path="service/add" element={<AddServices />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
