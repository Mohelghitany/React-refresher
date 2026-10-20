import type { JSX } from "react/jsx-runtime";
import {
  type ChangeEvent,
  type MouseEvent,
  type SubmitEvent,
  useState,
} from "react";
import type { postProps } from "../Post/Post";
import styles from "./NewPost.module.css";

interface newPostProps {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit: (post: postProps) => void;
}

export const NewPost = ({ onClose, onSubmit }: newPostProps): JSX.Element => {
  const [author, setAuthor] = useState<string>("Your name");
  const [content, setContent] = useState<string>("Your post content.");

  const onAuthorChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setAuthor(event.target.value);
  };
  const onContentChange = (
    event: ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ author, content });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

      <p className={styles.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};
