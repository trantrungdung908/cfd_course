import { useMainContext } from "@/context/MainContext";
import React from "react";

const HeaderHamburger = () => {
  const { isShowMenu, handleToggleNav } = useMainContext();

  return (
    <div
      className={`header__humburger ${isShowMenu ? "--close" : ""}`}
      onClick={handleToggleNav}
    >
      <div className="header__humburger-button">
        <span />
        <span />
        <span />
      </div>
      <div className="header__humburger-text">
        <span>{isShowMenu ? "Menu" : "Đóng"}</span>
      </div>
    </div>
  );
};

export default HeaderHamburger;
