import PropTypes from "prop-types";
import { makeConcurrentRequest, changeHttp } from "@utils/network";
import styles from "./PersonFilms.module.css";
import { useEffect, useState } from "react";

export default function PersonFilms({ personFilms }) {
  const [filmsName, setFilmsName] = useState([]);
  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((item) => changeHttp(item));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
            .sort((a, b) => a.episode_id - b.episode_id)
            .map((item) => {
            return (
                <li key={item.episode_id} className={styles.list__item}>
                <span className={styles.item__episode}>Episode {item.episode_id}</span>
                <span className={styles.item__colon}> : </span>
                <span className={styles.item__title}>{item.title}</span>
                </li>
            );
        })}
      </ul>
    </div>
  );
}

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};
