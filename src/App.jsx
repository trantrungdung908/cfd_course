import { BrowserRouter, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

import PATHS from "./constants/path";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ChangePassPage = lazy(() => import("./pages/ChangePassPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CourseDetailsPage = lazy(() => import("./pages/CourseDetailsPage"));
const CourseOrderPage = lazy(() => import("./pages/CourseOrderPage"));
const CoursePage = lazy(() => import("./pages/CoursePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const StudentProfilePage = lazy(() => import("./pages/StudentProfilePage"));
const StudentCourse = lazy(() =>
  import("./pages/StudentProfilePage/components/StudentCourse")
);
const StudentInfo = lazy(() =>
  import("./pages/StudentProfilePage/components/StudentInfo")
);
const StudentPayment = lazy(() =>
  import("./pages/StudentProfilePage/components/StudentPayment")
);
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const Loading = lazy(() => import("./components/LoadingPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />

            <Route path={PATHS.ABOUT} element={<AboutPage />} />

            <Route path={PATHS.COURSES.INDEX} element={<CoursePage />} />
            <Route
              path={PATHS.COURSES.DETAIL}
              element={<CourseDetailsPage />}
            />
            <Route path={PATHS.COURSES.ORDER} element={<CourseOrderPage />} />

            <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
            <Route path={PATHS.BLOG.DETAIL} element={<BlogDetailsPage />} />

            <Route path={PATHS.CONTACT} element={<ContactPage />} />

            <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />

            <Route path={PATHS.PAYMENT} element={<PaymentPage />} />

            <Route element={<PrivateRoute />}>
              <Route
                path={PATHS.STUDENT_PROFILE.INDEX}
                element={<StudentProfilePage />}
              >
                <Route index element={<StudentInfo />} />
                <Route
                  path={PATHS.STUDENT_PROFILE.COURSE}
                  element={<StudentCourse />}
                />
                <Route
                  path={PATHS.STUDENT_PROFILE.PAYMENT}
                  element={<StudentPayment />}
                />
              </Route>
            </Route>

            <Route path={PATHS.CHANGE_PASS} element={<ChangePassPage />} />

            <Route path={PATHS.NOTFOUND} element={<NotFoundPage />} />
          </Route>
        </Routes>
        {/* </MainLayout> */}
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
