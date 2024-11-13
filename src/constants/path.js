const ABOUT_PATH = "/about";
const COURSE_PATH = "/courses";
const COURSE_ORDER_PATH = "/course-order";
const BLOG_PATH = "/blog";
const CONTACT_PATH = "/contact";
const PRIVACY_PATH = "/privacy";
const PAYMENT_PATH = "/payment";
const STUDENT_PROFILE_PATH = "/student-profile";
const CHANGE_PASS_PATH = "/change-pass";

const NOTFOUND_PATH = "*";

const PATHS = {
  HOME: "/",

  ABOUT: ABOUT_PATH,
  COURSES: {
    INDEX: COURSE_PATH,
    DETAIL: `${COURSE_PATH}/:coursesSlug`,
    ORDER: `${COURSE_ORDER_PATH}/:courseOrderSlug`,
  },

  BLOG: {
    INDEX: BLOG_PATH,
    DETAIL: `${BLOG_PATH}/:blogSlug`,
  },

  CONTACT: CONTACT_PATH,
  PRIVACY: PRIVACY_PATH,
  PAYMENT: PAYMENT_PATH,

  STUDENT_PROFILE: {
    INDEX: STUDENT_PROFILE_PATH,
    COURSE: `${STUDENT_PROFILE_PATH}/course`,
    PAYMENT: `${STUDENT_PROFILE_PATH}/payment`,
  },

  CHANGE_PASS: CHANGE_PASS_PATH,

  NOTFOUND: NOTFOUND_PATH,
};

export default PATHS;
