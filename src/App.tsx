import { useEffect, useState, type MouseEvent } from "react";
import type { postProps } from "./components/Post/Post";

import { NewPost } from "./components/NewPost/NewPost";
import { PostList } from "./components/PostList/PostList";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<postProps[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const modalVisibilty = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setIsOpen(false);
  };

  const onSubmit = async (post: postProps) => {
    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      setPosts((prevPosts) => [post, ...prevPosts]);
      modalVisibilty();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const getPosts = async () => {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:8080/posts", {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const responseData = (await response.json()) as {
          posts: postProps[];
        };

        setPosts(responseData.posts);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error fetching posts:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsFetching(false);
        }
      }
    };

    void getPosts();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Header isPosting={modalVisibilty} />

      <main>
        {isOpen && (
          <Modal onClose={onClose}>
            <NewPost onClose={onClose} onSubmit={onSubmit} />
          </Modal>
        )}

        {isFetching ? (
          <div>Loading...</div>
        ) : posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
