import { useEffect, useState } from "react";
import HeaderPages from "../components/HeaderPages";
import { FaHand } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { MdOutlineSos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/WhatToDoPage.css';

const WhatToDoPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('selectedState');
        localStorage.removeItem('selectedCity');
        localStorage.removeItem('date');
        localStorage.removeItem('time');
        localStorage.removeItem('ageRange');
        localStorage.removeItem('checkedItems');
    }, []);


    return (
        <div className="whattodo-page">
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

            <section>
                <HeaderPages/>
            </section>

            <main className="main-whattodo">
                <section className="what-to-do">
                    <section className="titles-whattodo">
                        <h4 className="intro-title">Este é o Mapa da Violência do Instituto Glória</h4>
                        <p className="question-whattodo">O que deseja fazer?</p>
                    </section>

                    <nav className="navigation">
                        <div 
                            className="violence-registration" 
                            onClick={() => navigate("/form-about-violence", { state: { action: 'register' } })}
                        >
                            <FaHand className="FaHand" />
                            <p className="text-violence-registration">Fazer um registro</p>
                        </div>

                        <div 
                            className="map-visualization" 
                            onClick={() => navigate("/authorize-localization", { state: { action: 'viewMap' } })}
                        >
                            <IoLocationOutline className="IoLocation"/>
                            <p className="text-map-visualization">Visualizar o mapa</p>
                        </div>

                        <div 
                            className="know-more" 
                            onClick={() => navigate("/know-more")}
                        >
                            <TiPencil className="TiPencil"/>
                            <p className="text-know-more">Saber mais</p>
                        </div>

                        <div 
                            className="help" 
                            onClick={() => navigate("/emergency")}
                        >
                            <MdOutlineSos className="MdOutline"/>
                            <p className="text-help">Preciso de ajuda</p>
                        </div>
                    </nav>
                </section>
            </main>
        </div>
    );
};

export default WhatToDoPage;
