import PATHS from "@/constants/path";
import { useMainContext } from "@/context/MainContext";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { handleToggleNav } = useMainContext();
  return (
    <nav className="navbar">
      <ul className="navbar__main" onClick={handleToggleNav}>
        <li className="navbar__link">
          <NavLink to={PATHS.HOME} className="navbar__item ">
            Trang chủ
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to={PATHS.ABOUT} className="navbar__item">
            Về CFD Circle
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to={PATHS.COURSES.INDEX} className="navbar__item">
            Khóa học
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to={PATHS.BLOG.INDEX} className="navbar__item">
            Bài viết
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to={PATHS.CONTACT} className="navbar__item">
            Liên hệ
          </NavLink>
        </li>
      </ul>
      <div className="navbar__overlay" />
    </nav>
  );
};

export default Navbar;
