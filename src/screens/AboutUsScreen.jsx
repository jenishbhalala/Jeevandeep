import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Map from "../components/Map";
import OurVolunteer from "../components/OurVolunteer";
import HelpUs from "../components/HelpUs";

import "../assets/scss/About.scss";
import "../assets/scss/Common.scss";

import sectionImg from "../assets/Images/section-icon.png";
import about1 from "../assets/Images/about-img.jpg";
import about2 from "../assets/Images/about-img2.jpg";
import faqImg from "../assets/Images/faq-img.jpg";

const AboutUsScreen = () => {
    return (
        <>
            <Header />
            <section class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content">
                                <h2 class="breadcrumb__title">About</h2>
                                <ul class="breadcrumb__list">
                                    <li class="active__list-item"><a href="/">home</a></li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about-large-img"><img src={about1} alt="" /></div>
                        </div>
                        <div class="col-lg-5">
                            <div class="about-semi-img"><img src={about2} alt="" /></div>
                        </div>
                        <div class="col-lg-7">
                            <div class="about-heading">
                                <div class="section-heading">
                                    <div class="section-icon"><img src={sectionImg} alt="section-icon" />
                                    </div>
                                    <h2 class="section__title">Discover About Jeevandeep</h2>
                                    <p class="section__meta">"Support Group for Patients, Physicians and Public"</p>
                                    <p class="section__desc">Jeevandepp Foundation is a not-for-profit, non-governmental organization started to promote organ donation in 2022 in surat by philanthropists and medical professionals led by Piyush Gondaliya. 
                                    It is a registered NGO with Income Tax exemption under Section 80G and 35AC. JEEVANDEEP Foundation was started by a group of like-minded and concerned medical and non-medical professionals committed to increasing the reach of the Transplantation of Human Organs Act. 
                                    The Government of India passed this act in 1994 to broaden the concept of organ donation and stop commercial dealings in organs, especially kidneys. It is now possible to not only donate one’s eyes,
                                     but also other vital organs like the heart, lungs, liver, pancreas and kidneys.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurVolunteer />
            {/* <section class="faq-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-heading">
                                <div class="section-icon"><img src={sectionImg} alt="section-icon" /></div>
                                <h2 class="section__title">Have any Question?</h2>
                                <p class="section__meta">frequently asked questions</p>
                            </div>
                            <div class="faq-img-box"><img src={faqImg} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="accordion-container">
                                <div class="ac">
                                    <h2 class="ac-q" tabindex="0">Make a difference in the life of a child</h2>
                                    <div class="ac-a">
                                        <p class="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                                <div class="ac">
                                    <h2 class="ac-q" tabindex="0">Let’s do the right thing now</h2>
                                    <div class="ac-a">
                                        <p class="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                                <div class="ac">
                                    <h2 class="ac-q" tabindex="0">Join your hand with us for a better life</h2>
                                    <div class="ac-a">
                                        <p class="accordion__content-desc">Suspendisse finibus urna mauris, vitae
                                            consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper
                                            vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est
                                            metus. There are many variations of eration in some form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <HelpUs /> */}
            {/* <Map /> */}
            <Footer />
        </>
    )
}

export default AboutUsScreen;