import { Modal } from "../../components/Modal/Modal";
import { useLoaderData, Link } from "react-router-dom";
import classes from "./PostDetail.module.css";

interface PostDetails {
  author: string;
  content: string;
}
export const PostDetails = () => {
  const PostDetails: PostDetails = useLoaderData();

  if (!PostDetails) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{PostDetails.author}</p>
        <p className={classes.text}>{PostDetails.content}</p>
      </main>
    </Modal>
  );
};
