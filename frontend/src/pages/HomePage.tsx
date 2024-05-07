import '../styles/HomePage.css';
import Logo from "../assets/logo_home.png"
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <main className="main-home">

            <header className="logo-home-header">
                <img className="logo-home" src={Logo} alt="Logo da Gloria" onClick={() => navigate('/')}/>
            </header>

            <section className="titles-home"> 
                <h1 className="main-title">INSTITUTO GLÓRIA</h1>
                <h2 className="sub-title">MAPA DA VIOLÊNCIA</h2>
            </section>

            <section className="button-home">
                <button className="footer" onClick={() => navigate("/what-to-do")}>Começar</button>
            </section>

        </main>
    );      
};

export default HomePage;
