// import { Link } from 'react-router-dom';
import { CITIES, SortType } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {setActiveCity, setActiveSort} from '../../store/action';

export default function Tabs() {
  const activeCityName = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  const clickTabHandler = (evt, activeCity) => {
    evt.preventDefault();
    dispatch(setActiveCity(activeCity));
    dispatch(setActiveSort(SortType.Popular));
  };
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => (
          <li className="locations__item" key={cityName} >
            <a
              className={`locations__item-link tabs__item${activeCityName === cityName ? ' tabs__item--active' : ''}`}
              href="#"
              onClick={(evt)=>clickTabHandler(evt, cityName)}
            >
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
