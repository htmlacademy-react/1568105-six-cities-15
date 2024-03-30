import { useState } from 'react';
import { PLACE_OPTIONS } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setActiveSort } from '../../store/action';

export default function Sorting() {
  const [isOpenSorting, setIsOpenSorting] = useState(false);
  const currentSort = useAppSelector((state) => state.activeSorting);
  const dispatch = useAppDispatch();

  const setActiveSortingHandler = (sort: string) => {
    dispatch(setActiveSort(sort));
    setIsOpenSorting(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpenSorting(!isOpenSorting)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenSorting && 'places__options--opened'}`}>

        {PLACE_OPTIONS.map((type) => (
          <li
            className={`places__option ${currentSort === type && 'places__option--active'}`}
            tabIndex={0}
            key={type}
            onClick={() => setActiveSortingHandler(type)}
          >{type}
          </li>
        ))}
      </ul>
    </form>
  );
}
