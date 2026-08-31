'use client'
import CounterUp from "@/components/elements/CounterUp"



export default function Funfacts() {
    return (
        <>
        {/*Counter One Start*/}
        <section className="counter-one">
            <div className="counter-one__bg jarallax"
                style={{ backgroundImage: 'url(assets/images/backgrounds/about-one-bg-img-1.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <ul className="counter-one__list list-unstyled">
                            <li className="counter-one__single">
                            
                            <CounterUp end={8} />
                                <span className="counter-one__plus">+</span>
                                <p className="counter-one__text">Années d'activitées</p>
                            </li>
                            <li className="counter-one__single">
                            <CounterUp end={2} />
                                <span className="counter-one__plus">k+</span>
                                <p className="counter-one__text">Clients Satisfaits</p>
                            </li>
                            <li className="counter-one__single">
                            <CounterUp end={5} />
                                <span className="counter-one__plus">k+</span>
                                <p className="counter-one__text">Service Completés</p>
                            </li>
                            <li className="counter-one__single">
                            <CounterUp end={99} />
                                <span className="counter-one__plus">%</span>
                                <p className="counter-one__text">Satisfactions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*Counter One End*/}
            

        </>
    )
}
