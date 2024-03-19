import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../../components/card';
import Tabs from '../../components/tabs';
import Map from '../../components/map';
import { PLACE_OPTIONS } from '../../const';
import { PreviewOffer, City} from '../../types/types';

type MainPageProps = {
  previewOffers: PreviewOffer[];
  cityData: City;
}

const ACTIVE_CITY_NAME = 'Cologne';

export default function MainPage({ previewOffers, cityData }: MainPageProps): JSX.Element {
  const [selectedPointId, setSelectedPointId] = useState('');

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Tabs activeCityName={ACTIVE_CITY_NAME} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{previewOffers.length} places to stay in {cityData.name}</b>
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
                {previewOffers.map((offer) =>
                  <Card key={offer.id} previewOffer={offer} setSelectedPointId={setSelectedPointId}/>
                )}
              </div>
            </section>

            <div className="cities__right-section">
              <Map className="cities" cityData={cityData} previewOffers={previewOffers} selectedPointId={selectedPointId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
