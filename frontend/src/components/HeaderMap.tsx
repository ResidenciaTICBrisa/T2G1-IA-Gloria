import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

const HeaderMap = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-map-items">
                    <img className="logo-map" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/what-to-do")}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderMap; 