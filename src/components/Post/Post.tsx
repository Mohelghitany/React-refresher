import type { JSX } from "react";
import styles from "./Post.module.css";

export interface postProps {
  id: string;
  author: string;
  content: string;
}
export const Post = ({ author, content }: postProps): JSX.Element => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
export default Post;
