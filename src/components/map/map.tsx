import { useRef, useEffect } from 'react'; //  , React,
import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import { City, PreviewOffer } from '../../types/types';
import useMap from '../../hooks/use-map';

type MapProps = {
  cityData: City;
  previewOffers: PreviewOffer[];
}

// {city, points, selectedPoint}
export default function Map({cityData, previewOffers, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityData);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      previewOffers.forEach((previewOffer) => {
        leaflet
          .marker({
            lat: previewOffer.lat,
            lng: previewOffer.lng,
          }, {
            icon: (previewOffer.title === selectedPoint.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, previewOffers, selectedPoint]);

  return (
    <div className="cities__map map" ref={mapRef}></div>
  );
}
