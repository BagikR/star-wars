import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { debounce, lodash } from "lodash";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorData";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import UIInput from "@ui/UIInput";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";
import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponce = async (param) => {
    console.log(param);
    const res = await getApiResource(API_SEARCH + param);
    if (res) {
      const peopleList = res.results.map((element) => {
        const id = getPeopleId(element.url);
        const img = getPeopleImg(id);
        return {
          id,
          name: element.name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponce("");
  }, []);

  const debouncedGetResponce = useCallback(debounce(value => getResponce(value), 400), []) ;

  const inputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponce(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>

      <UIInput
        value={inputSearchValue}
        handleInputChange={inputChange}
        placeholder="Input character`s name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
