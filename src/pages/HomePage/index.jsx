import useQuery from "@/hooks/useQuery";
import { courseService } from "@/services/courseService";
import { galleryService } from "@/services/galleryService";
import { questionService } from "@/services/questionsService";
import { teamService } from "@/services/teamService";
import HomeCallRegister from "./components/HomeCallRegister";
import HomeCourse from "./components/HomeCourse";
import HomeCourseComing from "./components/HomeCourseComing";
import HomeFaq from "./components/HomeFaq";
import HomeFeatured from "./components/HomeFeatured";
import HomeGallery from "./components/HomeGallery";
import HomeHero from "./components/HomeHero";
import HomeTeacher from "./components/HomeTeacher";
import HomeTestimonial from "./components/HomeTestimonial";
import useDebounce from "@/hooks/useDebounce";
import Loading from "@/components/LoadingPage";

const HomePage = () => {
  const {
    data: coursesData,
    loading: loadingCourses,
    error: errorCourses,
  } = useQuery(courseService.getAllCourses);

  const {
    data: teamsData,
    loading: loadingTeams,
    error: errorTeams,
  } = useQuery(teamService.getTeams);

  const {
    data: questionsData,
    loading: loadingQuestions,
    error: errorQuestions,
  } = useQuery(questionService.getQuestions);

  const {
    data: galleriesData,
    loading: loadingGalleries,
    error: errorGalleries,
  } = useQuery(galleryService.getAllGalleries);

  const coursesComing = coursesData?.courses?.filter(
    (course) => course.startDate && new Date(course.startDate) > new Date()
  );

  const apiLoading =
    loadingCourses || loadingTeams || loadingQuestions || loadingGalleries;

  const debouncedLoading = useDebounce(apiLoading, 300);

  if (debouncedLoading) {
    return <Loading />;
  }

  return (
    <main className="mainwrapper">
      <HomeHero />
      <HomeCourseComing
        coursesComing={coursesComing}
        loading={loadingCourses}
      />

      <HomeCourse courses={coursesData?.courses} loading={loadingCourses} />

      <HomeTeacher teamsData={teamsData?.teams} loading={loadingTeams} />

      <HomeFeatured />
      {/* --------------------------------Testimonial-------------------------------- */}
      <HomeTestimonial />
      {/* --------------------------------faq-------------------------------- */}
      <HomeFaq
        questionsData={questionsData?.questions || []}
        loading={loadingQuestions}
      />

      <HomeGallery
        galleriesData={galleriesData?.galleries}
        loading={loadingGalleries}
      />

      <HomeCallRegister />
    </main>
  );
};

export default HomePage;
