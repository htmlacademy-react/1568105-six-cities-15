import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { TCity, TFullOffer, TPreviewOffer } from '../../types/types';
import { defaultIcon, currentIcon } from '../../const';

type MapProps = {
  cityData: TCity;
  previewOffers: (TPreviewOffer | TFullOffer)[];
  selectedPointId: string;
  className: string;
};


function Map(props: MapProps): JSX.Element {
  const { cityData, previewOffers, selectedPointId, className } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityData);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      previewOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedPointId === offer.id
              ? currentIcon
              : defaultIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, previewOffers, selectedPointId]);

  return <section className={`${className}__map map`} ref={mapRef}></section>;
}

export default Map;
