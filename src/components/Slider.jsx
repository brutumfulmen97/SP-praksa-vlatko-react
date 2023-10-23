import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/slider.module.scss";
import Button from "./Button";
import znak from "../assets/znak.svg";
import rostilj from "../assets/rostilj.svg";
import zvezde from "../assets/zvezde.svg";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Slider() {
    return (
        <section className={styles.section__swiper}>
            <div className={styles.swiper}>
                <div className={styles.znak}>
                    <img src={znak} alt="znak" />
                </div>
                <div className={styles.tekst}>
                    <p>Empfehlungs</p>
                    <h2>Was die Leute über uns sagen</h2>
                </div>
                <Swiper
                    effect={"coverflow"}
                    spaceBetween={30}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: "auto",
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 150,
                        scale: 0.8,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev",
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper"
                >
                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.slide}>
                            <img src={rostilj} alt="" />
                            <img src={zvezde} alt="" />
                            <p>
                                Sprechen Sie deutsch aliquip ex ea commodo
                                consequat. Wiener Schnitzel aute irure dolor in
                                reprehenderit Guten Tag mollit anim Stuttgart.
                            </p>
                            <h4>Maria Kartofeln</h4>
                        </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.slide}>
                            <img src={rostilj} alt="" />
                            <img src={zvezde} alt="" />
                            <p>
                                Wiener Schnitzel amet, consectetur Handtasche
                                elit, sed do eiusmod tempor Stuttgart ut labore
                                et dolore magna Luftballons Ut Turnbeutel
                                nostrud exercitation ullamco .
                            </p>
                            <h4>Halling Tobias</h4>
                        </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.slide}>
                            <img src={rostilj} alt="" />
                            <img src={zvezde} alt="" />
                            <p>
                                Achtung fur atine indoctum complectitur HugoClub
                                Mate mea meliore denique nominavi id. Ohrwurm
                                expetenda nam an, his ei Reise euismod
                                assentior.
                            </p>
                            <h4>Rene Weinstein</h4>
                        </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.slide}>
                            <img src={rostilj} alt="" />
                            <img src={zvezde} alt="" />
                            <p>
                                Sprechen Sie deutsch aliquip ex ea commodo
                                consequat. Wiener Schnitzel aute irure dolor in
                                reprehenderit Guten Tag mollit anim Stuttgart.
                            </p>
                            <h4>Maria Kartofeln</h4>
                        </div>{" "}
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.slide}>
                            <img src={rostilj} alt="" />
                            <img src={zvezde} alt="" />
                            <p>
                                Wiener Schnitzel amet, consectetur Handtasche
                                elit, sed do eiusmod tempor Stuttgart ut labore
                                et dolore magna Luftballons Ut Turnbeutel
                                nostrud exercitation ullamco .
                            </p>
                            <h4>Halling Tobias</h4>
                        </div>{" "}
                    </SwiperSlide>
                </Swiper>
                <div className={styles.buttons}>
                    <div className={`${styles.swiper_button_prev} prev`}>
                        <ArrowLeft />
                    </div>
                    <div className={`${styles.swiper_button_next} next`}>
                        <ArrowRight />
                    </div>
                </div>
            </div>
            <div className={styles.slider_button}>
                <Button variant={"primary"}>Alle Berichte</Button>
            </div>
        </section>
    );
}
