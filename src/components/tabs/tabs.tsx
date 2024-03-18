// import { Link } from 'react-router-dom';
import { City, PreviewOffer } from '../../types/types';
// import { CITIES } from '../../const';

type TabsProps = {
  previewOffers: PreviewOffer[];
  cityData: City[];
}

export default function Tabs({ previewOffers, onListItemHover }: TabsProps): JSX.Element {
  const handleListItemHover = (evt) => {
    onListItemHover(evt.target.innerText);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {previewOffers.map((city, index) => {
          const keyValue = `${index}-${city}`;
          console.log(keyValue);

          return (
            <li className="locations__item" key={keyValue} onMouseEnter={handleListItemHover}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{city}</span>
              </a>
            </li>
          );
        })}

        {/* <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Paris</span>
          </a>
        </li> */}

      </ul>
    </section>
  );
}
