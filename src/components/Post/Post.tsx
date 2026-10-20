import type { JSX } from "react";
import styles from "./Post.module.css";

export interface postProps {
  author: string;
  content: string;
}
export const Post = ({ author, content }: postProps): JSX.Element => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
    </li>
  );
};
export default Post;
