'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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


export default function Testimonial() {
    return (
        <>


            {/*Testimonial One Start*/}
            <section className="testimonial-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">NOS RÉFÉRENCES</span>
                                <h2 className="section-title__title">Quelques Clients</h2>
                            </div>
                            <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel">
                                {/*testimonial One Single Start*/}
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <img src="assets/images/backgrounds/coris.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-info-box">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-one__text">iTechnologie a fourni des serveurs IBM Power au groupe CORIS en évaluant leurs besoins spécifiques et en livrant des solutions personnalisées. Ils ont géré l'installation sans heurts, assurant une interruption minimale, et ont proposé une formation au personnel sur la gestion des serveurs. Un support continu a été inclus pour surveiller la performance. Ce projet a renforcé l'infrastructure informatique de CORIS, mettant en avant l'expertise d'iTechnologie.

                                                </p>
                                                <div className="testimonial-one__client-info">
                                                    <h3>DSI</h3>
                                                    <p>CORIS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <img src="assets/images/backgrounds/bcb.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-info-box">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-one__text">iTechnologie a fourni des serveurs IBM Power à la Banque Commerciale du Burkina en évaluant leurs besoins spécifiques et en livrant des solutions personnalisées. Ils ont géré l'installation sans heurts, assurant une interruption minimale, et ont proposé une formation au personnel sur la gestion des serveurs. Un support continu a été inclus pour surveiller la performance. Ce projet a renforcé l'infrastructure informatique de la BCB, mettant en avant l'expertise d'iTechnologie.</p>
                                                <div className="testimonial-one__client-info">
                                                    <h3>DPI</h3>
                                                    <p>BCB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*testimonial One Single End*/}
                                {/*testimonial One Single Start*/}
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <img src="assets/images/backgrounds/zbi.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-info-box">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-one__text">
                                                    Nous fournissons un soutien annuel à Wendkuni Bank International en réalisant un entretien régulier et des mises à niveau nécessaires de leur infrastructure physique. Une surveillance continue et une équipe de support dédiée traitent rapidement tout problème. Nous garantissons la conformité et la sécurité, ainsi que des solutions de sauvegarde robustes pour la continuité des activités. De plus, nous offrons une formation au personnel et maintenons une documentation complète de tous les systèmes.</p>
                                                <div className="testimonial-one__client-info">
                                                    <h3>DSI</h3>
                                                    <p>WBI</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*testimonial One Single End*/}
                                {/*testimonial One Single Start*/}
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="testimonial-one__single">
                                            <div className="testimonial-one__client-img-box">
                                                <div className="testimonial-one__client-img">
                                                    <img src="assets/images/backgrounds/ibbank.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-one__client-info-box">
                                                <div className="testimonial-one__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-one__text">Nous fournissons un support de maintenance et de licences à IB Bank en veillant à ce que tous les logiciels et systèmes soient à jour et conformes aux normes légales. Notre équipe effectue des audits réguliers pour évaluer les besoins et mettre en œuvre les mises à jour nécessaires. Nous gérons également les contrats de licence pour assurer que la banque reste entièrement licenciée pour toutes les applications critiques. Cette approche globale améliore l'efficacité opérationnelle et minimise les disruptions potentielles.</p>
                                                <div className="testimonial-one__client-info">
                                                    <h3>DSI</h3>
                                                    <p>IB Bank</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                {/*testimonial One Single End*/}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/*Testimonial One End*/}


        </>
    )
}
