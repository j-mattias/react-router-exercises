import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App, Settings, Stats } from "./components";
import { About, Contact, Home, Dashboard } from "./pages";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
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
            element: <Stats />
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
    ],
  },
]);

export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<Home />} index />
      <Route element={<About />} path="about" />
      <Route element={<Contact />} path="contact" />
      <Route element={<Dashboard />} path="dashboard">
        <Route element={<Stats />} index />
        <Route element={<Stats />} path="/dashboard/stats" />
        <Route element={<Settings />} path="/dashboard/settings" />
      </Route>
    </Route>
  )
);
