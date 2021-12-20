import React, { useContext } from "react";
import { AuthContext } from "./GlobalComponent";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: PrivateRoute, ...rest }) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(myProps) => {
        return currentUser ? (
          <PrivateRoute {...myProps} />
        ) : (
          <Redirect to="/register" />
        );
      }}
    />
  );
};

export default PrivateRoute;
