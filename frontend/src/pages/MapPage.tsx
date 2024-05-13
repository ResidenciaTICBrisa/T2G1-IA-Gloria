import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { RxDividerHorizontal } from "react-icons/rx";
import Logo from "../assets/logo.png"
import 'leaflet/dist/leaflet.css';
import { LatLng } from 'leaflet';
import { icon } from 'leaflet';
import LocationIcon from "../assets/location_icon.png"; 
import '../styles/MapPage.css';

function Mapa() {
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);
  const [locationSelected, setLocationSelected] = useState(false);
  const customIcon = icon({
    iconUrl: LocationIcon, 
    iconSize: [28, 28], 
    iconAnchor: [16, 48], 
  });

  function MapEventsHandler() {
    const map = useMapEvents({
      click: (e) => {
        setMarkerPosition(e.latlng); 
        setLocationSelected(true); 
      }
    });

    return null;
  }

  return (
    <div className="map">
      <div className="overlay-container">
        <section className="button-logo-map">
          <img className="logo-map" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/home-page")} />
        </section>

        <button className="button-back-map" onClick={() => navigate(-1)}>
          <IoChevronBackCircleSharp className="icon-back-map" />
        </button>

        <div className="map-title">
          <p className="map-text">{locationSelected ? 'Local selecionado' : 'Marque o local'}</p>
        </div>
      </div>

      <MapContainer
        center={[-15.794, -47.882]}
        zoom={14}
        style={{ width: '100vw', height: '100vh' }}
        zoomControl={false}
      >
        <MapEventsHandler /> 

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerPosition && (
          <Marker position={markerPosition} icon={customIcon}>
          </Marker>
        )}

      </MapContainer>

      {locationSelected && (
        <div className="occurrence-details">
          <RxDividerHorizontal className="map-icon" />
          <div className="general-information">
            <p>INFORMAÇÕES GERAIS</p>
          </div>

          <div className="map-info">
            <label>ENDEREÇO:</label>
          </div>

          <div className="map-info">
            <label>TIPO DE VIOLÊNCIA:</label>
          </div>

          <div className="map-info">
            <label>HORÁRIO RELATADO:</label>
          </div>

          <div className="map-info">
            <label>DATA DO OCORRIDO:</label>
          </div>

          <div className="btn-map">
            <button className="btn-finish">Finalizar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mapa;
