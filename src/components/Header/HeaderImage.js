import headerImage from "../../assets/meals.jpg";
import classes from "./HeaderImage.module.css";

const HeaderImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={headerImage} alt="Table full of foods." />
    </div>
  );
};

export default HeaderImage;
