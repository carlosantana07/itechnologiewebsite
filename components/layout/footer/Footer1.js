import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/*Site Footer Start*/}
            <footer className="site-footer">
                <div className="site-footer-shape-1 float-bob-y"
                    style={{ backgroundImage: 'url(assets/images/shapes/logo-1.png)' }} ></div>
                <div className="site-footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="#"><img src="assets/images/resources/footerlogo.png" alt=""/></Link>
                                    </div>
                                    <div className="footer-widget__about-text-box">
                                        <p className="footer-widget__about-text">Fournisseur complet de solutions technologiques spécialisé dans les serveurs, l'informatique en nuage, l'intégration, le conseil, l'assurance qualité, le réseautage et la sécurité. Avec un engagement envers l'innovation et l'excellence.</p>
                                    </div>
                                    <div className="footer-widget__social-box">
                                        <h4 className="footer-widget__social-title">Restez Connecté</h4>
                                        <div className="site-footer__social">
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__links">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Lien Rapide</h3>
                                    </div>
                                    <ul className="footer-widget__Explore-list list-unstyled">
                                        <li><Link href="/">Acceuil</Link></li>
                                        <li><Link href="about">À Propos</Link></li>
                                        <li><Link href="services">Applications</Link></li>
                                        <li><Link href="blog-v-1">Serveurs</Link></li>
                                        <li><Link href="contact">Contactez-Nous</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__services">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Nos Services</h3>
                                    </div>
                                    <ul className="footer-widget__services-list list-unstyled">
                                        <li><Link href="services-details">INGÉNIERIE LOGICIELLE</Link></li>
                                        <li><Link href="services-details">RÉSEAU & SÉCURITÉ</Link></li>
                                        <li><Link href="services-details">CLOUD COMPUTING</Link></li>
                                        <li><Link href="services-details">INTÉGRATION & DEVELLOPEMENT</Link></li>
                                        <li><Link href="services-details">ASSURANCE QUALITÉ</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__Contact">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Contactez-Nous</h3>
                                    </div>
                                    <ul className="footer-widget__Contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-map"></span>
                                            </div>
                                            <div className="text">
                                                <p>Secteur 16, Lot:09, Parcelle:04 <br/>Cité Azimo, Ouaga 2000</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-headphones"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <Link href="tel:6668880000">+226 79 05 02 02</Link>
                                                    <Link href="tel:4448880000">+226 75 25 28 28</Link>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <Link href="mailto:needhelp@company.com">info@itechnologiesa.ca</Link>
                                                    <Link href="mailto:company@gmail.com">support@itechnologie.ca</Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="site-footer__bottom-inner">
                            <p className="site-footer__bottom-text">© 2026 Copyright by <Link href="https://themeforest.net/user/thememx">I</Link>TECHNOLOGIE</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Site Footer End*/}

        </>
    )
}
