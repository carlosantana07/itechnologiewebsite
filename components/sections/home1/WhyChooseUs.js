import Link from "next/link"

export default function WhyChooseUs() {
    return (
        <>

     {/*Why Choose One Start*/}
     <section className="why-choose-one">
            <div className="container">
                <div className="section-title section-title--two text-center">
                    <span className="section-title__tagline">Pourquoi Nous?</span>
                    <h2 className="section-title__title">Faire le bon choix</h2>
                    <p className="section-title__text">Dans notre entreprise technologique, nous nous engageons à fournir des solutions innovantes adaptées à vos besoins. Notre équipe d'experts possède une vaste expérience de l'industrie, garantissant fiabilité et excellence dans chaque produit et service. Nous plaçons la satisfaction client au cœur de nos priorités en offrant un support exceptionnel et en maintenant une communication transparente. Faites-nous confiance pour renforcer votre entreprise avec une technologie de pointe et un soutien indéfectible.</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-award"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="/">Garantie de Service</Link>
                                </h3>
                                <p className="why-choose-one__text">Profitez d'une tranquillité d'esprit avec notre service de garantie complet, garantissant la protection de vos produits technologiques contre les défauts et les pannes.Notre équipe de support dédiée est prête à vous aider avec des solutions rapides et sans tracas. </p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-customer-service"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="/">Service à la Clientèle</Link>
                                </h3>
                                <p className="why-choose-one__text">Découvrez un service client exceptionnel avec notre équipe réactive, prête à vous aider avec toutes vos questions et préoccupations. Nous nous engageons à fournir des solutions rapides et efficaces pour améliorer votre satisfaction.</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-security"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="/">Securité</Link>
                                </h3>
                                <p className="why-choose-one__text">Restez en sécurité avec nos solutions de sécurité avancées, protégeant vos actifs technologiques contre les menaces et les vulnérabilités. Notre équipe d'experts est dédiée à vous fournir un support fiable et une tranquillité d'esprit.</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="400ms">
                        {/*Why Choose One Single Start*/}
                        <div className="why-choose-one__single">
                            <div className="why-choose-one__icon">
                                <span className="icon-computer-1"></span>
                            </div>
                            <div className="why-choose-one__content">
                                <h3 className="why-choose-one__title"><Link href="/">Équipement Certifié</Link>
                                </h3>
                                <p className="why-choose-one__text">Faites confiance à nos équipements certifiés, garantissant une qualité et une fiabilité exceptionnelles pour vos besoins technologiques. Chaque produit respecte les normes de l'industrie, vous offrant ainsi une confiance dans vos achats.</p>
                            </div>
                        </div>
                        {/*Why Choose One Single Start*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="why-choose-one__bottom">
                            <p className="why-choose-one__bottom-text">Obtenez des services de qualité de notre part <Link href="/">guide & support</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why Choose One End*/}
           
        </>
    )
}
