import Link from "next/link"

export default function About() {
    
    return (
        <>

        {/*About One Start*/}
        <section className="about-one">
            <div className="about-one__bg float-bob-y"
                style={{ backgroundImage: 'url(assets/images/backgrounds/about-one-bg-img-1.jpg)' }} >
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-one__left">
                            <div className="about-one__img wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <img src="assets/images/backgrounds/banner.jpg" alt=""/>
                                <div className="about-one__our-goal">
                                    <p className="about-one__our-goal-sub-title">Nos Objectifs:</p>
                                    <h3 className="about-one__our-goal-title">"Élevez votre entreprise avec un service de qualité 24/7 !"</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">NOTRE INTRODUCTION</span>
                                <h2 className="section-title__title">Bienvenue sur le site officiel</h2>
                            </div>
                            <p className="about-one__right-text-1">Nous sommes à la pointe de l'innovation dans le secteur des technologies. Notre mission est d'autonomiser les entreprises et les particuliers grâce à des solutions de pointe qui améliorent les performances, rationalisent les opérations et favorisent le succès. Avec une équipe dédiée d'experts spécialisés dans [domaines d'expertise spécifiques, par ex. développement de logiciels, cybersécurité, solutions cloud], nous nous engageons à fournir des services de haute qualité adaptés à vos besoins uniques.</p>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="about-one__points-single">
                                        <div className="about-one__points-icon">
                                            <span className="icon-repair"></span>
                                        </div>
                                        <div className="about-one__points-text">
                                            <h3 className="about-one__points-title"><Link href="/">APPLICATIONS</Link></h3>
                                            <p className="about-one__points-subtitle">Notre gamme complète de produits et services applicatifs</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="about-one__points-single">
                                        <div className="about-one__points-icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="about-one__points-text">
                                            <h3 className="about-one__points-title"><Link href="/">Matériel Informatique</Link></h3>
                                            <p className="about-one__points-subtitle">Notre gamme complète de matériel informatiques (serveurs, ordinateurs...)</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <Link href="contact" className="thm-btn">Nous Contacter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End*/}
        </>
    )
}