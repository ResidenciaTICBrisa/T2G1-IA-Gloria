import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import '../styles/MapPage.css'
import Header from '../components/Header';

function Mapa() {
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null); 

  function MyComponent() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkerPosition(new LatLng(lat, lng)); 
      },
    });
    return null;
  }

  return (
    <div className="map">
      <Header />

      <div className="map-title">
        <p className="map-text">Marque o local</p>
      </div>

      <MapContainer
        center={[-15.794, -47.882]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ width: '100vw', height: '100vh' }}
      >
        <MyComponent /> 

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Mapa;
