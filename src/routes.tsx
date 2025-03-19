import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import { AuthLayout, MainLayout, ProtectedRoute } from "./layouts";
import About from "./pages/about";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Resources from "./pages/resources";
import DigitalLiteracy from "./pages/resources/digital-literacy";
import Help from "./pages/support/help";
import Volunteer from "./pages/support/volunteer";
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
      { path: "resources/digital-literacy", element: <DigitalLiteracy /> },
      { path: "support/help", element: <Help /> },
      { path: "support/volunteer", element: <Volunteer /> },
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
