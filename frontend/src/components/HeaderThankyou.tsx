import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
//import { IoChevronBackCircleSharp } from "react-icons/io5";

const HeaderTy = () => {
    let navigate = useNavigate();

    return (
        <div>
            <header className="header">
                <section className="header-items reset-svg">
                    
                    <img className="logo" src={Logo} alt="Logo da Gloria" onClick={() => navigate("/")}/>
                </section>
            </header>
        </div>
    );
};

export default HeaderTy;
