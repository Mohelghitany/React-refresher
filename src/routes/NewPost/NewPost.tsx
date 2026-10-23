import type { JSX } from "react/jsx-runtime";
import styles from "./NewPost.module.css";
import { useNavigate, Form } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

export const NewPost = (): JSX.Element => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("..");
  };
  return (
    <Modal>
      <Form method="post" className={styles.form}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          required
          placeholder="Type your name"
        />

        <label htmlFor="content">Content</label>
        <textarea
          required
          id="content"
          name="content"
          rows={3}
          placeholder="Type something here"
        />

        <p className={styles.actions}>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};
