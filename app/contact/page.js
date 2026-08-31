
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contactez-Nous">
                {/*Contact Page Start*/}
                <section className="contact-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__left">
                                    <div className="contact-page__shape-1">
                                        <img src="assets/images/shapes/contact-page-shape-1.png" alt="" />
                                    </div>
                                    <h3 className="contact-page__title">Envoyez-nous un message</h3>
                                    <form action="assets/inc/sendemail.php" className="contact-page__form contact-form-validated"
                                    >
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="contact-page__form-input-box">
                                                    <input type="text" placeholder="Nom" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="contact-page__form-input-box">
                                                    <input type="email" placeholder="Email" name="email" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="contact-page__form-input-box">
                                                    <input type="text" placeholder="Objet" name="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="contact-page__form-input-box">
                                                    <input type="text" placeholder="Telephone" name="Phone Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="contact-page__form-input-box text-message-box">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="contact-page__btn-box">
                                                    <Link href="about" className="thm-btn contact-page__btn">Envoyer</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__right">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">PASSEZ NOUS VOIR</span>
                                        <h2 className="section-title__title">Visitez nos locaux</h2>
                                    </div>
                                    <p className="contact-page__right-text">Nous vous invitons à nous rendre visite à tout moment ! Nos portes sont toujours ouvertes pour des questions, du soutien ou simplement pour dire bonjour. Que vous soyez un client, un partenaire ou simplement curieux de nos services, nous sommes là pour vous aider. N'hésitez pas à passer pendant nos heures d'ouverture, et notre équipe sympathique se fera un plaisir de vous aider !</p>
                                    <div className="contact-page__points-box-inner">
                                        <div className="contact-page__points-box">
                                            <h3 className="contact-page__points-title">Burkina Faso</h3>
                                            <ul className="contact-page__points-list list-unstyled">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-send"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>Secteur 16, Lot:09, Parcelle:04
                                                            Cité Azimo, Ouaga 2000</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-mail"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="mailto:support@domain.com">info@itechnologiesa.com</Link></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-call"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="tel:2267950202">(+226) 75 02 02 02</Link></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-clock"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p>08:00 AM - 18:00 PM</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Contact Page End*/}

                {/*Google Map Start*/}
                <section className="google-map">
                    <div className="container">
                        <iframe
                            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=itechnologie burkina&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            className="google-map__one"></iframe>
                    </div>
                </section>
                {/*Google Map End*/}

            </Layout>
        </>
    )
}