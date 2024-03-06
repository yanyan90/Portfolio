<template>
    <div class="footer-container">
        <div class="fuzzy-overlay-officiel"></div>
        <div class="wave"></div>
        <div class="title-background">
            <h1>créativité</h1>
            <h1>Innovation du web</h1>
            <h1>& Design</h1>
        </div>
        <div class="informations">
            <div class="contact">
                <div class="dot"></div>
                <a class="contacter" :href="emailLink">Contactez-Moi</a>
                <p class="text-card">Dites bonjour à la rencontre de la créativité et de
                    l'innovation pour faire
                    décoller votre projet en toute fluidité. <span class="red"><a :href="emailLink">Écrivez-moi</a></span>
                </p>
                <div class="icons">
                    <div class="icon animate__animated animate__bounce"><a :href="emailLink"><img
                                src="/images/email (1).png" width="50" alt="Phone"></a>
                    </div>
                    <div class="icon phoneNum" @click="callPhoneNumber"><img src="/images/phone-call.png" width="50"
                            alt="Phone">
                    </div>
                </div>
            </div>
            <div class="personnal-info">
                <div class="dot-2"></div>
                <a href="#" class="a-propos">À Propos</a>
                <div class="text-card2">
                    Détenteur d'un diplôme du Cégep en développement web, je suis également passionné par le design.
                    J'aimerais évoluer et repousser les limites des animations CSS, des effets de défilement (scroll) et des
                    révélations de texte.
                </div>
                <h4>Yanik</h4>
            </div>
        </div>
        <div class="reseau-sociaux2">
            <div class="soc"><a href="https://github.com/yanyan90"><img src="\images\github-mark-white.svg" width="50"
                        alt="Logo github"></a>
            </div>
            <div class="soc"><a href="https://www.facebook.com/yanik.lemieux.5/"><img
                        src="/images/f_logo_RGB-White_1024.png" width="50" alt="Logo facebook"></a>
            </div>
            <div class="soc"><a href="https://www.linkedin.com/in/yanik-lemieux-4219a4105/"><img src="/images/linkedin.png"
                        width="50" alt="Logo LinkedIn"></a></div>
        </div>
        <div class="copyright">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" class="svg-icon">
                <path
                    d="M400-320h160q17 0 28.5-11.5T600-360v-80h-80v40h-80v-160h80v40h80v-80q0-17-11.5-28.5T560-640H400q-17 0-28.5 11.5T360-600v240q0 17 11.5 28.5T400-320Zm80 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <p>{{ anneeActuelle }} Yanik Lemieux. Tous droits réservés.</p>
        </div>
    </div>
