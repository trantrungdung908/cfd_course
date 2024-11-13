import { COURSES_TYPES } from "@/constants/general";
import PATHS from "@/constants/path";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { formatDate, formatPrice } from "@/utils/format";
import { TEACHER_ROLES } from "@/constants/roles";

const CourseItem = ({
  types = COURSES_TYPES.normal,
  name,
  slug,
  image,
  startDate,
  teams,
  tags,
  price,
}) => {
  const detailPath = `${PATHS.COURSES.INDEX}/${slug}`;

  let teacherInfo = teams.find((item) =>
    item.tags.includes(TEACHER_ROLES.teacher)
  );

  if (types === COURSES_TYPES.coming) {
    return (
      <div className="coursecoming__item">
        <div className="coursecoming__item-img">
          <Link to={detailPath}>
            <img src={image || ""} alt="Khóa học sắp ra mắt CFD" />
          </Link>
        </div>
        <div className="coursecoming__item-content">
          <p className="category label">Front-end</p>
          <h2 className="title --t2">
            <Link to={detailPath}>{name || ""}</Link>
          </h2>
          {teacherInfo.id && (
            <div className="user">
              <div className="user__img">
                <img src={teacherInfo.image} alt="Avatar teacher" />
              </div>
              <p className="user__name">{teacherInfo.name || ""}</p>
            </div>
          )}
          <div className="info">
            <div className="labeltext">
              <span className="label --blue">Ngày khai giảng</span>
              <p className="title --t2">{formatDate(startDate)}</p>
            </div>
            <div className="labeltext">
              <span className="label --blue">Hình thức học</span>
              <p className="title --t2">{tags.join(" | ")}</p>
            </div>
          </div>
          <div className="btnwrap">
            <Button
              link={PATHS.COURSES.ORDER.replace(":courseOrderSlug", slug)}
            >
              Đăng Ký Học
            </Button>
            <Button variant={"border"} link={detailPath}>
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses__list-item">
      <div className="img">
        <Link to={detailPath}>
          <img src={image} alt="Khóa học CFD" className="course__thumbnail" />
          <span className="course__img-badge badge">{tags.join(" | ")}</span>
        </Link>
      </div>
      <div className="content">
        <p className="label">Front-End</p>
        <h3 className="title --t3">
          <Link to={detailPath}>{name}</Link>
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
          <Button link="course-order.html" className="btn btn--primary">
            Đăng ký ngay
          </Button>
          <a href="course-detail.html" className="btn btn--default">
            <img src="img/icon-paper.svg" alt="icon paper" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CourseItem;
