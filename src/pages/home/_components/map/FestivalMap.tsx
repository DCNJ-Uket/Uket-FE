import { Map, MapMarker } from "react-kakao-maps-sdk";

const FestivalMap = () => {
  return (
    <Map
      id="map"
      center={{ lat: 33.5563, lng: 126.79581 }}
      className="w-full h-40 rounded-lg shadow-md"
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div className="text-black">Hello World!</div>
      </MapMarker>
    </Map>
  );
};

export default FestivalMap;
