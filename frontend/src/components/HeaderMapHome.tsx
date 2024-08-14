import Logo from "../assets/logo2.png"
import '../styles/HeaderMapPage.css'

const reloadPage = async () => {
    sessionStorage.clear();
    window.location.reload()
}

const HeaderMapHome = () => {

    return (
        <div>
    <HeaderMapHome/> 

            <header className="header">
                <section className="header-map-items" >
                    <img className="logo-map" 
                    src={Logo} 
                    alt="Logo da Gloria" 
                    onClick={() => reloadPage()}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderMapHome; 