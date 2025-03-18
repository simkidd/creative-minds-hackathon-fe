import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import { AuthLayout, MainLayout, ProtectedRoute } from "./layouts";
import About from "./pages/about";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Contact from "./pages/contact";
import Courses from "./pages/course";
import CourseDetail from "./pages/course/details";
import Home from "./pages/home";
import Resources from "./pages/resources";
import Volunteer from "./pages/volunteer";
import Profile from "./pages/profile";
// import JobListings from "./pages/job";
// import JobDetails from "./pages/job/details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "contact-us", element: <Contact /> },
      { path: "resources", element: <Resources /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:courseId",
        element: <CourseDetail />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "volunteer", element: <Volunteer /> },
    ],
  },

  // {
  //   path: "/jobs",
  //   element: <JobListings />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/jobs/:jobId",
  //   element: <JobDetails />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/",
  //   element: <DashboardLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [],
  // },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
