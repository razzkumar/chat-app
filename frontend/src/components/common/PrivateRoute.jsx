import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getJWT } from "../../utils/helpers";
export default function PrivateRoute({ component: Component, ...rest }) {
  let auth = getJWT();
  return (
    <Route
      {...rest}
      render={props =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
