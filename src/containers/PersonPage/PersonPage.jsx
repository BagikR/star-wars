import PropTypes from "prop-types";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { withErrorApi } from "@hoc-helpers/withErrorData";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonLinkBack from "@components/PersonPage/personLinkBack";
import UILoading from "@ui/UILoading";
import { getApiResource } from "@utils/network";
import { getPeopleImg } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";
import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personID, setPersonID] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector(state=>state.favoriteReducer);

  const id = useParams().id;

  useEffect(() => {
    (async () => {

      setPersonID(id);
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      storeData[id] ? setPersonFavorite(true): setPersonFavorite(false);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImg(id));
        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        {personInfo && (
          <>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>
              <PersonPhoto
                personPhoto={personPhoto}
                personName={personName}
                personId={personID}
                personFavorite={personFavorite}
                setPersonFavorite = {setPersonFavorite}
              />

              <PersonInfo personInfo={personInfo} />

              {personFilms && (
                <Suspense fallback={<UILoading theme="white" isShadow />}>
                  <PersonFilms personFilms={personFilms} />
                </Suspense>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
