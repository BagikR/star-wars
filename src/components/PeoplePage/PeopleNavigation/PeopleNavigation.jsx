import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import UIButton from "@ui/UIButton";
import styles from "./PeopleNavigation.module.css";

export default function PeopleNavigation({
  getResource,
  prevPage,
  nextPage,
  counterPage,
}) {
  const changeNext = () => getResource(nextPage);
  const changePrev = () => getResource(prevPage);
  return (
    <div className={styles.btnContainer}>
      <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
        <UIButton 
        text ='Previous'
        onClick = {changePrev}
        disabled={!prevPage}
        />
      </Link>

      <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
      <UIButton 
        text ='Next'
        onClick = {changeNext}
        disabled={!nextPage}
        />
      </Link>
    </div>
  );
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};
