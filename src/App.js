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
    <Route path={projectName + "/"} element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path={projectName + "/about"} element={<About />} />
      <Route path={projectName + "/service"} element={<Service />} />
      <Route path={projectName + "/contact"} element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
