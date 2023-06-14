import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setPersonToFavorite, removePersonFromFavorites } from "@store/actions";
import iconFavorite from "./img/starEmpty.svg";
import iconFavoriteFill from "./img/starFill.svg";
import styles from "./PersonPhoto.module.css";

export default function PersonPhoto({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) {
  const dispatch = useDispatch();

  const dispatchFavoritePerson = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorites(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img src={personPhoto} alt={personName} className={styles.photo} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="favorite"
          onClick={dispatchFavoritePerson}
          className={styles.favorite}
        />
      </div>
    </>
  );
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};
