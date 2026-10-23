import { type postProps } from "../Post/Post";
export const loader = async () => {
  try {
    const response = await fetch("http://localhost:8080/posts", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const responseData = (await response.json()) as {
      posts: postProps[];
    };
    return responseData.posts;
  } catch (error) {
    if (error instanceof Error && error.name !== "AbortError") {
      console.error("Error fetching posts:", error);
    }
  }
};
