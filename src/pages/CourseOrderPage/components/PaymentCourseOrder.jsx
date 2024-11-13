import React, { useState } from "react";

const PAYMENTS = [
  {
    id: "atm",
    icon: "/img/icon-payment-method-atm.svg",
    label: "Thành toán bằng chuyển khoản",
    description: `Sau khi bấm đăng ký, mã khoá học & thông tin tài khoản
      ngân hàng sẽ được gửi đến email của bạn, bạn vui lòng chuyển
      khoản với nội dung: mã khoá học, họ và tên, số điện thoại, CFD
      Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của
      bạn sau khi giao dịch thành công.`,
  },
  {
    id: "momo",
    icon: "/img/icon-payment-method-mo-mo.svg",
    label: "Thanh toán bằng ví Momo",
    description: `Sau khi bấm đăng ký, mã khoá học & thông tin tài khoản
      MoMo sẽ được gửi đến email của bạn, bạn vui lòng chuyển khoản
      với nội dung: mã khoá học, họ và tên, số điện thoại, CFD
      Circle sẽ liên hệ bạn để xác nhận và kích hoạt khoá học của
      bạn sau khi giao dịch thành công.`,
  },
  {
    id: "cash",
    icon: "/img/icon-payment-method-cod.svg",
    label: "Thanh toán bằng tiền mặt",
    description: `Sau khi bấm đăng ký, thông tin khoá học sẽ được gửi đến email
      của bạn, bạn vui lòng đến văn phòng CFD Circle vào ngày khai
      giảng để đóng học phí tại số 11b, Phan Kế Bính, quận 1, TP Hồ
      Chí Minh.`,
  },
];

const PaymentCourseOrder = ({ typePayment, setTypePayment, disabled }) => {
  const _handleShow = (string) => {
    setTypePayment(string);
  };
  return (
    <div className="itemorder paymentorder">
      <h3 className="title --t3">Hình thức thanh toán</h3>
      <div
        className="boxorder"
        style={disabled ? { backgroundColor: "#e0e0e0", opacity: 0.6 } : {}}
      >
        {PAYMENTS.map((payment) => {
          return (
            <div className="boxorder__pay" key={payment.id}>
              <label className="radiocontainer">
                <img src={payment.icon} alt />
                {payment.label}
                <input
                  type="radio"
                  name="radio"
                  value={payment.id}
                  onChange={() => _handleShow(payment.id)}
                  disabled={disabled}
                  checked={typePayment === payment.id}
                />
                <span className="checkmark" />
              </label>
              <div
                className="boxorder__pay-tooltip"
                style={{
                  display: typePayment === payment.id ? "block" : "none",
                }}
              >
                {payment.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentCourseOrder;
