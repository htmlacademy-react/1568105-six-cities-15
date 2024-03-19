// import { Link } from 'react-router-dom';
import { CITIES } from '../../const';

type TabsProps = {
  activeCityName: string;
}

export default function Tabs({ activeCityName }: TabsProps): JSX.Element {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => (
          <li className="locations__item" key={cityName} >
            <a className={`locations__item-link tabs__item${activeCityName === cityName ? ' tabs__item--active' : ''}`} href="#">
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
