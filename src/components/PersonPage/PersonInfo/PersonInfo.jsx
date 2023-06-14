import PropTypes from "prop-types";
import styles from "./PersonInfo.module.css";

export default function PersonInfo({ personInfo }) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {personInfo.map((item) => {
          return (
            item.data &&
            item.data !== "n/a" &&
            item.data !== "unknown" && (
              <li key={item.title} className={styles.list__item}>
                <span className={styles.item__title}>{item.title}</span>
                :{' '} {item.data}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};
