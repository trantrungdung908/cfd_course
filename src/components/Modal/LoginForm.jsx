import Button from "@/components/Button";
import FormItem from "@/components/Form";
import { useAuthContext } from "@/context/AuthContext";
import React, { useState } from "react";
import SocialAuth from "./components/SocialAuth";
import ChangeModal from "./components/ChangeModal";
import { REGEX } from "@/constants/regex";
import LoadingComponent from "../LoadingComponent";

const LoginForm = () => {
  const { handleLogin } = useAuthContext();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({});

  const _onSubmit = (e) => {
    e.preventDefault();

    const objectError = {};

    if (!loginValue.email) {
      objectError.email = "Vui lòng nhập email";
    } else if (!REGEX.email.test(loginValue.email.trim())) {
      objectError.email = "Vui lòng nhập đúng định dạng email";
    }
    if (!loginValue.password) {
      objectError.password = "Vui lòng nhập mật khẩu";
    }

    setError(objectError);

    if (Object.keys(objectError).length > 0) {
      console.log("ERROR", objectError);
    } else {
      setLoading(true);

      handleLogin(loginValue, () => {
        setLoading(false);
      });
      // handleLogin(loginValue,)
      // setTimeout(() => {
      //   handleCloseModal();
      //   messageApi.success("Đăng nhập thành công");
      // }, 1500);
    }
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };
  return (
    <div
      className="modal__wrapper-content mdlogin active"
      style={{
        position: "relative",
      }}
    >
      {loading && <LoadingComponent />}
      <ChangeModal type={"register"} />
      <SocialAuth />
      <span className="line">Hoặc</span>
      <form onSubmit={_onSubmit} className="form">
        <FormItem
          onChange={handleValue}
          name="email"
          label={"Email"}
          isRequired
          placeholder="Email"
          error={error.email}
          value={loginValue.email}
        />

        <FormItem
          name="password"
          label={"Mật khẩu"}
          isRequired
          onChange={handleValue}
          type="password"
          placeholder="Mật khẩu"
          error={error.password}
          value={loginValue.password}
        />

        <div className="form__bottom">
          <a className="color--primary" href="#">
            Quên mật khẩu?
          </a>
        </div>
        {/* <button className="btn btn--primary form__btn-register" type="submit">
          Đăng nhập
        </button> */}
        <Button variant={"primary"} className={"form__btn-register"}>
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
