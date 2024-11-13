import Button from "@/components/Button";
import FormItem from "@/components/Form";
import Select from "@/components/Select";
import Textarea from "@/components/Textarea";
import { REGEX } from "@/constants/regex";
import { Spin } from "antd";
import React, { useState } from "react";

const ContactForm = ({ handleFormSubmit, loading }) => {
  const [valueInput, setValueInput] = useState({
    value: {
      name: "",
      email: "",
      phone: "",
    },
    error: {},
  });

  const handleValue = (e) => {
    const { value, name } = e.target;
    setValueInput({
      ...valueInput,
      value: { ...valueInput.value, [name]: value },
    });
  };

  const _onSubmit = () => {
    const objectError = {};
    if (!valueInput.value.name) {
      objectError.name = "Họ và tên không được để trống";
    }

    if (!valueInput.value.email) {
      objectError.email = "Vui lòng nhập email";
    } else if (!REGEX.email.test(valueInput.value.email.trim())) {
      objectError.email = "Vui lòng nhập đúng định dạng email";
    }

    if (!valueInput.value.phone) {
      objectError.phone = "Vui lòng nhập phone";
    } else if (!REGEX.phone.test(valueInput.value.phone)) {
      objectError.phone = "Vui lòng nhập đúng định dạng phone";
    }

    if (!valueInput.value.topic) {
      objectError.topic = "Vui lòng chọn chủ đề";
    }

    if (!valueInput.value.content) {
      objectError.content = "Vui lòng nhập nội dung";
    }
    setValueInput({ ...valueInput, error: objectError });
    if (Object.keys(objectError).length > 0) {
      console.log("Submit error", objectError);
    } else {
      // call API
      handleFormSubmit(valueInput.value);
    }
  };

  return (
    <div className="form">
      <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
      <FormItem
        name="name"
        onChange={handleValue}
        value={valueInput.value.name}
        label={"Họ và tên"}
        isRequired
        error={valueInput.error.name}
      />

      <FormItem
        error={valueInput.error.email}
        name="email"
        onChange={handleValue}
        value={valueInput.value.email}
        label={"Email"}
        isRequired
      />

      <FormItem
        error={valueInput.error.phone}
        name="phone"
        onChange={handleValue}
        value={valueInput.value.phone}
        label={"Phone"}
        isRequired
      />

      <FormItem
        error={valueInput.error.topic}
        name="topic"
        onChange={handleValue}
        value={valueInput.value.topic}
        label={"Chủ đề cần hỗ trợ"}
        isRequired
        renderInput={(inputProps) => {
          return (
            <Select
              options={[
                { value: "", label: "--" },
                { value: "react", label: "ReactJs" },
                { value: "responsive", label: "Web Responsive" },
              ]}
              {...inputProps}
            />
          );
        }}
      />

      <FormItem
        error={valueInput.error.content}
        name="content"
        onChange={handleValue}
        value={valueInput.value.content}
        label={"Nội dung"}
        isRequired
        renderInput={(inputProps) => {
          return <Textarea {...inputProps} />;
        }}
      />
      <div className="btncontrol">
        <Button onClick={_onSubmit} variant={"primary"}>
          {loading ? <Spin /> : "Gửi"}
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
