import type { JSX } from "react";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";

export interface postProps {
  id: string;
  author: string;
  content: string;
}
export const Post = ({ author, content, id }: postProps): JSX.Element => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className={styles.post} onClick={onClick}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};
export default Post;
