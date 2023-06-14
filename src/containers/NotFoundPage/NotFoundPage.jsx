import errorImg from "./image/404.png";
import { useLocation } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  let location = useLocation();

  return (
    <>
      <img src={errorImg} alt="Not Found" className={styles.img} />
      <p className={styles.text}> No match for {location.pathname} </p>
    </>
  );
}
