import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import HeaderNoButton from '../components/HeaderNoButton';

interface PopupComponentProps {
  onAuthorize: () => void;
  onNotAuthorize: () => void;
}

interface Coordinates {
  lat: number;
  lng: number;
}

const PopupComponent: React.FC<PopupComponentProps> = ({ onAuthorize, onNotAuthorize }) => {
  const navigate = useNavigate();

  let coordinates: Coordinates | null = null;
  let zoom_init: number = 4;

  if (sessionStorage.getItem('autorizou-localizacao') === "yes") {
    coordinates = {
      lat: Number(sessionStorage.getItem('latitude')),
      lng: Number(sessionStorage.getItem('longitude'))
    };
    zoom_init = 14;
  }

  const mapCenter = coordinates || { lat: -15.794, lng: -47.882 };

  const handleAuthorize = () => {
    console.log("Authorize clicked");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          sessionStorage.setItem('latitude', String(latitude));
          sessionStorage.setItem('longitude', String(longitude));
          sessionStorage.setItem('autorizou-localizacao', "yes");

          console.log("Location stored:", { latitude, longitude });

          onAuthorize();
          navigate('/what-to-do');
        },
        (error) => {
          console.error("Error getting location:", error);
          onAuthorize();
          navigate('/what-to-do');
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      onAuthorize();
      navigate('/what-to-do');
    }
  };

  const handleNotAuthorize = () => {
    console.log("Not Authorize clicked");
    
    sessionStorage.setItem('autorizou-localizacao', "no");

    onNotAuthorize();
    navigate('/what-to-do');
  };

  return (
    <div className="popup-overlay">
      <HeaderNoButton />
      <MapContainer
        center={mapCenter}
        zoom={zoom_init}
        style={{ width: '100vw', height: '100vh', position: 'absolute', zIndex: '-1' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <div className="popup-content">
        <h3>MAPA DA VIOLÊNCIA</h3>
        <p>O seu registro ajuda a salvar a vida de outras mulheres!</p>
        <p>Para uma melhor experiência, você autoriza o acesso à sua localização?</p>
        <button className="yes-btn" onClick={handleAuthorize}>Sim</button>
        <button className="no-btn" onClick={handleNotAuthorize}>Não</button>
      </div>
    </div>
  );
};

export default PopupComponent;
