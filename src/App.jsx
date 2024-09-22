import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import UserAuthPage from "./pages/UserAuthPage";
import Sigin from "./pages/Sigin";
import Signup from "./pages/Siginup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AnimateWrapper from "./components/animate-page";
import AppContext from "./components/AppContext";
import CreateBrand from "./pages/brand/Create-Brand";
function App() {
  return (
    <AppContext>
      <Routes>
        <Route
          path="/signin"
          element={
            <AnimateWrapper key={"signin"}>
              <Sigin />
            </AnimateWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <AnimateWrapper key={"signup"}>
              <Signup />
            </AnimateWrapper>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <AnimateWrapper key={"forgotpassword"}>
              <ForgotPassword />
            </AnimateWrapper>
          }
        />
        <Route
          path="/resetpassword"
          element={
            <AnimateWrapper key={"resetpassword"}>
              <ResetPassword />
            </AnimateWrapper>
          }
        />
        <Route path="/" element={<Dashboard />}>
          <Route path="admin" element={<UserAuthPage />} />
          <Route path="brand/create" element={<CreateBrand/>}/>
        </Route>
      </Routes>
    </AppContext>
  );
}

export default App;
