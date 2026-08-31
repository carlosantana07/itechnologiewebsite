
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            

        {/*Main Slider Start*/}
        <section className="main-slider clearfix">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <div className="swiper-wrapper">
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/banner2.jpg)' }} ></div>
                        {/* /.image-layer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <h2 className="main-slider__title">Une expertise informatique<br/> personallisé et performante
                                        </h2>
                                        <p className="main-slider__text">Débloquez votre potentiel avec nos solutions expertes !<br/> Votre succès est notre mission - commençons dès maintenant !</p>
                                        <div className="main-slider__btn-box">
                                            <Link href="/" className="thm-btn main-slider__btn">Voir Plus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/banner3.jpg)' }} ></div>
                        {/* /.image-layer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <h2 className="main-slider__title">Support & Maintenance?<br/> Nous sommes là!
                                        </h2>
                                        <p className="main-slider__text">Notre équipe support certifiée:<br/> IBM | HPE | LENOVO ...</p>
                                        <div className="main-slider__btn-box">
                                            <Link href="/" className="thm-btn main-slider__btn">Voir Plus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="image-layer"
                            style={{ backgroundImage: 'url(assets/images/backgrounds/banner4.jpg)' }} ></div>
                        {/* /.image-layer */}
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="main-slider__content">
                                        <h2 className="main-slider__title">Besoin d'une applications? Nos <br/> developpeurs full-stack sont à votre dispositions.
                                        </h2>
                                        <p className="main-slider__text">La combinaison de leurs compétences techniques, de leur polyvalence et de leur capacité à résoudre des problèmes fait de nos développeurs full stack des contributeurs redoutables dans vos projets technologiques.<br/> </p>
                                        <div className="main-slider__btn-box">
                                            <Link href="/" className="thm-btn main-slider__btn">Voir Plus</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </div>

                {/* If we need navigation buttons */}
                <div className="main-slider__nav">
                    <div className="swiper-button-prev h1p" id="main-slider__swiper-button-next">
                        <i className="icon-left-arrow"></i>
                    </div>
                    <div className="swiper-button-next h1n" id="main-slider__swiper-button-prev">
                        <i className="icon-right-arrow"></i>
                    </div>
                </div>


            </Swiper>
        </section>
        {/*Main Slider End*/}
        </>
    )
}
