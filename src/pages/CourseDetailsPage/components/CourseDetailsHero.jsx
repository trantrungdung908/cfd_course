import Button from "@/components/Button";
import { useAuthContext } from "@/context/AuthContext";
import React from "react";

const CourseDetailsHero = ({
  name,
  tags = [],
  duration,
  startDate,
  teacherInfor = {},
  orderLink = "",
  image,
  price,
  isAlreadyOrder,
  handleOrderLink,
}) => {
  const { messageApi } = useAuthContext();

  const handleCopiedLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    messageApi.success("Copied");
  };

  return (
    <section className="hero herodetail">
      <div className="hero__content">
        <div className="container">
          <h3 className="category label --white">frontend</h3>
          <h2 className="title --white">{name}</h2>
          <div className="infor">
            <div className="infor__item">
              <label className="label --white">Khai giảng</label>
              <p className="title --t3 --white">{startDate}</p>
            </div>
            <div className="infor__item">
              <label className="label --white">Thời lượng</label>
              <p className="title --t3 --white">{duration} buổi</p>
            </div>
            <div className="infor__item">
              <label className="label --white">Hình thức</label>
              <p className="title --t3 --white">{tags.join(" | ")}</p>
            </div>
          </div>
          {/* Chưa đăng ký */}
          <Button
            onClick={handleOrderLink}
            link={orderLink}
            className={`btn-regcourse ${isAlreadyOrder ? "--disable" : ""}`}
            variant={"primary"}
          >
            {isAlreadyOrder ? "Đã đăng ký" : "Đăng ký"}
          </Button>
          {/* Đã đăng ký */}
          {/* <div class="btn btn--primary btn-regcourse --disable">Đã đăng ký</div> */}
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container-fluid">
          <a href className="user">
            <div className="user__img">
              <img
                src="https://cfdcircle.vn/files/avatars/480x480/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg"
                alt="Avatar teacher"
              />
            </div>
            <p className="user__name --white">{teacherInfor.name}</p>
          </a>
          <div className="pricebox">
            <p className="title --t3 --white">{price} VND</p>
          </div>
          {/* <a
            href="https://www.facebook.com/sharer/sharer.php?sdk=joey&u=https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-master-30&display=popup&ref=plugin&src=share_button"
            onclick="return !window.open(this.href, 'Facebook', 'width=640,height=580')"
            className="sharebox s--white"
          >
            Chia sẻ
            <i>
              <img
                src="https://cfdcircle.vn/img/iconshare.svg"
                alt="CFD Circle"
              />
            </i>
          </a> */}

          <a onClick={handleCopiedLink} className="sharebox s--white">
            Chia sẻ
            <i>
              <img
                src="https://cfdcircle.vn/img/iconshare.svg"
                alt="CFD Circle"
              />
            </i>
          </a>
        </div>
      </div>
      <div className="hero__background">
        <img className="hero__background-img" src={image} alt="CFD Circle" />
      </div>
    </section>
  );
};

export default CourseDetailsHero;
