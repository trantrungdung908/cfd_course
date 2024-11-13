import { useAuthContext } from "@/context/AuthContext";
import React from "react";

const ChangeModal = ({ type }) => {
  const { handleStatusModal } = useAuthContext();
  return (
    <div className="form__bottom">
      <p>Bạn {type === "login" ? "đã" : "chưa"} có tài khoản?</p>
      <div
        className="color--primary btnmodal"
        onClick={() => handleStatusModal(type)}
      >
        <strong>{type === "login" ? "Đăng nhập" : "Đăng ký"}</strong>
      </div>
    </div>
  );
};

export default ChangeModal;
