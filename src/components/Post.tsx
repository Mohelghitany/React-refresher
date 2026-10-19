import type { JSX } from "react";
interface postProps {
  author: string;
  content: string;
}
export const Post = ({ author, content }: postProps): JSX.Element => {
  return (
    <div>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};
export default Post;
