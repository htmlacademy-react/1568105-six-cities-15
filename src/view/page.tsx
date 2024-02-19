import Header from '../view/header';
import Main from '../view/main';

type PageProps = {
  favoritesVolume: number;
  stayPlaces: number;
}

export default function Page({favoritesVolume, stayPlaces}: PageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header favoritesVolume={favoritesVolume} />

      <Main stayPlaces={stayPlaces} />
    </div>
  );
}
