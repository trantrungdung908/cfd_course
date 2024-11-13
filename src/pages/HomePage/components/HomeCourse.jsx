import Button from "@/components/Button";
import CourseItem from "@/components/CoursesItem";
import PATHS from "@/constants/path";
import { Empty } from "antd";

const HomeCourse = ({ courses, loading }) => {
  return (
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Tất cả <span className="color--primary">khóa học</span>
          </h2>
        </div>
        <div className="courses__list">
          {!loading && courses?.length > 0 ? (
            courses?.map((course) => {
              return <CourseItem {...course} key={course.id} />;
            })
          ) : (
            <Empty
              description="Không Có Khoá Học Nào"
              style={{
                margin: "0 auto",
              }}
            />
          )}
        </div>
        {!loading && courses?.length > 0 && (
          <div className="courses__btnall">
            <Button
              link={PATHS.COURSES.INDEX}
              className="course__btn"
              variant={"grey"}
            >
              Tất cả khoá học
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCourse;
