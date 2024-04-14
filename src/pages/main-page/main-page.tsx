import { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Card from '../../components/card';
import Tabs from '../../components/tabs';
import Map from '../../components/map';
import { useLocation, useSearchParams } from 'react-router-dom';
import { TPreviewOffer } from '../../types/types';
import { useAppSelector } from '../../hooks';
import MainEmpty from './main-empty';
import Sorting from '../../components/sorting';
import { sortingType } from '../../utils';
import {
  ACTIVE_CITY_NAME, 
  DEFAULT_SORTING, 
  CITY, 
  SORT_TYPE,
  CITIES
} from '../../const'
import { getOffersData } from '../../store/offers-process/offers-process.selectors';

const getOffersByCity = (list: TPreviewOffer[], city: string) => list.filter((offer: TPreviewOffer) => offer.city.name === city);

export default function MainPage(): JSX.Element {
  const [selectedPointId, setSelectedPointId] = useState('');

  const previewOffers = useAppSelector(getOffersData);
  const {search} = useLocation()
  const [searchParams, setSearchParams] = useSearchParams({
    city: ACTIVE_CITY_NAME,
    sortType: DEFAULT_SORTING
  });

  const activeCityName = searchParams.get(CITY);
  const activeSort = searchParams.get(SORT_TYPE);


  const handleSortTypeChange = (sortType) => {
    searchParams.set(SORT_TYPE, sortType);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!search) {
      setSearchParams(searchParams);
    }
  }, [search, searchParams, setSearchParams]);

  const filteredOffers = useMemo(() => getOffersByCity( previewOffers, activeCityName), [activeCityName, previewOffers]);

  const filteredAndSortedOffers = useMemo(() => sortingType[activeSort](filteredOffers), [filteredOffers, activeSort]);

  const hasNoFilteredOrSortedOffers = !filteredAndSortedOffers.length;


  const getWordPlaces = (value: number) => value > 1 ? 'places' : 'place';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className={`page__main page__main--index ${hasNoFilteredOrSortedOffers && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Tabs city={activeCityName} isTabs/>
        </div>
        <div className="cities">
          <div className={`cities__places-container container ${hasNoFilteredOrSortedOffers && 'cities__places-container--empty'}`}>
            {!hasNoFilteredOrSortedOffers ?
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredAndSortedOffers.length} {getWordPlaces(filteredAndSortedOffers.length)} to stay in {activeCityName}</b>
                <Sorting change={handleSortTypeChange} currentSort={activeSort} />
                <div className="cities__places-list places__list tabs__content">
                  {filteredAndSortedOffers.map((offer: TPreviewOffer) =>
                    <Card key={offer.id} previewOffer={offer} setSelectedPointId={setSelectedPointId} className='cities__card' />
                  )}
                </div>
              </section>
              : <MainEmpty city = {activeCityName}/>}
            <div className="cities__right-section">
              {filteredOffers.length && <Map className="cities" previewOffers={filteredOffers} selectedPointId={selectedPointId} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
