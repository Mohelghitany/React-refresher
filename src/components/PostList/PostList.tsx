import type { JSX } from "react";

import styles from "./PostList.module.css";

interface postListProps {
  posts: JSX.Element[];
}

export const PostList = ({ posts }: postListProps): JSX.Element => {
  return (
    <ul className={styles.postList}>
      {posts.map((_, index) => {
        return posts[index];
      })}
    </ul>
  );
};
export default PostList;
