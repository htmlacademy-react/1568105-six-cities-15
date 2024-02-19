import Page from '../../view/page';

type AppProps = {
  favoritesVolume: number;
  stayPlaces: number;
}

export default function App({favoritesVolume, stayPlaces}: AppProps): JSX.Element {
  return (
    <Page
      favoritesVolume={favoritesVolume}
      stayPlaces={stayPlaces}
    />
  );
}
