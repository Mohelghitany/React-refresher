import { MdMessage, MdPostAdd } from "react-icons/md";
import style from "./Header.module.css";

interface HeaderProps {
  isPosting: () => void;
}
export const Header = ({ isPosting }: HeaderProps) => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React poster
      </h1>
      <p>
        <button className={style.button} onClick={isPosting}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};
