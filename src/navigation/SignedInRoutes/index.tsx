import { createRoutesFromElements, Navigate, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Layout from "~/pages/Layout";

const SignedInRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);

export default SignedInRoutes;
