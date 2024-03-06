

<template>
    <div class="container-cards" :style="{ backgroundColor: isRouteIdTwo ? 'rgb(241, 241, 241)' : 'initial' }">
        <div v-if="shouldShowContainerCardList" class="space1"></div>
        <!-- Projet web et design -->
        <div v-if="shouldShowContainerCardList" class="wrap-container" v-for="(projet, index) in projets" :key="projet.id">
            <div class="container-card-list">
                <div class="background-full" :style="{ backgroundColor: backgroundColors[index] }"></div>
                <div class="wrapper-image"><img :src="projet.cardImage" width="150px" alt=""></div>
                <div class="info-list">
                    <p>{{ projet.type }}</p>
                    <p class="description-list">{{ truncateText(projet.description) }}...</p>
                    <router-link :to="{ name: 'show', params: { id: projet.id } }">
                        <h2 class="list">{{ projet.title }}</h2>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- MAP -->
        <router-link v-if="shouldShowMapOfficiel" class="lien-map" :to="{ name: 'profile', hash: '#projet' }">Retour au
            Projets</router-link>
        <div v-if="shouldShowMapOfficiel" class="map-officiel" v-for="projet in projets" :key="projet.id">
            <div class="container-map">
                <div v-if="shouldShowMapOfficiel" id="map-fixed">
                    <iframe class="iframe3"
                        src="https://www.google.com/maps/embed?pb=!4v1708811620065!6m8!1m7!1s0XzAZF_lKYn_OKgH824Wxw!2m2!1d45.80784611529232!2d-74.00527296703723!3f263.0160020599014!4f-1.2703906087121197!5f0.7820865974627469"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <iframe class="iframe2"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20141228.19325545!2d-89.29979611290574!3d51.95864622336487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4c58b5349fd1a8a1%3A0x1040cadae4d0020!2zUXXDqWJlYw!5e0!3m2!1sfr!2sca!4v1708545059219!5m2!1sfr!2sca"
                    width="600" height="450" style="border:0;filter:grayscale(50%) invert(0)" allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade" ref="googleMapIframe"></iframe>
            </div>
        </div>
        <div v-if="shouldShowContainerCardList" class="space2"></div>
    </div>
    <div v-if="isRouteIdOne" class="space"></div>
</template>

<script setup>
import axios from 'axios'
import { ref, defineProps, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


const backgroundColors = ref([
    "#252525", "#ffbfbf", "#ffbffc", "#bfe5ff", "#252525", "#ffbfbf", "#bfe5ff", "#ffbffc"
])

const router = useRouter()

const shouldShowContainerCardList = computed(() => {
    // Replace 2 with the desired route ID
    return router.currentRoute.value.params.id !== '2'
})

const shouldShowMapOfficiel = computed(() => {
    // Replace 2 with the desired route ID
    return router.currentRoute.value.params.id === '2'
})
const isRouteIdOne = computed(() => {
    return router.currentRoute.value.params.id === '1'
})
const isRouteIdTwo = computed(() => {
    return router.currentRoute.value.params.id === '2'
})



onMounted(() => {

    const setRandomPosition = () => {
        const neumorphismeElements = document.querySelectorAll('.container-cards > div[class^="neumorphisme"]')

        neumorphismeElements.forEach((element) => {
            const randomTop = Math.random() * 100
            const randomLeft = Math.random() * 100
            element.style.top = `calc(${randomTop}% - 50px)`
            element.style.left = `calc(${randomLeft}% - 50px)`
        })
    }

    setRandomPosition()
})

const props = defineProps({
    "projets": {
        "type": Array,
        "default": () => []
    },
})

const truncateText = (text) => {
    return text.slice(0, text.length / 2)
}



onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // animation personnal info****************************************************
    const divAvatar4 = ".avatar4"
    gsap.to(divAvatar4, {
        y: "-80%",
        duration: 2,
        scrollTrigger: {
            trigger: divAvatar4,
            start: "top 65%",
            end: "top 15%",
            // scrub: 4,
            toggleActions: "play restart none none",
            // markers: true,
            // refreshPriority: 1,
        },
    })
})


</script>

<style >
body {
    background-color: rgb(241, 241, 241);
    height: 100%;
}

.space1 {
    width: 100%;
    height: 5%;
    background-color: rgb(241, 241, 241);
}

.avatar4 {
    position: relative;
    left: 82%;
    top: 15px;
    z-index: 2;
    width: 16%;
    transform: rotate(0deg);
    /* display: none; */
}


.avatar4 img.avatar-img4 {
    width: 80%;
    height: auto;
    transform: rotateY(180deg);
}

.space2 {
    width: 100%;
    height: 5%;
    background-color: rgb(241, 241, 241);
}

