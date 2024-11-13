import { MODAL_TYPES } from "@/constants/general";
import PATHS from "@/constants/path";
import { useAuthContext } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  const { handleStatusModal, profile, handleLogout } = useAuthContext();
  const [showDropDown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setShowDropdown(false);
    });

    return () => {
      document.removeEventListener("click", () => {
        setShowDropdown(false);
      });
    };
  }, []);

  const handleLogin = (e) => {
    e.stopPropagation();
    handleStatusModal(MODAL_TYPES.login);
  };

  const handleRegister = (e) => {
    e.stopPropagation();
    handleStatusModal(MODAL_TYPES.register);
  };

  const _onShowMenu = (e) => {
    e.stopPropagation();
    setShowDropdown(!showDropDown);
  };

  return (
    <>
      {Object.keys(profile)?.length <= 0 ? (
        <div className="header__auth">
          <div className="btn btn--transparent btnmodal" data-modal="mdlogin">
            <span onClick={handleRegister}>Đăng ký /&nbsp;</span>
            <span onClick={handleLogin}>Đăng nhập</span>
          </div>
        </div>
      ) : (
        <div className="header__logged" onClick={_onShowMenu}>
          <div className="userlogged">
            <div
              className="userlogged__avatar user"
              data-dropdown="userlogged__dropdown"
            >
              <div className="userlogged__avatar-img user__img">
                <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
              </div>
              <i className="userlogged__avatar-icon">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
                </svg>
              </i>
            </div>
            <div
              className={`userlogged__dropdown dropdown ${
                showDropDown ? "active" : ""
              } `}
            >
              <div className="userlogged__dropdown-info">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <Link to={PATHS.STUDENT_PROFILE.INDEX} className="user__info">
                  <p className="title --t4">
                    <strong>{profile?.firstName || ""}</strong>
                  </p>
                  <span className="email">Thông tin tài khoản</span>
                </Link>
              </div>
              <div className="userlogged__dropdown-list">
                <Link to={PATHS.STUDENT_PROFILE.COURSE}>Khóa học của tôi</Link>
                <Link to={PATHS.STUDENT_PROFILE.PAYMENT}>
                  Lịch sử thanh toán
                </Link>
                <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
                <Link to={PATHS.HOME} onClick={handleLogout}>
                  Đăng xuất{" "}
                  <i>
                    <img src="/img/iconlogout.svg" alt="logout" />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderAuth;
