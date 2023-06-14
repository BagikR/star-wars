import { useNavigate } from "react-router-dom";
import back from "./img/goback.svg";
import styles from "./personLinkBack.module.css";

export default function PersonLinkBack() {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <a href="#" onClick={goBack} className={styles.link}>
      <img src={back} alt="Go back" className={styles.link__img} />
      <span>Go back</span>
    </a>
  );
}
