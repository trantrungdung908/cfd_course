import Button from "@/components/Button";
import PATHS from "@/constants/path";
import { TEACHER_ROLES } from "@/constants/roles";
import { useAuthContext } from "@/context/AuthContext";
import useMutation from "@/hooks/useMutation";
import { courseService } from "@/services/courseService";
import { orderService } from "@/services/orderService";
import { formatPrice } from "@/utils/format";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import FormCourseOrder from "./components/FormCourseOrder";
import InforCourseOrder from "./components/InforCourseOrder";
import PaymentCourseOrder from "./components/PaymentCourseOrder";

const CourseOrderPage = () => {
  const { courseOrderSlug } = useParams();
  const navigate = useNavigate();

  const formDataRef = useRef();

  const {
    profile,
    messageApi,
    handleGetInfoCourse,
    handleGetInfoCoursePayment,
    profileCourse = [],
  } = useAuthContext();

  const isAlreadyOrder = profileCourse?.find(
    (item) => item.course.slug === courseOrderSlug
  );

  const {
    firstName: profileName,
    email: profileEmail,
    phone: profilePhone,
  } = profile || {};

  const [typePayment, setTypePayment] = useState("");

  useEffect(() => {
    if (profile.id) {
      formDataRef?.current?.setForm({
        name: profileName || "",
        email: profileEmail || "",
        phone: profilePhone || "",
      });
    }
  }, [profile.id]);

  const {
    data,
    loading: loadingCourses,
    fetchApi: fetchCourseDetail,
  } = useMutation(courseService.getCourseBySlug);

  useEffect(() => {
    if (!courseOrderSlug) return;

    fetchCourseDetail(courseOrderSlug, {});
  }, [courseOrderSlug]);

  useEffect(() => {
    if (isAlreadyOrder?.id) {
      setTypePayment(isAlreadyOrder?.paymentMethod);
      formDataRef?.current?.setForm((pre) => ({
        ...pre,
        name: isAlreadyOrder?.name,
        phone: isAlreadyOrder?.phone,
        type: isAlreadyOrder?.type,
      }));
    }
  }, [isAlreadyOrder?.id]);

  const { teams, price, tags, id: idCourse } = data || {};

  const modifiedProps = useMemo(() => {
    return {
      ...data,
      price: formatPrice(price),
      teacherInfor: teams?.find((team) =>
        team?.tags.includes(TEACHER_ROLES.teacher)
      ),
    };
  }, [data]);

  const { loading: loadingPostCourse, fetchApi: postOrderCourse } = useMutation(
    orderService.postOrder
  );

  const _onOrderSubmit = useCallback(() => {
    const profileData = formDataRef?.current.onSubmitForm();
    if (!profileData) return;
    const {
      name: profileName,
      phone: profilePhone,
      type: typeLearning,
    } = profileData;
    if (typePayment) {
      const payload = {
        name: profileName,
        phone: profilePhone,
        course: idCourse,
        type: typeLearning,
        paymentMethod: typePayment,
      };

      postOrderCourse(payload, {
        onSuccess: async () => {
          messageApi.success("Đăng ký thành công");
          navigate(PATHS.STUDENT_PROFILE.COURSE);
          await handleGetInfoCourse();
          await handleGetInfoCoursePayment();
        },
        onError: () => {
          messageApi.error("Đăng ký thất bại");
        },
      });
    } else {
      messageApi.error("Vui lòng chọn phương thức thanh toán");
    }
  }, [typePayment]);

  return (
    <main className="mainwrapper --ptop">
      <section className="sccourseorder">
        <div className="container small">
          <InforCourseOrder {...modifiedProps} />

          <FormCourseOrder
            tags={tags}
            disabled={!!isAlreadyOrder}
            ref={formDataRef}
          />

          <PaymentCourseOrder
            typePayment={typePayment}
            setTypePayment={setTypePayment}
            disabled={!!isAlreadyOrder}
          />
          {/* addclass --processing khi bấm đăng ký */}
          <AlreadyButton
            loading={loadingPostCourse}
            onClick={_onOrderSubmit}
            disabled={!!isAlreadyOrder}
          >
            <span>
              {!!isAlreadyOrder ? "Khoá học đã đăng ký" : "Đăng ký khoá học"}
            </span>
          </AlreadyButton>
        </div>
      </section>
    </main>
  );
};

const AlreadyButton = styled(Button)`
  width: 100%;
`;

export default CourseOrderPage;
