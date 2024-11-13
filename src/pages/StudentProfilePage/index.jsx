import PATHS from "@/constants/path";
import { useAuthContext } from "@/context/AuthContext";
import { NavLink, Outlet } from "react-router-dom";

const StudentProfilePage = () => {
  const { profile } = useAuthContext();
  return (
    <main className="mainwrapper profilepage">
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <div className="sidebar__info">
              <div className="useravatar">
                <div className="avatar">
                  <div className="img">
                    <img src="/img/avatar_nghia.jpg" alt="avatar" />
                  </div>
                </div>
                <h3 className="title --t3">{profile?.firstName || ""}</h3>
              </div>
            </div>
            <div className="sidebar__content">
              <h4>Giới thiệu</h4>
              <p className="description">{profile?.introduce || ""}</p>
              <ul>
                <li>
                  <img src="/img/icon-mail-outline.svg" alt="icon" />
                  <span>{profile?.email || ""}</span>
                </li>
                <li>
                  <img src="/img/icon-phone-outline.svg" alt="icon" />
                  <span>{profile?.phone || ""}</span>
                </li>
                <li>
                  <img src="/img/icon-link.svg" alt="icon" />
                  <a href="#" target="_blank">
                    {profile?.facebookURL || ""}
                  </a>
                </li>
              </ul>
              {/* <div className="social">
                <a href="#">
                  <img src="/img/icon-facebook-dark.svg" alt />
                </a>
                <a href="#">
                  <img src="/img/icon-linkedin-dark.svg" alt />
                </a>
                <a href="#">
                  <img src="/img/icon-youtube-dark.svg" alt />
                </a>
              </div> */}
            </div>
          </div>
          <div className="tabwrap">
            <div className="tab">
              <div className="tab__title">
                <NavLink to={PATHS.STUDENT_PROFILE.INDEX} end>
                  Thông tin cá nhân
                </NavLink>
                <NavLink to={PATHS.STUDENT_PROFILE.COURSE}>
                  Khóa học của tôi
                </NavLink>
                <NavLink to={PATHS.STUDENT_PROFILE.PAYMENT}>
                  Lịch sử thanh toán
                </NavLink>
              </div>
              <div className="tab__content">
                <Outlet />
                {/* Thông tin cá nhân */}
                {/* <StudentInfo /> */}
                {/* Khoá học của tôi */}
                {/* <StudentCourse /> */}
                {/* Lịch sử thanh thánh */}
                {/* <StudentPayment /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentProfilePage;
