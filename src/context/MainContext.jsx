import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainContext = createContext({});

const MainContextProvider = ({ children }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const handleToggleNav = () => {
    if (isShowMenu) {
      $("body").removeClass("menu-show");
    } else {
      $("body").addClass("menu-show");
    }
    setIsShowMenu(!isShowMenu);
  };

  return (
    <MainContext.Provider value={{ isShowMenu, handleToggleNav }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => useContext(MainContext);
