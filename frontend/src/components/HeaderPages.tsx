import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const HeaderPages = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-map-items">
                    <img 
                        className="logo-map" 
                        src={Logo} 
                        alt="Logo da Gloria" 
                        onClick={() => navigate("/")}
                        style={{ width: '150px', height: 'auto', marginTop: '-1vh' }} 
                    />
                </section>
            </header>
        </div>
    );
};
export default HeaderPages; 
