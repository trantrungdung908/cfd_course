import FormItem from "@/components/Form";
import Select from "@/components/Select";
import { REGEX } from "@/constants/regex";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const FormCourseOrder = ({ tags = [], disabled }, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    type: "",
  });

  const [error, setError] = useState({});

  const _onSubmit = () => {
    const objectError = {};

    if (!formData.name) {
      objectError.name = "Vui lòng nhập tên";
    }

    if (!!!formData.phone) {
      objectError.phone = "Vui lòng nhập phone";
    } else if (!REGEX.phone.test(formData.phone)) {
      objectError.phone = "Vui lòng nhập đúng định dạng phone";
    }
    if (!formData.type) {
      objectError.type = "Vui lòng chọn hình thức học";
    }

    setError(objectError);

    if (Object.keys(objectError).length > 0) {
      return null;
    } else {
      return formData;
    }
  };

  useImperativeHandle(ref, () => {
    return {
      onSubmitForm: _onSubmit,
      setForm: setFormData,
    };
  });

  const register = (infoUser) => {
    return {
      name: infoUser,
      error: error[infoUser],
      value: formData[infoUser] || "",
      onChange: (e) =>
        setFormData({
          ...formData,
          [infoUser]: e.target.value,
        }),
    };
  };

  const optionsDefault = { value: "", label: "--" };

  const typesLearning =
    tags?.length > 0
      ? [
          optionsDefault,
          ...tags?.map((item) => {
            return {
              value: item,
              label: item,
            };
          }),
        ]
      : [
          { value: "", label: "--" },
          { value: "react", label: "ReactJs" },
          { value: "responsive", label: "Web Responsive" },
        ];

  return (
    <div>
      <div className="itemorder formorder">
        <h3 className="title --t3">Thông tin cá nhân</h3>
        <div className="boxorder">
          <div className="form">
            <div className="form-container">
              <FormItem
                label={"Họ và tên"}
                isRequired
                {...register("name")}
                disabled={disabled}
              />

              <FormItem
                label={"Email"}
                isRequired
                type="email"
                disabled
                {...register("email")}
              />
            </div>
            <div className="form-container">
              <FormItem
                label={"Số điện thoại"}
                isRequired
                {...register("phone")}
                disabled={disabled}
              />

              <FormItem
                {...register("type")}
                label={"Hình thức học"}
                isRequired
                disabled={disabled}
                renderInput={(inputProps) => {
                  return <Select options={typesLearning} {...inputProps} />;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(forwardRef(FormCourseOrder));
