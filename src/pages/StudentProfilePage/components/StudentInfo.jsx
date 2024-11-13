import Button from "@/components/Button";
import FormItem from "@/components/Form";
import Textarea from "@/components/Textarea";
import { REGEX } from "@/constants/regex";
import { useAuthContext } from "@/context/AuthContext";
import React, { useEffect, useRef, useState } from "react";

const StudentInfo = () => {
  const { profile, handleUpdateProfile } = useAuthContext();
  const refInput = useRef();

  const initialInfo = useRef({
    name: "",
    email: "",
    phone: "",
    facebookURL: "",
    website: "",
    introduce: "",
  });

  const [userInfo, setUserInfo] = useState(initialInfo);

  const [error, setError] = useState({});

  useEffect(() => {
    if (profile) {
      const { firstName, email, phone, facebookURL, website, introduce } =
        profile;
      setUserInfo({
        name: firstName,
        email,
        phone,
        facebookURL,
        website,
        introduce,
      });
      const newData = {
        name: firstName,
        email,
        phone,
        facebookURL,
        website,
        introduce,
      };
      initialInfo.current = newData;
    }
  }, [profile]);

  useEffect(() => {
    refInput?.current?.focus();
  }, []);

  const isInfoChanged =
    JSON.stringify(initialInfo.current) !== JSON.stringify(userInfo);

  const register = (info) => {
    return {
      name: info,
      error: error[info],
      value: userInfo[info],
      onChange: (e) => setUserInfo({ ...userInfo, [info]: e.target.value }),
    };
  };

  const _onSubmit = () => {
    const objectError = {};

    if (!userInfo.name) {
      objectError.name = "Vui lòng nhập tên";
    }
    if (!userInfo.phone) {
      objectError.phone = "Vui lòng nhập số điện thoại";
    } else if (!REGEX.phone.test(userInfo.phone)) {
      objectError.phone = "Vui lòng nhập đúng định dạng phone";
    }

    if (userInfo.facebookURL && !REGEX.website.test(userInfo.facebookURL)) {
      objectError.facebookURL = "Vui lòng nhập đúng định dạng website";
    }

    if (userInfo.website && !REGEX.website.test(userInfo.website)) {
      objectError.website = "Vui lòng nhập đúng định dạng website";
    }

    setError(objectError);

    if (Object.keys(objectError).length > 0) {
      console.log("Submit error", objectError);
    } else {
      // call API
      handleUpdateProfile?.(userInfo);
    }
  };

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="form">
        <div className="form-container">
          <FormItem
            label={"Họ và tên"}
            isRequired
            {...register("name")}
            ref={refInput}
          />
          <FormItem label={"Số điện thoại"} isRequired {...register("phone")} />
        </div>
        <div className="form-container">
          <FormItem
            label={"Email"}
            isRequired
            disabled
            defaultValue={userInfo?.email}
          />
          <FormItem
            label={"Mật khẩu"}
            isRequired
            disabled
            type={"password"}
            defaultValue={12345568900}
          />
        </div>

        <FormItem label={"Facebook URL"} {...register("facebookURL")} />
        <FormItem label={"Website"} {...register("website")} />

        <FormItem
          {...register("introduce")}
          label={"Giới thiệu bản thân"}
          renderInput={(inputProps) => {
            return <Textarea {...inputProps} />;
          }}
        />

        <Button
          style={{
            width: "100%",
            pointerEvents: isInfoChanged ? "auto" : "none",
          }}
          onClick={_onSubmit}
          disabled={!isInfoChanged}
        >
          Lưu lại
        </Button>
      </div>
    </div>
  );
};

export default StudentInfo;
