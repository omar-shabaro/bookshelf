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

// Note: we can implemnt here lazy loading for better performance for the bigger pages but the pages are small
// const Books = lazy(() => import("../pages/Books"));
// const BookDetails = lazy(() => import("../pages/BookDetails"));
// const NotFound = lazy(() => import("../pages/NotFound"));    
// and wrap <Outlet /> with <Suspense> in App.tsx
// See more: https://reactrouter.com/en/main/route/lazy

{/* <Suspense fallback={<div>Loading...</div>}>
  <NotFound />
</Suspense> */}

// Define routes with lazy loading for non-critical pages

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />, // App wraps Outlet with Suspense
//     children: [
//       { index: true, element: <Home /> },            // eager
//       { path: "books", element: <Books /> },         // lazy
//       { path: "book/:id", element: <BookDetails /> },// lazy
//       { path: "*", element: <NotFound /> },          // lazy
//     ],
//   },
// ]);