</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import 'animate.css'
// import WOW from "wowjs"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const phoneNumber = '14505128626' // Replace with your actual phone number
const callPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`
}

const emailAddress = 'yanik_lemieux@hotmail.com.com'
const subject = ''
const body = ''
const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
const obtenirAnneeActuelle = () => new Date().getFullYear()

const anneeActuelle = obtenirAnneeActuelle()


onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    // animation contact****************************************************
    const div = ".contact"
    gsap.to(div, {
        x: -480,
        duration: 5,
        scrollTrigger: {
            trigger: div,
            start: "top 80%",
            end: "top 30%",
            scrub: 4,
            toggleActions: "play none reverse reverse",
            markers: false,

        },
    })
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    // animation personnal info****************************************************
    const divpersonal = ".personnal-info"
    gsap.to(divpersonal, {
        x: 600,
        duration: 5,
        scrollTrigger: {
            trigger: divpersonal,
            start: "top 80%",
            end: "top 30%",
            scrub: 4,
            toggleActions: "play none reverse none",
            markers: false,
            refreshPriority: 0,
        },
    })
});

</script>


<style>
.footer-container {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 1;
}

.copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.svg-icon {
    fill: hsla(0, 0%, 100%, 0.527);
    width: 16px;
    /* margin-left: 20px; */

}

.copyright p {
    color: hsla(0, 0%, 100%, 0.425);
    margin-left: 5px;
    font-size: 14px;
}

.fuzzy-overlay-officiel {
    position: absolute;
    inset: -200%;
    z-index: 0;
    background-image: url(/images/output-onlinepngtools.png);
    opacity: 10%;
    animation: shift 0.2s linear infinite both;
    pointer-events: none;
}

@keyframes shift {
    0% {
        transform: translateX(10%) translateY(10%);
    }

    100% {
        transform: translateX(-10%) translateY(-10%);
    }
}

.wave {
    width: 100vw;
    height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(241, 241, 241);
    z-index: 2;
    --mask:
        radial-gradient(122.98px at 50% calc(100% - 165.00px), #000 99%, #0000 101%) calc(50% - 110px) 0/220px 100%,
        radial-gradient(122.98px at 50% calc(100% + 110.00px), #0000 99%, #000 101%) 50% calc(100% - 55px)/220px 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);
}

.title-background {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.title-background h1 {
    text-transform: uppercase;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 8em;
    line-height: 1em;
    color: rgb(241, 241, 241);
    letter-spacing: 15px;
}

.informations {
    width: 95%;
    height: 95%;
    background-color: #25252500;
    position: relative;
}

.contact {
    background-color: rgba(255, 255, 255, 0.945);
    width: 242px;
    height: 320px;
    position: absolute;
    right: -350px;
    top: 0%;
    transform: rotate(6deg);
    z-index: 4;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 2px 10px black;
}

.reseau-sociaux2 {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    margin-bottom: 25px;
}

.soc {
    margin-right: 25px;
    margin-bottom: 15px;
}

.text-card2 {
    margin-left: 20px;
    margin-right: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    color: #252525;
    margin-top: -60px;
}

.dot {
    width: 5px;
    height: 5px;
    background-color: #252525;
    border-radius: 50%;
    margin-top: -5px;
    margin-left: 20px;
}


a.contacter {
    color: #000000;
    text-decoration: none;
    font-family: "Bebas Neue", sans-serif;
    margin-top: -57px;
    margin-left: 20px;
    font-size: 1.2em;
}

p.text-card {
    margin-left: 20px;
    margin-right: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    color: #252525;

    margin-top: -48px;
}

span.red a {
    color: #b44949;
    text-decoration: none;
}

.icons {
    display: flex;
    justify-content: space-around;
    width: 75%;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: -50px;
}

.icon img {
    box-shadow: 0px 2px 6px #2525259f;
    border-radius: 50%;
}

.phoneNum {
    cursor: pointer;
}

h4 {
    font-family: "Bebas Neue", sans-serif;
    color: #252525;
    font-size: 3.5em;
    margin-left: 20px;
    margin-top: -63px;
    margin-bottom: -38px;
}

.personnal-info {
    background-color: rgba(255, 255, 255, 0.945);
    width: 242px;
    height: 320px;
    position: absolute;
    left: -400px;
    bottom: 4%;
    transform: rotate(-6deg);
    z-index: 4;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 0px 2px 10px black;
}

.dot-2 {
    width: 5px;
    height: 5px;
    background-color: #252525;
    border-radius: 50%;
    margin-top: -3px;
    margin-left: 20px;
}

.a-propos {
    color: #000000;
    text-decoration: none;
    font-family: "Bebas Neue", sans-serif;
    margin-top: -48px;
    margin-left: 20px;
    font-size: 1.2em;
    margin-bottom: 8px;
}

.contenue {
    color: #e5e5e5;
    font-size: 2.26rem;
    text-transform: uppercase;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 25vw;
    top: 70px;
    left: 40px;
    z-index: 3000;
}

p {
    color: #252525;
    font-family: 'Bebas Neue', sans-serif;
}

.animation {
    height: 50px;
    overflow: hidden;
    margin-left: 1rem;
}

.animation>div>div {
    padding: 0.25rem 0.75rem;
    height: 2.81rem;
    margin-bottom: 2.81rem;
    display: inline-block;
}

.animation div:first-child {
    animation: text-animation 8s infinite;
}

.first div {
    /* background-color: #4a806b; */
    font-family: 'Bebas Neue', sans-serif;

}

.second div {
    /* background-color: #a7a299; */
    font-family: 'Bebas Neue', sans-serif;
}

.third div {
    /* background-color: #b44949; */
    font-family: 'Bebas Neue', sans-serif;
}



@keyframes text-animation {
    0% {
        margin-top: 0;
    }

    10% {
        margin-top: 0;
    }

    20% {
        margin-top: -5.62rem;
    }

    30% {
        margin-top: -5.62rem;
    }

    40% {
        margin-top: -11.24rem;
    }

    60% {
        margin-top: -11.24rem;
    }

    70% {
        margin-top: -5.62rem;
    }

    80% {
        margin-top: -5.62rem;
    }

    90% {
        margin-top: 0;
    }

    100% {
        margin-top: 0;
    }
}


/* **************************************************************************media querry ***************************************************** */

@media screen and (max-width: 1200px) {

    .contenue {
        display: none;
    }

    .contact {
        right: -478px;
        height: 320px;
    }

    .personnal-info {
        left: -515px;
        height: 320px;
    }

    .title-background h1 {
        font-size: 90px;
    }

}


@media screen and (max-width: 959px) {
    .title-background h1 {
        font-size: 60px;
    }

    .contact {
        right: -450px;
        height: 320px;
    }

    .personnal-info {
        left: -470px;
        height: 320px;
    }
}



@media screen and (min-width:480px) and (max-width: 767px) {
    .title-background h1 {
        font-size: 30px;
        line-height: 40px;
    }

    .contact {
        background-color: rgba(255, 255, 255, 0.945);
        width: 186px;
        height: 320px;
        right: -450px;
    }

    a.contacter {
        margin-top: -44px;
    }

    .icons {

        margin-top: -47px;
        margin-bottom: -19px;
    }

    .personnal-info {
        display: none;
    }

    .soc a img {
        width: 35px;
    }
}


@media screen and (min-width: 360px)and (max-width: 479px) {
    .title-background h1 {
        font-size: 25px;
        line-height: 40px;
        letter-spacing: 10px;
    }

    .contact {
        background-color: rgba(255, 255, 255, 0.945);
        width: 186px;
        height: 320px;
        right: -450px;
    }

    a.contacter {
        margin-top: -44px;
    }

    .icons {
        margin-top: -47px;
        margin-bottom: -19px;
    }

    .personnal-info {
        display: none;
    }

    .soc a img {
        width: 35px;
    }

    .copyright p {
        font-size: 11px;
    }
}

@media screen and (min-width: 320px)and (max-width: 359px) {
    .title-background h1 {
        font-size: 25px;
        line-height: 40px;
        letter-spacing: 8px;
    }

    .contact {
        background-color: rgba(255, 255, 255, 0.945);
        width: 186px;
        height: 320px;
        right: -450px;
    }

    a.contacter {
        margin-top: -44px;
    }

    .icons {
        margin-top: -47px;
        margin-bottom: -19px;
    }

    .personnal-info {
        display: none;
    }

    .soc a img {
        width: 35px;
    }

    .copyright p {
        font-size: 11px;
    }
}
</style>