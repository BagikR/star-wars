import PropTypes from "prop-types";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@context/themeProvider";
import imgDark from "./img/dark-side.jpg";
import imgLight from "./img/light-side.jpg";
import imgNeitral from "./img/falcon.jpg";
import cn from "classnames";
import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      className={cn(styles.item, classes)}
      theme={theme}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__header}>{text}</div>
      <img src={img} alt={text} className={styles.item__img} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

export default function ChooseSide() {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLight,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDark,
      classes: styles.item__dark,

    },
    {
      theme: THEME_NEITRAL,
      text: "I'm solo",
      img: imgNeitral,
      classes: styles.item__neitral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map( item => (
        <ChooseSideItem theme={item.theme} text={item.text} img={item.img} classes={item.classes} key={item.theme}/>
      ))}
    </div>
  );
}
