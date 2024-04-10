import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { TILE_LAYER, ATTRIBUTION } from '../const';
import { TLocation } from '../types/types';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityData: TLocation,
  zoomAllow: boolean
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityData.latitude,
          lng: cityData.longitude
        },
        zoom: cityData.zoom,
        scrollWheelZoom: zoomAllow
      });

      const layer = new TileLayer(TILE_LAYER, { attribution: ATTRIBUTION });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityData, zoomAllow]);

  return map;
}

export default useMap;
