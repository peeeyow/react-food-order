import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Online Karinderya</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
