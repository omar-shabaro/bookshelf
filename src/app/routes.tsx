import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "books", element: <Books /> },
            { path: "book/:id", element: <BookDetails /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);