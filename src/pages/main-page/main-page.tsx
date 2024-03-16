import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Card from '../../components/card';
import Map from '../../components/map';
import { CITIES } from '../../const';
import { PLACE_OPTIONS } from '../../const';
import { PreviewOffer } from '../../types/types';

type MainPageProps = {
  previewOffers: PreviewOffer[];
  stayPlaces: number;
}

export default function MainPage({ stayPlaces, previewOffers }: MainPageProps): JSX.Element {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  const handleMouseEnter = (city: string) => {
    setActiveCity(city);
  };

  const handleMouseLeave = () => {
    setActiveCity(null);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city}>
                  <Link
                    to={`/${city}`}
                    className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(city)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>{city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{stayPlaces} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {PLACE_OPTIONS.map((option) => (
                    <li className="places__option" tabIndex={0} key={option}> {/* places__option--active */}
                      {option}
                    </li>
                  ))}
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">
                {previewOffers.map((offer) => <Card key={offer.id} previewOffer={offer}/>)}
              </div>
            </section>

            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
