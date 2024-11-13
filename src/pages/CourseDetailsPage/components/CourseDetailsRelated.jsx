import CourseItem from "@/components/CoursesItem";
import React from "react";

const CourseDetailsRelated = ({ relatedCourses }) => {
  return (
    <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
          {/* <CourseItem {...course} key={course.id} />; */}
          {/* {   coursesData.courses?.map((course) => {
              return <CourseItem {...course} key={course.id} />;
            }} */}
          {relatedCourses?.map((course) => {
            return <CourseItem {...course} key={course.id} />;
          })}
          {/* <div className="courses__list-item">
            <div className="img">
              <a href="course-detail.html">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg"
                  alt="Khóa học CFD"
                  className="course__thumbnail"
                />
                <span className="course__img-badge badge">
                  OFFLINE | ONLINE
                </span>
              </a>
            </div>
            <div className="content">
              <p className="label">Frontend</p>
              <h3 className="title --t3">
                <a href="https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-newbie-28">
                  Frontend Newbie
                </a>
              </h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img
                      src="https://cfdcircle.vn/files/avatars/480x480/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg"
                      alt="Avatar teacher"
                    />
                  </div>
                  <p className="user__name">Trần Nghĩa</p>
                </div>
                <div className="price">
                  <strong className="price__discount">4.500.000đ</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="courses__list-item">
            <div className="img">
              <a href="course-detail.html">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg"
                  alt="Khóa học CFD"
                  className="course__thumbnail"
                />
                <span className="course__img-badge badge">
                  OFFLINE | ONLINE
                </span>
              </a>
            </div>
            <div className="content">
              <p className="label">Frontend</p>
              <h3 className="title --t3">
                <a href="course-detail.html">Web Responsive</a>
              </h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img
                      src="https://cfdcircle.vn/files/avatars/480x480/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg"
                      alt="Avatar teacher"
                    />
                  </div>
                  <p className="user__name">Trần Nghĩa</p>
                </div>
                <div className="price">
                  <strong className="price__discount">4.900.000đ</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="courses__list-item">
            <div className="img">
              <a href="https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-reactjs-master-32">
                <img
                  src="https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg"
                  alt="Khóa học CFD"
                  className="course__thumbnail"
                />
                <span className="course__img-badge badge">
                  OFFLINE | ONLINE
                </span>
              </a>
            </div>
            <div className="content">
              <p className="label">Frontend</p>
              <h3 className="title --t3">
                <a href="course-detail.html">ReactJS Master</a>
              </h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img
                      src="https://cfdcircle.vn/files/avatars/480x480/jttYg5V8Bv03QAC7bkQTT73dZeZKGR8vctClG6XK.jpg"
                      alt="Avatar teacher"
                    />
                  </div>
                  <p className="user__name">Đặng Thuyền Vương</p>
                </div>
                <div className="price">
                  <strong className="price__discount">6.000.000đ</strong>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsRelated;
