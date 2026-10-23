import { MdMessage, MdPostAdd } from "react-icons/md";
import style from "./Header.module.css";
import { Link } from "react-router";

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React poster
      </h1>
      <p>
        <Link to={"/create-post"} className={style.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};
