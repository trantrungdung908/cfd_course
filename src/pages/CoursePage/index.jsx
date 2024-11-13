import CourseItem from "@/components/CoursesItem";
import useDebounce from "@/hooks/useDebounce";
import useQuery from "@/hooks/useQuery";
import { courseService } from "@/services/courseService";
import { Empty, Skeleton } from "antd";

const CoursePage = () => {
  const {
    data: coursesData,
    loading: loadingCourses,
    error: errorCourses,
  } = useQuery(() => courseService.getAllCourses());

  const loadingApi = useDebounce(loadingCourses, 500);

  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <div className="courses__list">
          {loadingApi &&
            Array(4)
              .fill("")
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className="courses__list-item"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Skeleton.Image
                      active
                      style={{
                        width: "100%",
                        margin: "0 auto",
                        height: "300px",
                      }}
                    />
                    <Skeleton
                      active
                      className="courses__list-item"
                      style={{ marginTop: 10, width: "100%" }}
                      avatar={true}
                      paragraph={{ rows: 3 }}
                    />
                  </div>
                );
              })}

          {!loadingApi &&
            coursesData.courses?.length > 0 &&
            coursesData.courses?.map((course) => {
              return <CourseItem {...course} key={course.id} />;
            })}

          {!loadingApi && coursesData.courses.length === 0 && (
            <Empty
              description={"Không có dữ liệu"}
              style={{ margin: "0 auto" }}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
