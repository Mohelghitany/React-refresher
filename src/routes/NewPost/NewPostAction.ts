import { redirect, type ActionFunctionArgs } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  try {
    const response = await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    redirect("/");
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
