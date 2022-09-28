import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import Home, { loader as homeLoader } from "./routes/home";
import Blockchain, { loader as blockchainLoader } from "./routes/blockchain";
import Token, { loader as tokenLoader } from "./routes/token";
import AddBlockchain, { action as addBlockchainAction } from "./routes/add-blockchain";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/:blockchainId",
        element: <Blockchain />,
        loader: blockchainLoader,
      },
      {
        path: "/:blockchainId/:tokenId",
        element: <Token />,
        loader: tokenLoader,
      },
      {
        path: "/add-blockchain",
        element: <AddBlockchain />,
        action: addBlockchainAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
