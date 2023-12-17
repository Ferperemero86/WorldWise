import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useCities } from "@/contexts/CitiesContext";

import styles from "@/components/Map/Map.module.scss";

export default function Map() {
  const navigate = useNavigate();

  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
