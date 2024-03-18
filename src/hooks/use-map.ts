import { useEffect, useState, useRef, RefObject } from 'react';
import leaflet, { Map } from 'leaflet';
import { TILE_LAYER, ATTRIBUTION } from '../const';
import { City, Location } from '../types/types';

type useMapProps = {
  cityData: City;
  mapRef: RefObject<HTMLElement | null>;
}

export default function useMap({mapRef, cityData}: useMapProps): Map | null {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  // const { latitude, longitude, zoom } = cityData;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: cityData.lat,
          lng: cityData.lng,
        },
        zoom: cityData.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER,
          {
            attribution: ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityData]);

  return map;
}
