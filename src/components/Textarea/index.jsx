import React from "react";

const Textarea = ({ error, ...restProps }) => {
  return (
    <textarea
      className={`form__input ${error ? "formerror" : ""}`}
      {...restProps}
    />
  );
};

export default Textarea;
