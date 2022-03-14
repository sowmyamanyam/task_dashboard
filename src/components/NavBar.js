import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { removeUser, removeAccount, removeCustomers } from "../actions/usersAction";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";
import Dashboard from './Dashboard'

const NavBar = (props) => {

  const dispatchUser = useDispatch();
  const dispatchAccount = useDispatch();
  const dispatchCustomer = useDispatch()

  const { userLoggedIn, handleAuth } = props;

  return (
    <div>
      <p>
        {/* <span>
          <Link to="/">Home</Link>
        </span>{" "}
        | */}
        {userLoggedIn ? (
          <>
            <span>
              <Link to="/account">Account</Link>
            </span>{" "}
            |
            <span>
              <Link to="/dashboard">Dashboard</Link>
            </span>{" "}
            |
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                swal({
                  title: "Are you sure?",
                  text: "this will logout from your page!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((isLoggedOut) => {
                  if (isLoggedOut) {
                    localStorage.removeItem("token");

                    // resetting regUser, userAccount

                    dispatchUser(removeUser());
                    dispatchAccount(removeAccount());
                    dispatchCustomer(removeCustomers())
                    swal("successfully logged out", {
                      icon: "success",
                    });
                    handleAuth();
                    props.history.push("/");
                  }
                });
              }}
            >
              Logout
            </span>{" "}
          </>
        ) : (
          <>
            <span>
              <Link to="/register">Register</Link>
            </span>{" "}
            |
            <span>
              <Link to="/login">Login</Link>
            </span>
          </>
        )}
      </p>

      {/* <Route path="/" component={Home} exact={true} /> */}
      <Route path="/register" component={Register} />
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />;
        }}
      />
      <Route path="/account" component={Account} />
      <Route path = "/dashboard" component = {Dashboard} />
    </div>
  );
};
const WrappedComponent = withRouter(NavBar);
export default WrappedComponent;