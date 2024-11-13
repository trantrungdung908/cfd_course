import React, { forwardRef } from "react";

const FormItem = (
  { label, isRequired, error, renderInput, ...restProps },
  ref
) => {
  return (
    <div className="form-group">
      {label && (
        <label className="label">
          {label} {isRequired && <span>*</span>}
        </label>
      )}
      {renderInput ? (
        renderInput({ label, error, ...restProps })
      ) : (
        <input
          ref={ref}
          type="text"
          className={`form__input ${error ? "formerror" : ""} `}
          {...restProps}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default forwardRef(FormItem);
