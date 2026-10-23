import type { LoaderFunctionArgs } from "react-router-dom";

import type { postProps } from "../../components/Post/Post";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const responseData = (await response.json()) as unknown as {
      post: postProps;
    };

    return responseData.post;
  } catch (error) {
    if (error instanceof Error && error.name !== "AbortError") {
      console.error("Error fetching posts:", error);
    }
  }
};
