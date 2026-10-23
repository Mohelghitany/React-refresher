import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router";
import { NewPost } from "./routes/NewPost/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import Posts from "./routes/Posts.tsx";
import { action as newPostAction } from "./routes/NewPost/NewPostAction.ts";
import { loader as PostsListLoader } from "./components/PostList/postListLoader.ts";
import { PostDetails } from "./routes/PostDetails/PostDetails.tsx";
import { loader as PostDetailsLoader } from "./routes/PostDetails/PostDetailsLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostsListLoader,
        hydrateFallbackElement: <div>Loading.....</div>,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          {
            path: "/details/:id",
            element: <PostDetails />,
            loader: PostDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
