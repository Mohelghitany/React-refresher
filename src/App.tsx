import { NewPost } from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";
import { PostList } from "./components/PostList/PostList";
export const App = () => {
  return (
    <main>
      <NewPost />
      <PostList
        posts={[
          <Post author="Mohamed Elghitany" content="React Developer" />,
          <Post author="MG" content="i love react" />,
        ]}
      />
    </main>
  );
};
export default App;
