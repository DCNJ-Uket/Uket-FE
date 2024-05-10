import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

import MarkerLogo from "/marker.png";

import { useCustomMap } from "@/hooks/useCustomMap";

interface FestivalMapProps {
  festivalLocation: string | undefined;
}

const FestivalMap = (props: FestivalMapProps) => {
  const { festivalLocation } = props;
  const { marker, position, locationName, initializeMap } = useCustomMap({
    location: festivalLocation,
  });

  return (
    <Map
      id="map"
      center={{ lat: 33.5563, lng: 126.79581 }}
      className="w-full h-40 rounded-lg shadow-md"
      onCreate={initializeMap}
    >
      {marker && position && (
        <>
          <MapMarker
            position={position}
            image={{
              src: MarkerLogo,
              size: {
                width: 25,
                height: 35,
              },
            }}
          />
          <CustomOverlayMap position={position} yAnchor={2.2} xAnchor={1}>
            <div className="p-2 text-xs text-white truncate rounded-full customoverlay bg-brand/70">
              <a
                href={`https://map.kakao.com/link/map/${locationName},${marker.position.lat},${marker.position.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{locationName}</span>
              </a>
            </div>
          </CustomOverlayMap>
        </>
      )}
    </Map>
  );
};

export default FestivalMap;
