import { createSelector } from "reselect";
import { intersection } from "lodash";

export const getIntegerList = (state) => state.ressource.ressourceList;

export const getContainsOneList = (state) =>
  getIntegerList(state).filter((r) => r.toString().indexOf("1") > -1);

export const getPrimeIntegerList = (state) =>
  getIntegerList(state).filter((r) => isPrimeNumber(r));

function isPrimeNumber(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

export const getPrimeIntContainsOne = createSelector(
  getContainsOneList,
  getPrimeIntegerList,
  (containsOneList, PrimeIntegerList) => {
    return intersection(containsOneList, PrimeIntegerList);
  }
);
