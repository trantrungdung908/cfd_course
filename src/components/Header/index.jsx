import React, { useEffect } from "react";
import HeaderHamburger from "./components/HeaderHamburger";
import HeaderLogo from "./components/HeaderLogo";
import HeaderAuth from "./components/HeaderAuth";
import { useLocation, useParams } from "react-router-dom";
import PATHS from "@/constants/path";

const Header = () => {
  const { pathname } = useLocation();

  const { coursesSlug } = useParams();

  useEffect(() => {
    function setBgHeader(scrollY) {
      let header = $("header");
      // if (
      //   scrollY > header.height() &&
      //   (pathname === PATHS.HOME || pathname === PATHS.ABOUT)
      // ) {
      //   header.addClass("--bgwhite");
      // } else {
      //   header.removeClass("--bgwhite");
      // }

      if (
        pathname === PATHS.HOME ||
        pathname === PATHS.ABOUT ||
        pathname === `${PATHS.COURSES.INDEX}/${coursesSlug}`
      ) {
        if (scrollY > header.height()) {
          header.addClass("--bgwhite");
        } else {
          header.removeClass("--bgwhite");
        }
      } else {
        header.addClass("--bgwhite");
      }
    }
    function scrollBgHeader() {
      let scrollY = $(window).scrollTop();
      if ($(".header").hasClass("--transparent")) {
        setBgHeader(scrollY);
      }
    }
    scrollBgHeader();

    // ================= WINDOW SCROLL ========================
    $(window).on("scroll", function () {
      scrollBgHeader();
    });

    return () => {
      $(window).off("scroll", function () {
        scrollBgHeader();
      });
    };
  }, [pathname]);
  return (
    <header className="header --transparent">
      <div className="container-fluid">
        <HeaderHamburger />
        <HeaderLogo />
        <HeaderAuth />
        {/* user logged */}
      </div>
    </header>
  );
};

export default Header;
