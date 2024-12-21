import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const ToDoForm = lazy(() => import("../components/ToDoForm.js"));
const ToDoList = lazy(() => import("../components/ToDoList.js"))
const ToDoDetails = lazy(() => import("../components/ToDoDetails.js"))
const ToDoUpdate = lazy(() => import("../components/ToDoUpdate.js"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/todo_list" /> },
      { path: "/create-todo", exact: true, element: <ToDoForm /> },
      { path: "/todo_list", exact: true, element: <ToDoList />},
      { path: "/todo_detail/:id", exact: true, element: <ToDoDetails /> },
      { path: "/todo_update/:id", exact: true, element: <ToDoUpdate /> },
    ],
  },
];

export default ThemeRoutes;
