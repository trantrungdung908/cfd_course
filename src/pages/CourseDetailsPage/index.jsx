import useMutation from "@/hooks/useMutation";
import useQuery from "@/hooks/useQuery";
import { courseService } from "@/services/courseService";
import { questionService } from "@/services/questionsService";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import HomeFaq from "../HomePage/components/HomeFaq";
import CourseDetailsContent from "./components/CourseDetailsContent";
import CourseDetailsFeatued from "./components/CourseDetailsFeatued";
import CourseDetailsHero from "./components/CourseDetailsHero";
import CourseDetailsRelated from "./components/CourseDetailsRelated";
import CourseHeaderTop from "./components/CourseHeaderTop";
import { formatDate, formatPrice } from "@/utils/format";
import { TEACHER_ROLES } from "@/constants/roles";
import PATHS from "@/constants/path";
import useDebounce from "@/hooks/useDebounce";
import Loading from "@/components/LoadingPage";
import { useAuthContext } from "@/context/AuthContext";

const CourseDetailsPage = () => {
  const { coursesSlug } = useParams();

  const { profileCourse } = useAuthContext();

  const isAlreadyOrder = profileCourse?.find(
    (item) => item?.course.slug === coursesSlug
  );

  const {
    data: courseDetailsData,
    loading: loadingCourseDetails,
    fetchApi: fetchCourseBySlug,
  } = useMutation(courseService.getCourseBySlug);

  const {
    data: coursesData,
    loading: loadingCourses,
    error: errorCourses,
  } = useQuery(courseService.getAllCourses);

  const {
    data: questionsData,
    loading: loadingQuestions,
    error: errorQuestions,
  } = useQuery(questionService.getQuestions);

  useEffect(() => {
    if (coursesSlug) {
      fetchCourseBySlug(coursesSlug || "", {});
    }
  }, [coursesSlug]);

  const { teams, startDate, price } = courseDetailsData || {};

  const modifyProps = useMemo(() => {
    return {
      ...courseDetailsData,
      price: formatPrice(price),
      startDate: formatDate(startDate),
      teacherInfor: teams?.find((team) =>
        team?.tags.includes(TEACHER_ROLES.teacher)
      ),
      orderLink: PATHS.COURSES.ORDER.replace(":courseOrderSlug", coursesSlug),
    };
  }, [courseDetailsData, coursesSlug]);

  const relatedCourses = coursesData?.courses?.filter(
    (course) => course.slug !== coursesSlug
  );

  const apiLoading = loadingCourseDetails || loadingCourses || loadingQuestions;

  const pageLoading = useDebounce(apiLoading, 500);

  if (pageLoading) {
    return <Loading />;
  }
  return (
    <>
      <CourseHeaderTop {...modifyProps} isAlreadyOrder={!!isAlreadyOrder} />

      <main className="mainwrapper coursedetailpage">
        <CourseDetailsHero {...modifyProps} isAlreadyOrder={!!isAlreadyOrder} />

        <CourseDetailsContent {...modifyProps} />

        <CourseDetailsFeatued />

        <HomeFaq
          questionsData={questionsData?.questions || []}
          loading={loadingQuestions}
        />

        <CourseDetailsRelated relatedCourses={relatedCourses} />
      </main>
    </>
  );
};

export default CourseDetailsPage;
