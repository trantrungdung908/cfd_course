import React from "react";

const coursesFeatured = [
  {
    id: 1,
    title: "Hình thức học offline hoặc online.",
    description:
      "Học viên có thể học offline hoặc online cùng với lớp offline thông qua Google Meet. Trải nghiệm học và được hỗ trợ như học offline.",
  },
  {
    id: 2,
    title: "Hỗ trợ từng học viên 24/7",
    description:
      "Học viên có thể học offline hoặc online cùng với lớp offline thông qua Google Meet. Trải nghiệm học và được hỗ trợ như học offline.",
  },
  {
    id: 3,
    title: "Buổi học được quay video",
    description:
      "Mỗi buổi học được quay video lại để học viên có thể xem lại khi cần thiết. Cũng như khi bạn nghỉ thì cũng có thể học lại thông qua video buổi học đó.",
  },
  {
    id: 4,
    title: "Được học lại miễn phí nếu hoàn thành ít nhất 42 buổi học",
    description:
      "Khi bạn đã hoàn thành ít nhất 42/48 buổi nhưng cảm thấy chưa vững thì sẽ được học lại miễn phí vào khoá tiếp theo.",
  },
  {
    id: 5,
    title:
      "Hoàn thành 5-6 dự án &amp; có đủ kỹ năng ứng tuyển vị trí Front-end Dev",
    description:
      "Với hình thức học thực chiến liên tục trên dự án, sau khoá học bạn có thể hoàn thành ít nhất 5-6 dự án website responsive và React Js theo bản thiết kế và có kiến thức vững chắc để ứng tuyển vị trí chính thức Front-end Dev tại các công ty.",
  },
  {
    id: 6,
    title: "Tham gia tiệc cuối khoá miễn phí",
    description:
      "Sau mỗi khoá học, CFD Circle sẽ tổ chức tiệc cuối khoá không tính phí để cùng ngồi lại với nhau và chia sẻ nhằm tạo sự gắn kết cho tất cả học viên.",
  },
];

const CourseDetailsFeatued = ({}) => {
  return (
    <section className="featured">
      <img src="/img/icon-cfd.svg" alt className="featured__c" />
      <div className="container">
        <div className="featured__title">
          <h2 className="title --t2 --white">
            <span>Ưu điểm</span>
            <br />
            của khoá học
          </h2>
        </div>
        <div className="featured__content">
          {coursesFeatured?.map((feature) => {
            return (
              <div className="featured__content-item" key={feature.id}>
                <h3 className="title --t3 --white">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsFeatued;
