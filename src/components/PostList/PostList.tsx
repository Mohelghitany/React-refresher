import { type JSX } from "react";

import styles from "./PostList.module.css";
import { Post, type postProps } from "../Post/Post";
import { useLoaderData } from "react-router-dom";

export const PostList = (): JSX.Element => {
  const posts: postProps[] = useLoaderData();
  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.postList}>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Post
                  id={post.id}
                  author={post.author}
                  content={post.content}
                />
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
