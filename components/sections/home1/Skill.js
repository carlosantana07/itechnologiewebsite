'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function Skill() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            {/*Skill One Start*/}
            <section className="skill-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="skill-one__left">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">NOTRE TERMINAL INTELLIGENT</span>
                                    <h2 className="section-title__title">PULSAR PDV</h2>
                                </div>
                                <p className="skill-one__text">Acceptation de cash, de cartes VISA, MASTERCARD et méthodes de paiement locales,cartes de crédit, portefeuilles mobiles, paiements par code QR, etc.
                                </p>
                                <p className="skill-one__text-2">Intégrations simples et un logiciel pour le
                                    développement d’applications (SDK) destiné aux services du marché local (par exemple, livraison, paiement des services publics, agences bancaires,
                                    etc.)
                                </p>
                                <p className="skill-one__text-2">Basé sur un système d'exploitation propriétaire et indépendant, avec une fonction de gestion des appareils par le biais de services en Cloud.


                                </p>
                                <div className="skill-one__progress">
                                    <div className="skill-one__progress-single">
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="99%" style={{ width: '99%' }}>
                                                <div className="count-text">99%</div>
                                                <h4 className="skill-one__progress-title">PCI-PTS</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-one__progress-single">
                                        <div className="bar">
                                            <div className="bar-inner count-bar" data-percent="99%" style={{ width: '99%' }}>
                                                <div className="count-text">10 JOURS</div>
                                                <h4 className="skill-one__progress-title">LIVRAISON</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-one__progress-single">
                                        <div className="bar marb-0">
                                            <div className="bar-inner count-bar" data-percent="99%" style={{ width: '99%' }}>
                                                <div className="count-text">99%</div>
                                                <h4 className="skill-one__progress-title">PCI-DSS</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="skill-one__right">
                                <div className="skill-one__right-img-box wow slideInRight" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="skill-one__right-img">
                                        <img src="assets/images/backgrounds/pdv.jpg" alt="" />
                                        <div className="skill-one__video-link">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="skill-one__video-icon">
                                                    <span className="fa fa-play"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="skill-one__video-content">
                                        <p>Terminal intelligent dans un appareil compact
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Skill One End*/}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="8cZW2gwYHyk" onClose={() => setOpen(false)} />
        </>
    )
}
