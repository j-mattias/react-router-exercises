import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App, ProtectedRoute, Settings, Stats } from "./components";
import { About, Contact, Home, Dashboard, NotFound, OldHome, Account, Login, UserProfile, SensitiveInfo, HomeTwo, AboutTwo, ContactTwo, Layout, One, Two, Three } from "./pages";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    // https://reactrouter.com/en/main/route/error-element
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Stats />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      // https://reactrouter.com/en/main/start/faq#how-do-i-add-a-no-match-404-route-in-react-router-v6
      // {
      //   path: "*",
      //   element: <NotFound />
      // }
      {
        path: "old-home",
        element: <OldHome />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "account",
            element: <Account />
          },
          {
            path: "sensitive-info",
            element: <SensitiveInfo />
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "user/:id?",
        element: <UserProfile />,
      },
      {
        path: "home-two",
        element: <HomeTwo />
      },
      {
        path: "about-two",
        element: <AboutTwo />
      },
      {
        path: "contact-two",
        element: <ContactTwo />
      },
      {
        path: "layout",
        element: <Layout />,
        children: [
          {
            path: "one",
            element: <One />
          },
          {
            path: "two",
            element: <Two />
          },
          {
            path: "three",
            element: <Three />
          }
        ]
      }
    ],
  },
]);

export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/" errorElement={<NotFound />}>
      <Route element={<Home />} index />
      <Route element={<About />} path="about" />
      <Route element={<Contact />} path="contact" />
      <Route element={<Dashboard />} path="dashboard">
        <Route element={<Stats />} index />
        <Route element={<Stats />} path="/dashboard/stats" />
        <Route element={<Settings />} path="/dashboard/settings" />
      </Route>
      <Route element={<OldHome />} path="old-home" />
      {/* <Route element={<NotFound />} path="*" /> */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Account />} path="account" />
        <Route element={<SensitiveInfo />} path="sensitive-info" />
      </Route>
      <Route element={<Login />} path="login" />
      <Route element={<UserProfile />} path="user/:id?" />
      <Route element={<Layout />}>
        <Route element={<One />} path="one" />
        <Route element={<Two />} path="two" />
        <Route element={<Three />} path="three" />
      </Route>
    </Route>
  )
);
