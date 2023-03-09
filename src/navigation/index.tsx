import { createBrowserRouter } from "react-router-dom";
import SignedInRoutes from "./SignedInRoutes";
import SignInRoutes from "./SignInRoutes";

let auth = true;

const Routes = createBrowserRouter(!auth ? SignedInRoutes : SignInRoutes);

export default Routes;
