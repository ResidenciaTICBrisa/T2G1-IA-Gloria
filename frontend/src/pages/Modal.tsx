import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import HeaderPages from "../components/HeaderPages";

interface PopupComponentProps {
  onAuthorize: () => void;
  onNotAuthorize: () => void;
}

const PopupComponent: React.FC<PopupComponentProps> = ({ onAuthorize, onNotAuthorize }) => {
  const navigate = useNavigate();

  const handleAuthorize = () => {
    console.log("Authorize clicked");
    onAuthorize();
    navigate('/what-to-do');
  };
  
  const handleNotAuthorize = () => {
    console.log("Not Authorize clicked");
    onNotAuthorize();
    navigate('/what-to-do');
  };
  

  return (
    <div className="popup-overlay">
        <HeaderPages/>

        <MapContainer
                center={[-15.794, -47.882]}
                zoom={12}
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