.map-officiel {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


h1.map {
    width: 40%;
    min-width: 600px;
    position: absolute;
    top: -19%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    text-align: center;
    padding: 10px 0px;
    text-decoration: none;
    color: #ffffff;
    font-family: "Bebas Neue";
    border-radius: 5px 5px 0px 0px;
    font-size: 50px;
    letter-spacing: 10px;
    z-index: 110;
    transition: 0.2s ease-in-out;
}

.container-map {
    margin-top: 0px;
    position: relative;
    width: 95%;
    height: 75%;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.233);
    border-radius: 12px;
    border: 20px solid white;
}


iframe.iframe2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%)translateY(-50%);
    z-index: 5;
    width: 90%;
    height: 80%;
    border-radius: 12px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.233);
}

#map-fixed {
    position: absolute;
    width: 327px;
    height: 217px;
    background-color: rgb(255, 255, 255);
    top: 65%;
    left: 3%;
    z-index: 100;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.164);
    border-radius: 5px 5px 5px 5px;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

iframe.iframe3 {
    width: 90%;
    height: 85%;
    border-radius: 5px;
}


#fixed {
    margin: 0;
    text-align: center;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    color: #252525;
    margin-top: 10px;
}

#fixed1 {
    margin: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    width: 80%;
    text-align: start;
    color: #252525;
    margin-top: 10px;
}

.lien-map {
    position: absolute;
    width: 400px;
    /* height: 50px; */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    text-align: center;
    padding: 10px 0px;
    text-decoration: none;
    color: #252525;
    font-family: "Bebas Neue";
    border-radius: 5px 5px 0px 0px;
    font-size: 18px;
    letter-spacing: 6px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.089);
    z-index: 10;
    transition: 0.2s ease-in-out;
}

.lien-map:hover {
    background-color: #252525;
    color: white;
}

.ordinateur {
    position: absolute;
    z-index: 4;
    left: 56.5%;
    transform: translateX(-50%);
    width: 87%;
    /* margin-top: 50px; */
}


.container-cards {
    display: flex;
    width: 100%;
    position: relative;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    background-color: rgb(241, 241, 241);
    height: 100%;
    align-items: center;
}

.wrap-container {
    position: relative;
    background-color: #ffffff;
    width: 40%;
    height: 44%;
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 385px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.089), -6px -6px 10px rgba(223, 223, 223, 0.473);
    border-radius: 25px;
    margin-bottom: 20px;
    overflow: hidden;

}

.container-card-list {
    position: absolute;
    background-color: #ffffff;
    width: 90%;
    height: 90%;
    min-width: 300px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.089), -6px -6px 10px rgba(223, 223, 223, 0.473);
    border-radius: 25px;
    overflow: hidden;
}

.container-card-list:hover .background-full {
    animation: full 0.2s forwards;
}

.background-full {
    width: 200px;
    height: 200px;
    position: absolute;
    right: -25%;
    top: -25%;
    z-index: 1;
    border-radius: 50%;
    animation: full-reverse 0.2s;
}

@keyframes full {
    0% {
        width: 200px;
        height: 200px;
        position: absolute;
        right: -25%;
        top: -25%;
        z-index: 1;
        border-radius: 50%;

    }

    100% {
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        border-radius: 5%;
    }

}

@keyframes full-reverse {
    0% {
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        border-radius: 5%;
    }

    100% {
        width: 200px;
        height: 200px;
        position: absolute;
        right: -25%;
        top: -25%;
        z-index: 1;
        border-radius: 50%;
    }
}

.wrapper-image {
    width: 165px;
    height: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px #f9f9f9;
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-70%);
}

.container-card-list:hover .wrapper-image {
    animation: stretch-remove 0.2s forwards;
}

@keyframes stretch-remove {
    0% {
        background: #ffffff;
        box-shadow: 5px 5px 10px #d4d4d4, -5px -5px 10px #f9f9f9;
        width: 165px;
        height: 165px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-70%);

    }

    100% {
        background: none;
        box-shadow: none;
        width: 80px;
        height: 80px;
        top: 2%;
        left: 2%;
        transform: translateX(0%) translateY(0%);
        box-shadow: 1px 1px 5px #13131315, -1px -1px 5px #cccccc44;
    }

}

.container-card-list:hover .wrapper-image img {
    animation: stretch-all 0.2s forwards;
}

@keyframes stretch-all {
    0% {
        width: 150px;
        height: 150px;
    }

    100% {
        width: 60px;
        height: 60px;
    }
}

.container-card-list img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    object-position: center;
}

