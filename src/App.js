import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/admin/AdminLogin/AdminLogin";
import AdminPage from "./pages/admin/AdminPage/AdminPage";
import CreateUser from "./pages/admin/CreateUser/CreateUser";
import CreateUserSuccess from "./pages/admin/CreateUserSuccess/CreateUserSuccess";
import ManageUsers from "./pages/admin/ManageUsers/ManageUsers";
import EditRequest from "./pages/admin/EditRequest/EditRequest";
import CreateSockbroker from "./pages/admin/CreateSockbroker/CreateSockbroker";
import UpdateRequirement from "./pages/admin/UpdateRequirement/UpdateRequirement";
import StockbrokerLogin from "./pages/admin/StockbrokerLogin/StockbrokerLogin";
import ChangePassword from "./pages/admin/ChangePassword/ChangePassword";
import Subscription from "./pages/admin/Subscription/Subscription";
import ChoosePayment from "./pages/admin/ChoosePayment/ChoosePayment";
import IndemnityAgreement from "./pages/admin/IndemnityAgreement/IndemnityAgreement";
import ForgotPassword from "./pages/admin/ForgotPassword/ForgotPassword";
import CreateNewPassword from "./pages/admin/CreateNewPassword/CreateNewPassword";
import CreateNewPasswordSuccess from "./pages/admin/CreateNewPasswordSuccess/CreateNewPasswordSuccess";
import RequestPayment from "./pages/admin/RequestPayment/RequestPayment";
import InitiatorDashboard from "./pages/initiatorDashboard/initiatorDashboard";
import VerificationDashboard from "./pages/verificationUnit/verificationUnitDashboard";
import StockbrokerDashboard from "./pages/stockbrokerDashboard/StockbrokerDashboard";
import InternalControlDashboard from "./pages/internalControl/internalControl";
import { GlobalContextProvider } from "./contexts/Authentication/GlobalContext";
import { UserCreationContextProvider } from "./contexts/Authentication/UserCreationContext";
import Logout from "./components/logout";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <div className="App">
        <GlobalContextProvider>
          <UserCreationContextProvider>
            <ToastContainer />
            <Switch>
              <Route exact path="/core-login" component={AdminLogin} />
              <Route path="/adminDashboard" component={AdminPage} />
              <Route path="/create-user" component={CreateUser} />
              <Route
                path="/create-user-success"
                component={CreateUserSuccess}
              />
              <Route path="/manage-users" component={ManageUsers} />
              <Route path="/edit-request" component={EditRequest} />
              <Route path="/create-stockbroker" component={CreateSockbroker} />
              <Route
                path="/update-requirement"
                component={UpdateRequirement}
              />{" "}
            </Switch>
          </UserCreationContextProvider>

          <Switch>
            <Route path="/user-login" component={StockbrokerLogin} />
            <Route path="/change-password" component={ChangePassword} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/create-password" component={CreateNewPassword} />
            <Route path="/create-password" component={CreateNewPassword} />
            <Route
              path="/create-password-success"
              component={CreateNewPasswordSuccess}
            />
            <Route path="/subscription" component={Subscription} />
            <Route path="/choose-payment" component={ChoosePayment} />
            <Route
              path="/requests/request-payment"
              component={RequestPayment}
            />
            <Route path="/indemnity-agreement" component={IndemnityAgreement} />
            <Route
              path="/stockbrokerDashboard"
              component={StockbrokerDashboard}
            />
            <Route path="/initiatorDashboard" component={InitiatorDashboard} />
            <Route
              path="/verificationDashboard"
              component={VerificationDashboard}
            />
            <Route
              path="/internalcontrol"
              component={InternalControlDashboard}
            />
            <Route path="/logout" component={Logout} />
          </Switch>
        </GlobalContextProvider>
      </div>
    </Router>
  );
}

export default App;
