import { useAuthContext } from "@/context/AuthContext";
import { formatDate, formatPrice } from "@/utils/format";
import { Empty } from "antd";
import React from "react";

const StudentPayment = () => {
  const { paymentCourse } = useAuthContext();

  const handleTypePay = (type) => {
    switch (type) {
      case "atm":
        return "Chuyển khoản";
      case "momo":
        return "Ví momo";
      default:
        return "Tiền mặt";
    }
  };

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {!!!paymentCourse.length && <Empty description={"Không có dữ liệu"} />}
      {paymentCourse?.map((pay) => {
        return (
          <div className="itemhistory" key={pay?.id}>
            <div className="name">{pay?.course?.title}</div>
            <div className="payment">{handleTypePay(pay?.paymentMethod)}</div>
            <div className="date">{formatDate(pay?.createdAt)}</div>
            <div className="money">{formatPrice(pay?.course?.price)} VND</div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentPayment;
