import React from "react";
import { Navigate, Route } from "react-router-dom";
import LoadingSpinner from "../ui/LoadingSpinner";

const PrivateRoute = ({ isAuthed, isLoading, Component }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthed) {
    return <Navigate to="/sign-in" />;
  }

  return <Component />;
};
export default PrivateRoute;
