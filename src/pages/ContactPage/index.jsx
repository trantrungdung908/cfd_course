import React from "react";
import ContactTitle from "./components/ContactTitle";
import ContactSidebar from "./components/ContactSidebar";
import ContactForm from "./components/ContactForm";
import { useNavigate } from "react-router-dom";
import { subscribeService } from "@/services/subscribeService";
import PATHS from "@/constants/path";
import useMutation from "@/hooks/useMutation";
import { useAuthContext } from "@/context/AuthContext";

const ContactPage = () => {
  const navigate = useNavigate();
  const { messageApi } = useAuthContext();

  const { loading, data, error, fetchApi } = useMutation(
    subscribeService.postSubscribe
  );

  const handleFormSubmit = async (formData) => {
    if (!formData) return;
    const payload = {
      name: formData.name,
      title: formData.topic,
      email: formData.email,
      description: formData.content,
    };

    fetchApi(payload, {
      onSuccess: (res) => {
        if (res) {
          navigate(PATHS.HOME);
          messageApi.success("Liên hệ thành công!");
        }
      },
      onError: (error) => {
        return error;
      },
    });
  };

  return (
    <main className="mainwrapper contact --ptop">
      <ContactTitle />
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSidebar />
            <ContactForm
              loading={loading}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
