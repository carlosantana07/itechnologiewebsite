import Link from "next/link"


export default function Cases() {
    return (
        <>
        {/*Experience One Start*/}
        <section className="experience-one">
            <div className="experience-one-shape-1 shapeMover"
                style={{ backgroundImage: 'url(assets/images/shapes/experience-one-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Notre Experience</span>
                    <h2 className="section-title__title">Nous avons de longues années d'expériences dans le domaine de l'infrastructure et du développement
                        <br/></h2>
                </div>
                <div className="row">
                    {/*Experience One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="experience-one__single">
                            <div className="experience-one__icon">
                                <span className="icon-service"></span>
                            </div>
                            <div className="experience-one__content">
                                <h3 className="experience-one__title"><Link href="services-details">Services de Qualité</Link>
                                </h3>
                                <p className="experience-one__text">Nous croyons fermement que la qualité est la clé de la satisfaction de nos clients. C'est pourquoi nous avons mis en place des processus rigoureux et des normes élevées à chaque étape de nos projets.</p>
                            </div>
                        </div>
                    </div>
                    {/*Experience One Single End*/}
                    {/*Experience One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="experience-one__single">
                            <div className="experience-one__icon">
                                <span className="icon-management"></span>
                            </div>
                            <div className="experience-one__content">
                                <h3 className="experience-one__title"><Link href="team">Experts Dédiés</Link></h3>
                                <p className="experience-one__text">Notre équipe regroupe des spécialistes dans divers domaines des TI, allant du développement de logiciels à la cybersécurité, assurant ainsi des solutions complètes et adaptées à vos besoins. </p>
                            </div>
                        </div>
                    </div>
                    {/*Experience One Single End*/}
                    {/*Experience One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="experience-one__single">
                            <div className="experience-one__icon">
                                <span className="icon-headphones"></span>
                            </div>
                            <div className="experience-one__content">
                                <h3 className="experience-one__title"><Link href="contact">Support 24/7</Link></h3>
                                <p className="experience-one__text">Nos techniciens sont formés dans divers domaines des TI, vous assurant une réponse adaptée à vos besoins spécifiques, qu'il s'agisse de logiciels, de matériel ou de réseaux. Vous n’êtes jamais seul. Notre équipe est là!</p>
                            </div>
                        </div>
                    </div>
                    {/*Experience One Single End*/}
                </div>
            </div>
        </section>
        {/*Experience One End*/}

        </>
    )
}
