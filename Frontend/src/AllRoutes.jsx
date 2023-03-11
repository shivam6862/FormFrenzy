import React from "react";
import { Route, Routes } from "react-router-dom";
import SigninPage from "./components/auth/SinginPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import HomePage from "./components/homePage/HomePage";
import CreatePaperForExam from "./components/createPaperForExam/CreatePaperForExam";
import QuestionPaperForUser from "./components/questioPaperForUser/QuestionPaperForUser";
import Pagenotfound from "./components/pageNotFound/Pagenotfound";
import ConversationPage from "./components/conversations/ConversationPage";
import ResultOfUser from "./components/result/ResultOfUser";

const routes = [
  {
    path: "/conversations/:id",
    private: true,
    Component: ConversationPage,
  },
  {
    path: "/sign-in",
    Component: SigninPage,
  },
  {
    path: "/",
    Component: HomePage,
    private: true,
  },
  {
    path: "/createnewfrom",
    exact: true,
    Component: CreatePaperForExam,
    private: true,
  },
  {
    path: "/questionpaper/:id",
    exact: true,
    Component: QuestionPaperForUser,
    private: true,
  },
  {
    path: "/result/:id",
    exact: true,
    Component: ResultOfUser,
    private: true,
  },
  {
    path: "*",
    Component: Pagenotfound,
  },
];

export const AllRoutes = ({ isLoading, user }) => (
  <Routes>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={
            route.private ? (
              <PrivateRoute
                isLoading={isLoading}
                isAuthed={!!user}
                Component={route.Component}
              />
            ) : (
              <route.Component />
            )
          }
        ></Route>
      );
    })}
  </Routes>
);
