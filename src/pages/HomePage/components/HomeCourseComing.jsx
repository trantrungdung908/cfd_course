import CourseItem from "@/components/CoursesItem";
import { COURSES_TYPES } from "@/constants/general";
import { Empty } from "antd";
import { useEffect } from "react";

const HomeCourseComing = ({ coursesComing, loading }) => {
  useEffect(() => {
    const flickityControl = () => {
      let courseComingSlider = $("#coursecoming__slider");
      courseComingSlider.flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        dragThreshold: 0,
        wrapAround: true,
      });

      $(".coursecoming .control .control__next").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("next");
      });
      $(".coursecoming .control .control__prev").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("previous");
      });
    };
    const myTimeout = setTimeout(() => {
      if (coursesComing?.length > 0) {
        flickityControl();
      }
    }, 300);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [coursesComing]);

  return (
    <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <div className="control">
            <div className="control__prev">
              <img src="img/icon-btn-control.svg" alt="icon prev" />
            </div>
            <div className="control__next">
              <img src="img/icon-btn-control.svg" alt="icon next" />
            </div>
          </div>
        </div>
      </div>
      {!loading && coursesComing?.length === 0 ? (
        <Empty
          description="Không Có Khoá Học Nào"
          style={{
            margin: "0 auto",
          }}
        />
      ) : (
        <div className="coursecoming__list" id="coursecoming__slider">
          {coursesComing?.map((course) => {
            return (
              <CourseItem
                {...course}
                types={COURSES_TYPES.coming}
                key={course.id}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HomeCourseComing;
