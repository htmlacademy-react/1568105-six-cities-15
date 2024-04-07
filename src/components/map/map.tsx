import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { TFullOffer, TPreviewOffer } from '../../types/types';
import { defaultIcon, currentIcon, ALLOW_SCROLL } from '../../const';

type MapProps = {
  previewOffers: (TPreviewOffer | TFullOffer)[];
  selectedPointId: string;
  className: string;
};


function Map(props: MapProps): JSX.Element {
  const { previewOffers, selectedPointId, className } = props;

  const mapRef = useRef(null);
  const cityData = previewOffers[0].city.location;
  const zoomAllow = className === ALLOW_SCROLL;
  const map = useMap(mapRef, cityData, zoomAllow);

  useEffect(() => {
    if (map) {
      map.flyTo([cityData.latitude, cityData.longitude], cityData.zoom);
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
  }, [map, previewOffers, selectedPointId, cityData]);

  return <section className={`${className}__map map`} ref={mapRef}></section>;
}

export default Map;
