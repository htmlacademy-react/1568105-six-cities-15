import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { TILE_LAYER, ATTRIBUTION } from '../const';
import { City } from '../types/types';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityData: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          latitude: cityData.location.latitude,
          longitude: cityData.location.longitude
        },
        zoom: 10
      });

      const layer = new TileLayer(TILE_LAYER,
        {
          attribution: ATTRIBUTION
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityData]);

  return map;
}

export default useMap;
