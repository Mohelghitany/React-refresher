import { useState } from "react";
import type { ChangeEvent } from "react";

import { NewPost } from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";
import { PostList } from "./components/PostList/PostList";

export const App = () => {
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
  return (
    <main>
      <NewPost
        onAuthorChange={onAuthorChange}
        onContentChange={onContentChange}
      />
      <PostList
        posts={[
          <Post author={author} content={content} />,
          <Post author="Mohamed Elghitany" content="React Developer" />,
        ]}
      />
    </main>
  );
};
export default App;
