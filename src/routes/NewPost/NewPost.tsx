import type { JSX } from "react/jsx-runtime";
import { type ChangeEvent, useState } from "react";
import styles from "./NewPost.module.css";
import { useNavigate } from "react-router";
import { Modal } from "../../components/Modal/Modal";

export const NewPost = (): JSX.Element => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState<string>("Your name");
  const [content, setContent] = useState<string>("Your post content.");

  const onClose = () => {
    navigate("..");
  };
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

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify({ author, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Modal>
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
    </Modal>
  );
};
