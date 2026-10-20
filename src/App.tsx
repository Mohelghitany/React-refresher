import { useState, type MouseEvent } from "react";
import type { postProps } from "./components/Post/Post";

import { NewPost } from "./components/NewPost/NewPost";
import { PostList } from "./components/PostList/PostList";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<postProps> | []>([]);
  const modalVisibilty = () => {
    setIsOpen((prev) => !prev);
  };
  const onClose = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };
  const onSubmit = (post: postProps) => {
    setPosts((posts) => [post, ...posts]);
    modalVisibilty();
  };

  return (
    <>
      <Header isPosting={modalVisibilty} />
      <main>
        {isOpen && (
          <Modal onClose={onClose}>
            <NewPost onClose={onClose} onSubmit={onSubmit} />
          </Modal>
        )}
        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h2>There is no posts yet.</h2>
            <p>Start Adding some</p>
          </div>
        )}
      </main>
    </>
  );
};
export default App;
