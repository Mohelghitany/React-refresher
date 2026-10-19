import type { JSX } from "react/jsx-runtime";
import type { ChangeEvent } from "react";
import styles from "./NewPost.module.css";

interface newPostProps {
  onAuthorChange: (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
  onContentChange: (
    event: ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => void;
}

export const NewPost = ({
  onAuthorChange,
  onContentChange,
}: newPostProps): JSX.Element => {
  return (
    <form className={styles.form}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        required
        placeholder="Type your name"
        onChange={onAuthorChange}
      />

      <label htmlFor="content">Content</label>
      <textarea
        required
        id="content"
        rows={3}
        placeholder="Type something here"
        onChange={onContentChange}
      />
    </form>
  );
};
