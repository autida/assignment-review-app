import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import packageJson from "../package.json";

//layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";

const projectName = packageJson.name;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/assignment-review-app/"} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/service"} element={<Service />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/*"} element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
