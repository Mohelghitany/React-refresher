import type { JSX } from "react";

import styles from "./PostList.module.css";
import { Post, type postProps } from "../Post/Post";

interface postListProps {
  posts: postProps[];
}

export const PostList = ({ posts }: postListProps): JSX.Element => {
  return (
    <ul className={styles.postList}>
      {posts.map((post, index) => {
        return (
          <li>
            <Post key={index} author={post.author} content={post.content} />
          </li>
        );
      })}
    </ul>
  );
};
export default PostList;
