import cartIcon from "../../assets/card-icon.svg";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <img src={cartIcon} alt="Card icon." />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>45</span>
    </button>
  );
};

export default HeaderCartButton;
