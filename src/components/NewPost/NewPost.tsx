import styles from "./NewPost.module.css";

export const NewPost = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="author">Author</label>
      <input type="text" id="author" required placeholder="Type your name" />

      <label htmlFor="content">Content</label>
      <textarea
        required
        id="content"
        rows={3}
        placeholder="Type something here"
      />
    </form>
  );
};
