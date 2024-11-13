import React from "react";

const featuresData = [
  {
    id: 1,
    title: "Chương trình học thực chiến",
    description:
      "CFD Circle đào tạo thực chiến trên dự án, đi thẳng vào trọng tâm, sát với yêu cầu thực tế, được truyền đạt từ những giảng viên giàu kinh nghiệm và tâm huyết.",
  },
  {
    id: 2,
    title: "Đồng hành và hỗ trợ 24/7",
    description:
      "Giảng viên, mentor và học viên là một team gắn kết, cùng nhau hỗ trợ, kết nối và giúp đỡ lẫn nhau trong suốt quá trình học và phát triển sự nghiệp.",
  },
  {
    id: 3,
    title: "Hình thức học đa dạng",
    description:
      "Học offline hoặc online cùng lớp offline thông qua Google Meet, học viên được hỗ trợ và đánh giá như học viên học offline.",
  },
  {
    id: 4,
    title: 'Đặt chữ "Tâm" trong tất cả mọi việc',
    description:
      "Cái tâm của người dạy, cùng sự tâm huyết của người học, ắt sẽ thành công trên con đường sự nghiệp của mỗi chúng ta.",
  },
];

const HomeFeatured = () => {
  return (
    <section className="featured">
      <img src="img/icon-cfd.svg" alt className="featured__c" />
      <div className="container">
        <div className="featured__title">
          <h2 className="title --t2 --white">
            Những điều <br />
            <span>Đặc biệt</span> Tại CFD
          </h2>
        </div>
        <div className="featured__content">
          {featuresData.map((feature) => {
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

export default HomeFeatured;
