import { useState } from "react";
import type { ChangeEvent } from "react";

import { NewPost } from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";
import { PostList } from "./components/PostList/PostList";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [author, setAuthor] = useState<string>("Your name");
  const [content, setContent] = useState<string>("Your post content.");
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const modalVisibilty = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header isPosting={modalVisibilty} />
      <main>
        {isOpen && (
          <Modal onClose={onClose}>
            <NewPost
              onAuthorChange={onAuthorChange}
              onContentChange={onContentChange}
            />
          </Modal>
        )}
        <PostList
          posts={[
            <Post author={author} content={content} />,
            <Post author="Mohamed Elghitany" content="React Developer" />,
          ]}
        />
      </main>
    </>
  );
};
export default App;
