import { createRoutesFromElements, Navigate, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Layout from "~/pages/Layout";

const SignInRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>
);
export default SignInRoutes;
