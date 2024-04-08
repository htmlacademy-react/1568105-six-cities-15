import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../../components/card';
import Tabs from '../../components/tabs';
import Map from '../../components/map';
import { TCity, TPreviewOffer } from '../../types/types';
import { useAppSelector } from '../../hooks';
import MainEmpty from './main-empty';
import Sorting from '../../components/sorting';
import { sortingType } from '../../utils';

type MainPageProps = {
  cityData: TCity;
}

const getOffersByCity = (list: TPreviewOffer[], city: string) => list.filter((offer: TPreviewOffer) => offer.city.name === city);

export default function MainPage({ cityData }: MainPageProps): JSX.Element {
  const [selectedPointId, setSelectedPointId] = useState('');

  const previewOffers = useAppSelector((state) => state.offers);
  const activeCityName = useAppSelector((state) => state.activeCity);
  const activeSort = useAppSelector((state) => state.activeSorting);
  const previewOffersByCity = getOffersByCity(previewOffers, activeCityName);
  const sortedOffers = sortingType[activeSort](previewOffersByCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Tabs />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {previewOffersByCity.length ?
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{previewOffersByCity.length} places to stay in {activeCityName}</b>
                <Sorting />
                <div className="cities__places-list places__list tabs__content">
                  {sortedOffers.map((offer: TPreviewOffer) =>
                    <Card key={offer.id} previewOffer={offer} setSelectedPointId={setSelectedPointId} />
                  )}
                </div>
              </section>
              : <MainEmpty />}
            <div className="cities__right-section">
              {previewOffersByCity.length && <Map className="cities" cityData={cityData} previewOffers={previewOffersByCity} selectedPointId={selectedPointId} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
