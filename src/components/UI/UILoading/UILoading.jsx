import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import loaderBlack from "./img/load-Black.svg";
import loaderWhite from "./img/load-White.svg";
import loaderBlue from "./img/load-Blue.svg";

import styles from "./UILoading.module.css";

export default function UILoading({
  theme = "white",
  isShadow = true,
  classes,
}) {
  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderWhite);
        break;
    }
  }, []);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="loader"
    />
  );
}

UILoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};
