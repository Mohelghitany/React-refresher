const names = ["mohamed", "elghitany"];
export const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}</p>
      <p>React Developer</p>
    </div>
  );
};
export default Post;