.description-list {
    font-size: 15px;
    padding: 15px;
    margin-bottom: 20px;
    display: none;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translateX(-50%) translateY(-50%);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

.container-card-list:hover .description-list {
    display: block;
}

.neumorphisme1,
.neumorphisme2,
.neumorphisme3,
.neumorphisme4,
.neumorphisme5,
.neumorphisme6,
.neumorphisme7,
.neumorphisme8,
.neumorphisme9,
.neumorphisme10 {
    position: absolute;
    z-index: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(241, 241, 241);
    box-shadow: 5px 5px 10px #c7c7c7,
        -5px -5px 10px #f9f9f9;
}

.neumorphisme11,
.neumorphisme12,
.neumorphisme13,
.neumorphisme14,
.neumorphisme14,
.neumorphisme15,
.neumorphisme16,
.neumorphisme17,
.neumorphisme11,
.neumorphisme18,
.neumorphisme19,
.neumorphisme20 {
    position: absolute;
    z-index: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(145deg, #dfdfdf, #ffffff);
    box-shadow: 5px 5px 10px #cacaca,
        -5px -5px 10px #f6f6f6;
}

.neumorphisme21,
.neumorphisme22,
.neumorphisme23,
.neumorphisme24,
.neumorphisme25,
.neumorphisme26,
.neumorphisme27,
.neumorphisme28,
.neumorphisme29,
.neumorphisme30 {
    position: absolute;
    z-index: 0;
    width: 100px;
    height: 100px;
    background: rgb(241, 241, 241);
    box-shadow: 5px 5px 10px #e0e0e0,
        -5px -5px 10px #f9f9f9;
    border-radius: 50%;

}

a.lien-show {
    width: 150px;
    text-decoration: none;
    color: rgb(37, 40, 87);
    text-transform: uppercase;
    padding: 5px 75px;
    border-radius: 25px;
    font-family: "Bebas Neue";
    font-size: 25px;
    background: #ffffff;
    box-shadow: 5px 5px 10px #e2e2e2,
        -5px -5px 10px #f9f9f9;
    transition: 0.2s ease-in-out;
}

a.lien-show:hover {
    background: #ffffff;
    color: rgb(37, 40, 87);
}

h2.list {
    width: max-content;
    font-size: 30px;
    color: rgb(37, 40, 87);
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    transition: 0.2s ease-in-out;
}



h2.list:hover {

    background-color: rgba(255, 255, 255, 0.137);

}

.container-card-list:hover h2.list {
    color: #ffffff;
    border: 2px solid white;
    width: 85%;
    padding: 10px 0px;
    letter-spacing: 5px;
    border-radius: 10px;

}

/* **************************************************************************media querry ***************************************************** */
@media screen and (max-width: 1200px) {
    #fixed1 {
        font-size: 12px;
    }

    #map-fixed {
        height: 171px;
    }
}

@media screen and (max-width: 959px) {}

@media screen and (min-width:480px) and (max-width: 767px) {
    .ordinateur {
        display: none;
    }

    iframe {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 5;
        width: 90%;
        height: 90%;
        margin: 0px;
        border-radius: 15px;
    }

    .container-map {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.212);
    }

    .map-officiel {
        width: 100%;
        background-color: rgb(241, 241, 241);
        border-radius: 0px;
    }

    .container-map {
        width: 88%;
        height: 89%;
        border-radius: 25px;
    }

    #map-fixed {
        display: none;
    }


    a.lien-map {
        display: none;
    }

    h1.map {
        display: none;
    }

}


@media screen and (min-width: 360px)and (max-width: 479px) {
    .container-card-list {
        min-width: 272px;
    }

    .wrap-container {
        min-width: 311px;
    }

    .container-card-list:hover h2.list {
        color: #ffffff;
        border: 2px solid white;
        width: 85%;
        padding: 10px 0px;
        letter-spacing: 5px;
        border-radius: 10px;
        font-size: 20px;
    }

    .ordinateur {
        display: none;
    }

    iframe {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 5;
        width: 90%;
        height: 90%;
        min-height: 90%;
        margin: 0px;
        border-radius: 15px;
    }

    .container-map {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.212);
    }

    .map-officiel {
        width: 100%;
        background-color: rgb(241, 241, 241);
        border-radius: 0px;
    }

    .container-map {
        width: 80%;
        height: 89%;
        border-radius: 25px;
    }

    #map-fixed {
        display: none;
    }

    a.lien-map {
        display: none;
    }

    h1.map {
        display: none;
    }
}




@media screen and (min-width: 320px)and (max-width: 359px) {
    .container-card-list {
        min-width: 243px;
    }

    .wrap-container {
        min-width: 273px;
    }


    .container-card-list:hover h2.list {
        color: #ffffff;
        border: 2px solid white;
        width: 85%;
        padding: 10px 0px;
        letter-spacing: 5px;
        border-radius: 10px;
        font-size: 16px;
    }

    .ordinateur {
        display: none;
    }

    iframe {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 5;
        width: 90%;
        height: 90%;
        margin: 0px;
        border-radius: 15px;

    }

    .container-map {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.212);
    }

    .map-officiel {
        width: 100%;
        background-color: rgb(241, 241, 241);
        border-radius: 0px;
    }

    .container-map {
        width: 80%;
        height: 80%;
        border-radius: 25px;
    }

    h2.list {
        font-size: 27px;
    }

    #map-fixed {
        display: none;
    }

    a.lien-map {
        display: none;
    }

    h1.map {
        display: none;
    }
}
</style>