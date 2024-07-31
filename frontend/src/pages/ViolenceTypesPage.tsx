import Header from "../components/Header";
import { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import '../styles/ViolenceTypesPage.css'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom';

const ViolenceTypesPage = () => {
    const navigate = useNavigate();

    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (sectionName: string) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <section className="holepage">
                    <section className="infoMapadaViolencia">
                        <b>O que é o Mapa da Violência</b>
                        <p>O Mapa da Violência é uma iniciativa do Instituto Glória em parceria com a Sociedade para o Desenvolvimento da Tecnologia da Informação (BRISA) que foi desenvolvido com o objetivo de combater a violência contra mulheres e meninas. </p>
                        <p>No Mapa da Violência os usuários podem fazer registros de situações de violência que vivenciaram auxiliando a identificar os locais mais violentos e quais as principais violências vivenciadas no Brasil. </p>
                        <p>Não é possível identificar quem registrou a ocorrência, garantindo a sua segurança, privacidade e anonimato. Sendo assim, o registro é totalmente anônimo e as informações obtidas são utilizadas para ajudar outras mulheres em situações de risco e auxiliar no planejamento de políticas públicas. </p>
                    </section>


                    <section className="introduction">
                        <p> Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha. </p>
                        <b> Você sabe identificá-los? </b>
                    </section>

                    <section className="violenceMenu">
                        <section className="fisicalViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("fisicalViolence")}>
                                Violência Física {openSection === "fisicalViolence" ? 
                                <IoIosArrowUp className="iconFisical" /> : 
                                <IoIosArrowDown className="iconFisical" />}
                            </p>
                            {openSection === "fisicalViolence" && (
                                <p className="dropdownText"> Espancamento, tortura, lesões, ferimentos, estrangulamento, sufocamento. </p>
                            )}
                        </section>

                        <section className="moralViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("moralViolence")}>
                                Violência Moral {openSection === "moralViolence" ? 
                                <IoIosArrowUp className="iconMoral"/> : 
                                <IoIosArrowDown className="iconMoral"/>}
                            </p>
                            {openSection === "moralViolence" && (
                                <p className="dropdownText"> Calúnia, difamação, injúria, críticas mentirosas, exposição, acusações. </p>
                            )}
                        </section>

                        <section className="psychologicalViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("psychologicalViolence")}>
                                Violência Psicológica {openSection === "psychologicalViolence" ? 
                                <IoIosArrowUp className="iconPsychological"/> : 
                                <IoIosArrowDown className="iconPsychological"/>}
                            </p>
                            {openSection === "psychologicalViolence" && (
                                <p className="dropdownText"> Dano emocional, diminuição da autoestima, prejuízo ao pleno desenvolvimento da mulher.  </p>
                            )}
                        </section>

                        <section className="patrimoniallViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("patrimoniallViolence")}>
                                Violência Patrimonial {openSection === "patrimoniallViolence" ? 
                                <IoIosArrowUp className="iconPatrimonial"/> : 
                                <IoIosArrowDown className="iconPatrimonial"/>}
                            </p>
                            {openSection === "patrimoniallViolence" && (
                                <p className="dropdownText"> Retenção, subtração, destruição parcial ou total de seus objetos. </p>
                            )}
                        </section>

                        <section className="sexualViolence">
                            <p className="dropdownTitle" onClick={() => toggleSection("sexualViolence")}>
                                Violência Sexual {openSection === "sexualViolence" ? 
                                <IoIosArrowUp className="iconSexual"/> : 
                                <IoIosArrowDown className="iconSexual"/>}
                            </p>
                            {openSection === "sexualViolence" && (
                                <p className="dropdownText"> Prática de relação sexual não desejada mediante intimidação, ameaça ou coação. </p>
                            )}
                        </section>
                    </section>

                    <section className="faq">

                    </section>

                    <button className="footer" onClick={() => navigate("/know-more")}>Próximo</button>
                </section>
            </main>
                
                
        </div>
    );
};

export default ViolenceTypesPage;
