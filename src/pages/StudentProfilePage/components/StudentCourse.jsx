import Button from "@/components/Button";
import PATHS from "@/constants/path";
import { TEACHER_ROLES } from "@/constants/roles";
import { useAuthContext } from "@/context/AuthContext";
import { formatPrice } from "@/utils/format";
import React from "react";

const StudentCourse = () => {
  const { profileCourse } = useAuthContext();

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {profileCourse?.map((item) => {
          const { image, tags, teams, price, name, slug } = item?.course;
          const teacherInfo = teams?.find((team) =>
            team?.tags.includes(TEACHER_ROLES.teacher)
          );
          return (
            <div className="courses__list-item" key={item.id}>
              <div className="img">
                <Button
                  variant=""
                  link={PATHS.COURSES.ORDER.replace(":courseOrderSlug", slug)}
                >
                  <img
                    src={image}
                    alt="Khóa học CFD"
                    className="course__thumbnail"
                  />
                  <span className="course__img-badge badge">
                    {tags.join(" | ")}
                  </span>
                </Button>
              </div>
              <div className="content">
                <p className="label">Front-End</p>
                <h3 className="title --t3">
                  <a href="course-detail.html">{name}</a>
                </h3>
                <div className="content__info">
                  <div className="user">
                    <div className="user__img">
                      <img src={teacherInfo.image} alt="Avatar teacher" />
                    </div>
                    <p className="user__name">{teacherInfo.name}</p>
                  </div>
                  <div className="price">
                    <strong>{formatPrice(price)}đ</strong>
                  </div>
                </div>
                {/* <div className="content__action">
                  <a href="course-order.html" className="btn btn--primary">
                    Đăng ký ngay
                  </a>
                  <a href="course-detail.html" className="btn btn--default">
                    <img src="img/icon-paper.svg" alt="icon paper" />
                  </a>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCourse;
