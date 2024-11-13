import { authService } from "@/services/authService";
import { orderService } from "@/services/orderService";
import { tokenMethod } from "@/utils/tokenMethod";
import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [statusModal, setStatusModal] = useState("");
  const [profile, setProfile] = useState({});
  const [profileCourse, setProfileCourse] = useState([]);
  const [paymentCourse, setPaymentCourse] = useState([]);
  useEffect(() => {
    if (tokenMethod.get()) {
      handleGetInfo();
      handleGetInfoCourse();
      handleGetInfoCoursePayment();
    }
  }, [tokenMethod.get()?.accessToken]);

  const handleStatusModal = (type) => {
    setStatusModal(type || "");
  };

  const handleCloseModal = (e) => {
    e?.stopPropagation();

    setStatusModal("");
  };

  const handleLogin = async (params, callback) => {
    const payload = {
      email: params.email,
      password: params.password,
    };

    try {
      const res = await authService.login(payload);
      const { token: accessToken, refreshToken } = res?.data?.data || {};
      if (accessToken) {
        // Cookies.set("cfd-token", JSON.stringify({ accessToken, refreshToken }));
        tokenMethod.set({ accessToken, refreshToken });
        handleGetInfo();
        messageApi.success("Đăng nhập thành công");
        handleCloseModal();
      }
    } catch (error) {
      messageApi.error("Đăng nhập thất bại");
    } finally {
      callback?.();
    }
  };

  const handleRegister = async (params, callback) => {
    const payload = {
      firstName: params.name,
      lastName: "",
      email: params.email,
      password: params.password,
    };
    try {
      const res = await authService.register(payload);

      if (res?.data?.data?.id) {
        messageApi.success("Đăng ký thành công");
        await handleLogin({ email: params.email, password: params.password });
      }
    } catch (error) {
      if (error.response?.data.statusCode === 403) {
        return messageApi.error("Email đã tồn tại");
      } else {
        message.error("Đăng ký thất bại");
      }
    } finally {
      callback?.();
    }
  };

  const handleLogout = () => {
    tokenMethod.remove();
    setProfile({});
    setPaymentCourse([]);
    setProfileCourse([]);
    message.success("Đăng xuất thành công");
  };

  const handleGetInfo = async () => {
    try {
      const resInfo = await authService.getProfile();
      if (resInfo?.data?.data) {
        setProfile(resInfo.data.data);
      }
    } catch (error) {
      handleLogout();
    }
  };

  const handleGetInfoCourse = async () => {
    try {
      const resInfo = await orderService.getOrderMyCourses();

      if (resInfo?.fullData?.orders) {
        setProfileCourse(resInfo.fullData.orders);
      }
    } catch (error) {
      return error;
    }
  };

  const handleGetInfoCoursePayment = async () => {
    try {
      const resInfo = await orderService.getOrderMyPayment();

      if (resInfo?.fullData?.orders) {
        setPaymentCourse(resInfo.fullData.orders);
      }
    } catch (error) {
      return error;
    }
  };

  const handleUpdateProfile = async (formData) => {
    if (!formData) return;

    const { name, phone, facebookURL, website, introduce } = formData;
    const payload = {
      firstName: name,
      lastName: "",
      facebookURL,
      website,
      phone,
      introduce,
    };

    try {
      const resInfo = await authService.updateProfile(payload);
      setProfile(resInfo?.fullData);
      message.success("Cập nhật thành công");
    } catch (error) {
      message.error("Cập nhật thất bại");
      return error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        statusModal,
        messageApi,
        profile,
        profileCourse,
        paymentCourse,
        handleStatusModal,
        handleCloseModal,
        handleLogin,
        handleRegister,
        handleLogout,
        handleGetInfoCourse,
        handleGetInfoCoursePayment,
        handleUpdateProfile,
      }}
    >
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
