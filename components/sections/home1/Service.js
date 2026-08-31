'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Service() {
    return (
        <>

            {/*Services One Start*/}
            <section className="services-one">
                <div className="services-one-shape-1 float-bob-x">
                    <img src="assets/images/shapes/services-one-shape-1.png" alt="" />
                </div>
                <div className="services-one-shape-2 float-bob-y">
                    <img src="assets/images/shapes/services-one-shape-2.png" alt="" />
                </div>
                <div className="container">
                    <div className="section-title section-title--two text-center">
                        <span className="section-title__tagline">NOS SERVICES</span>
                        <h2 className="section-title__title">Notre Gamme de Services</h2>
                        <p className="section-title__text">Nos services permettent aux entreprises d'améliorer leur efficacité, de favoriser l'innovation et de rationaliser les processus de développement, leur permettant ainsi de rester compétitives et de fournir des solutions à la pointe de la technologie.<br /> </p>
                    </div>
                    <div className="row">
                        {/*Services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/backgrounds/engineering.jpg" alt="" />
                                    <div className="services-one__icon">
                                        <span className="icon-laptop"></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="/">INGÉNIERIE LOGICIELLE</Link></h3>
                                    <p className="services-one__text">
                                        L'ingénierie logicielle favorise la qualité, l'innovation et l'efficacité, transformant les idées en solutions fiables et évolutives.</p>
                                    <div className="services-one__btn-box">
                                        <Link href="/" className="thm-btn services-one__btn">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services One Single Start*/}
                        {/*Services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/backgrounds/networking.jpg" alt="" />
                                    <div className="services-one__icon">
                                        <span className="icon-phone"></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="/">RÉSEAU & SÉCURITÉ</Link></h3>
                                    <p className="services-one__text">La réseau et la sécurité protègent les données et les systèmes contre les accès non autorisés et les attaques.</p>
                                    <div className="services-one__btn-box">
                                        <Link href="/" className="thm-btn services-one__btn">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services One Single Start*/}
                        {/*Services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/backgrounds/cloud.jpg" alt="" />
                                    <div className="services-one__icon">
                                        <span className="icon-tap"></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="/">CLOUD COMPUTING</Link></h3>
                                    <p className="services-one__text">Le cloud offre des ressources évolutives en ligne, permettant aux entreprises d'améliorer leur flexibilité, de réduire leurs coûts et de rationaliser leurs opérations sans infrastructure importante.</p>
                                    <div className="services-one__btn-box">
                                        <Link href="/" className="thm-btn services-one__btn">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services One Single Start*/}
                        {/*Services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/backgrounds/application.jpg" alt="" />
                                    <div className="services-one__icon">
                                        <span className="icon-tap"></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="/">APPLICATIONS</Link></h3>
                                    <p className="services-one__text">Les applications simplifient les processus et améliorent l'expérience utilisateur en offrant des solutions ciblées pour des tâches spécifiques, permettant aux entreprises d'améliorer l'efficacité et l'engagement sur différentes plateformes.
                                    </p>
                                    <div className="services-one__btn-box">
                                        <Link href="/" className="thm-btn services-one__btn">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services One Single Start*/}{/*Services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/backgrounds/audit.jpg" alt="" />
                                    <div className="services-one__icon">
                                        <span className="icon-tap"></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="/">AUDIT</Link></h3>
                                    <p className="services-one__text">Les audits de plateformes et de logiciels évaluent la performance, la sécurité et la conformité des systèmes, identifiant les domaines à améliorer et garantissant une fonctionnalité optimale ainsi qu'une gestion des risques.       </p>
                                    <div className="services-one__btn-box">
                                        <Link href="/" className="thm-btn services-one__btn">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services One Single Start*/}{/*Services One Single Start*/}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="services-one__single">
                                <div className="services-one__img">
                                    <img src="assets/images/backgrounds/qa.jpg" alt="" />
                                    <div className="services-one__icon">
                                        <span className="icon-tap"></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="/">ASSURANCE QUALITÉ </Link></h3>
                                    <p className="services-one__text">L'assurance qualité des logiciels et des plateformes garantit la fiabilité et la performance des produits en testant et validant systématiquement les fonctionnalités, ce qui améliore la satisfaction des utilisateurs et réduit les défauts.</p>
                                    <div className="services-one__btn-box">
                                        <Link href="/" className="thm-btn services-one__btn">Voir Plus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Services One Single Start*/}
                    </div>
                </div>
            </section>
            {/*Services One End*/}
        </>
    )
}
