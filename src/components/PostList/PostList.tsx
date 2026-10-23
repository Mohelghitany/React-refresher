import { useEffect, useState, type JSX } from "react";

import styles from "./PostList.module.css";
import { Post, type postProps } from "../Post/Post";

export const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getPosts = async () => {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:8080/posts", {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const responseData = (await response.json()) as {
          posts: postProps[];
        };

        setPosts(responseData.posts);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error fetching posts:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsFetching(false);
        }
      }
    };
    void getPosts();
    return () => controller.abort();
  }, []);

  return (
    <>
      {isFetching && <div>Loading.....</div>}
      {posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map((post, index) => {
            return (
              <li>
                <Post key={index} author={post.author} content={post.content} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some.</p>
        </div>
      )}
    </>
  );
};
export default PostList;
