import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorData";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { getApiResource, changeHttp } from "@utils/network";
import {
  getPeopleId,
  getPeopleImg,
  getPeoplePageID,
} from "@services/getPeopleData";
import { API_PEOPLE } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(null);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map((person) => {
        const id = getPeopleId(person.url);
        const img = getPeopleImg(id);

        return {
          name: person.name,
          id,
          img
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHttp(res.previous));
      setNextPage(changeHttp(res.next));
      setCounterPage(getPeoplePageID(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
