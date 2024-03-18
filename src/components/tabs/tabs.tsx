// import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { PreviewOffer } from '../../types/types';

type TabsProps = {
  previewOffers: PreviewOffer[];
  onListItemHover: (listItemName: string) => void;
  // cityData: City[];
}

export default function Tabs({ previewOffers, onListItemHover }: TabsProps): JSX.Element {

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {previewOffers.map((item, index) => {
          const keyValue = `${index}-${item}`;

          return (
            <li className="locations__item" key={keyValue} onMouseEnter={handleListItemHover}>
              <a className="locations__item-link tabs__item" href="#">
                <span>{item.title}</span>
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
