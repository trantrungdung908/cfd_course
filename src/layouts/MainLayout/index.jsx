import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/LoadingPage";
import AuthModal from "@/components/Modal";
import Navbar from "@/components/Nav";
import Overlay from "@/components/Overlay";
import AuthContextProvider from "@/context/AuthContext";
import MainContextProvider from "@/context/MainContext";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <MainContextProvider>
      <AuthContextProvider>
        <Header />
        <Navbar />
        <Overlay />
        <Outlet />
        <AuthModal />
        <Footer />
      </AuthContextProvider>
    </MainContextProvider>
  );
};

export default MainLayout;
