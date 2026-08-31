'use client'
import { useState } from 'react'
import Link from "next/link"
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>


        {/*FAQ One Start*/}
        <section className="faq-one">
            <div className="faq-one-shape-1 shapeMover"
                style={{ backgroundImage: 'url(assets/images/shapes/faq-one-shape.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Des Quesstions?</span>
                                <h2 className="section-title__title">Questions Posées Fréquements</h2>
                            </div>
                            <p className="faq-one__text-2">Bienvenue dans notre section FAQ ! Ici, vous trouverez des réponses aux questions les plus courantes concernant nos produits et services. Nous visons à fournir clarté et assistance pour améliorer votre expérience avec nous. Si vous avez une question spécifique qui n'est pas abordée ici, n'hésitez pas à contacter notre équipe de support pour obtenir de l'aide supplémentaire. Merci de votre visite !</p>
                           
                            <div className="faq-one__btn-box">
                                <Link href="#" className=" thm-btn faq-one__btn">Poser une Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Quels services proposez-vous ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Nous offrons du développement logiciel, de l'informatique dans le cloud, de la cybersécurité, de l'approvisionnement de matériel informatique et des conseils technologiques pour aider les entreprises à améliorer leurs opérations.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>Quelles technologies utilisez-vous ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Nous offrons du développement logiciel, de l'informatique dans le cloud, de la cybersécurité, de l'approvisionnement de matériel informatique et des conseils technologiques pour aider les entreprises à améliorer leurs opérations.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>Fournissez-vous un support continu après l'achèvement du projet ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Oui, nous proposons des services de maintenance et de support offert 24/7 pour garantir le bon fonctionnement et l'efficacité de vos systèmes après le déploiement.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Quelle sont vos délais de livraison de matériel informatique?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Nous offrons un service de livraison ne dépassant pas 10 jours ouvrables, à moinse de situation très complexe.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>Comment garantissez-vous la sécurité des données ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Nous mettons en œuvre des mesures de sécurité robustes, y compris le cryptage, les pare-feux et des audits réguliers pour protéger vos données contre les accès non autorisés.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End*/}
            
        </>
    )
}
