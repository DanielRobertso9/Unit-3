import React from "react";
import "./App.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import RootLayout from "./components/Elements/Root";
import DetailScreen from "./components/detailComponents/DetailScreen";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "recipe", element: <NewRecipeScreen /> },
      { path: "recipe/:id", element: <DetailScreen />},
    ],
  },
]);

function App() {
  return (
  <RouterProvider router={router} />
  );
}

export default App;
