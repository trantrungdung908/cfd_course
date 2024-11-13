import React from "react";

const SocialAuth = () => {
  return (
    <div className="social">
      <a className="btn btn--google" href="#">
        <i>
          <img src="/img/icon-google.svg" alt="Google CFD" />
        </i>
        <span>Đăng nhập bằng Google</span>
      </a>
      <a className="btn btn--facebook" href="#">
        <i>
          <img src="/img/icon-facebook-v2.svg" alt="Google CFD" />
        </i>
        <span>Đăng nhập bằng Google</span>
      </a>
    </div>
  );
};

export default SocialAuth;
