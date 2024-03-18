import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
// import {City, Points, Point} from '../../types/types';
import { City, PreviewOffer, Location } from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  cityData: City;
  previewOffers: PreviewOffer[];
  selectedPoint: Location | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {cityData, previewOffers, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityData);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      previewOffers.forEach((offer) => {
        const marker = new Marker({
          latitude: offer.location.latitude,
          longitude: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && offer.title === selectedPoint.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, previewOffers, selectedPoint]);

  return <div ref={mapRef}></div>;
}

export default Map;
