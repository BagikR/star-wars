import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.css";

export default function SearchPageInfo({ people }) {
  return (
    <>
      {people.length ? (
        <ul className={styles.list__container}>
          {people.map((person) => (
            <li className={styles.list__item} key={person.id}>
              <Link to={`/people/${person.id}`}>
                <img
                  src={person.img}
                  alt={person.name}
                  className={styles.person__photo}
                />
                <p className={styles.person__name}>{person.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.person__comment}>No results</h2>
      )}
    </>
  );
}

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};
