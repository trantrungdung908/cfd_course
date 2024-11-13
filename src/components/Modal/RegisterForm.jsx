import Button from "@/components/Button";
import FormItem from "@/components/Form";
import { useAuthContext } from "@/context/AuthContext";
import React, { useState } from "react";
import SocialAuth from "./components/SocialAuth";
import ChangeModal from "./components/ChangeModal";
import { Link } from "react-router-dom";
import PATHS from "@/constants/path";
import { REGEX } from "@/constants/regex";
import LoadingComponent from "../LoadingComponent";

const RegisterForm = () => {
  const { handleCloseModal, handleRegister } = useAuthContext();

  const [resgisterValue, setRegisterValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({});

  const _onSubmit = (e) => {
    e.preventDefault();

    const objectError = {};

    if (!resgisterValue.name) {
      objectError.name = "Vui lòng nhập tên";
    }

    if (!resgisterValue.email) {
      objectError.email = "Vui lòng nhập email";
    } else if (!REGEX.email.test(resgisterValue.email.trim())) {
      objectError.email = "Vui lòng nhập đúng định dạng email";
    }
    if (!resgisterValue.password) {
      objectError.password = "Vui lòng nhập mật khẩu";
    }
    if (!resgisterValue.confirmPassword) {
      objectError.confirmPassword = "Vui lòng nhập lại mật khẩu";
    } else if (resgisterValue.password !== resgisterValue.confirmPassword) {
      objectError.confirmPassword = "Mật khẩu không khớp";
    }

    setError(objectError);

    if (Object.keys(objectError).length > 0) {
      console.log("ERROR", objectError);
    } else {
      setLoading(true);

      handleRegister(resgisterValue, () => {
        setLoading(false);
      });
    }
  };

  const register = (registerField) => {
    return {
      name: registerField,
      error: error[registerField],
      value: resgisterValue[registerField],
      onChange: (e) =>
        setRegisterValue({
          ...resgisterValue,
          [registerField]: e.target.value,
        }),
    };
  };
  return (
    <div
      className="modal__wrapper-content mdregister active"
      style={{ position: "relative" }}
    >
      {loading && <LoadingComponent />}
      <ChangeModal type={"login"} />
      <SocialAuth />
      <span className="line">Hoặc</span>
      <form onSubmit={_onSubmit} className="form">
        <FormItem
          {...register("name")}
          placeholder="Họ và tên"
          label={"Họ và tên"}
          isRequired
        />

        <FormItem
          {...register("email")}
          placeholder="Email"
          label={"Email"}
          isRequired
        />

        <FormItem
          {...register("password")}
          type="password"
          placeholder="Mật khẩu"
          isRequired
          label={"Mật khẩu"}
        />
        <FormItem
          {...register("confirmPassword")}
          type="password"
          placeholder="Xác nhận mật khẩu"
          label={"Xác nhận mật khẩu"}
          isRequired
        />

        <p className="form__argee">
          Với việc đăng ký, bạn đã đồng ý{" "}
          <Link
            className="color--primary"
            to={PATHS.PRIVACY}
            onClick={handleCloseModal}
          >
            Chính Sách Điều Khoản
          </Link>{" "}
          của CFD
        </p>

        <Button variant={"primary"} className={"form__btn-register"}>
          Đăng ký tài khoản
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
