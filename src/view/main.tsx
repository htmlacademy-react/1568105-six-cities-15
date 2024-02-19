import CitiesTabs from './cities-tabs';
import Cities from './cities';

type MainProps = {
  stayPlaces: number;
}

export default function Main({stayPlaces}: MainProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <CitiesTabs />
      <Cities stayPlaces={stayPlaces} />
    </main>
  );
}
