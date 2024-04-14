import { Link, useSearchParams } from 'react-router-dom';
import { CITIES, AppRoute, CITY, SORT_TYPE, DEFAULT_SORTING } from '../../const';

type TabsProps = {
  city: string;
  isTabs: boolean;
}

export default function Tabs({city, isTabs}: TabsProps) {

  const [searchParams] = useSearchParams();
  const currentSort = searchParams.get(SORT_TYPE);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => (
          <li className="locations__item" key={cityName} >
            <Link
              className={`locations__item-link tabs__item${city === cityName ? ' tabs__item--active' : ''}`}
              to={`${AppRoute.Root}?${CITY}=${cityName}&${SORT_TYPE}=${isTabs ? currentSort : DEFAULT_SORTING }`}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
