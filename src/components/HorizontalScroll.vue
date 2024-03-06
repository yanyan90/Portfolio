<template>
    <div class=" yo">
        <div class="screen"></div>
        <div class="wrapper" ref="container">
            <div v-for="(slide, index) in   slides  " :class="`image card-${index}`" :key="index">
                <section>
                    <div class="card">
                        <div class="cover item-a">
                            <h1 class="h1-official">{{ slide.background }}</h1>
                            <div class="overlay">
                            </div>
                            <div class="carte-tranparent">
                            </div>
                            <div class="card-back">
                                <router-link class="lien-details" :to="{ name: 'projets', params: { id: slide.id } }">
                                    Détails
                                </router-link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="screen"></div>
    </div>
</template>
  
<script setup>
import { onMounted, onUnmounted, ref, nextTick, onBeforeMount, computed } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import axios from 'axios'
import { useRouter } from 'vue-router'

const container = ref(null)
const projects = ref([])

// if onclick 

// Scroll trigger for horizontal scroll
gsap.registerPlugin(ScrollTrigger)
let ctx

onMounted(async () => {
    await nextTick()
    ctx = gsap.context((self) => {
        const images = self.selector(".image")
        const amount = images.length - 1

        const screenWidth = window.innerWidth
        const xPercent = screenWidth >= 767 ? -78 * amount : -100 * amount

        gsap.to(images, {
            xPercent: xPercent,
            ease: "none",
            scrollTrigger: {
                trigger: container.value,
                start: "top top",
                end: "+=3500",
                scrub: 1,
                // markers: true,
                pin: true,
                snap: 1 / amount
            }
        })
    }, container.value)
})

onUnmounted(() => {
    ctx.revert()
})

const slides = [
    { image: "1688759789613.jpg", color: "black", background: "web", id: 0 },
    { image: "1688759789613.jpg", color: "black", background: "design", id: 1 },
    { image: "1688759789613.jpg", color: "black", background: "map!", id: 2 },
]
</script>
  

<style >
* {
    margin: 0;
    padding: 0;
}

.yo {
    overflow: hidden;
}

.yo .wrapper .image.card-0 .cover.item-a::before {
    background-color: #ff8a8a;
    text-align: center;
}


.yo .wrapper .image.card-1 .cover.item-a::before {
    background-color: #b38aff;
}

.yo .wrapper .image.card-2 .cover.item-a::before {
    background-color: #ff8aeb;
}

.circle {
    position: absolute;
    z-index: 10;
    width: 100px;
    height: 100px;
    background-color: pink;
    top: 0;
    left: 0;
    border-radius: 50%;
}

.screen {
    width: 100vw;
    height: 0vh;
    background-color: #000000;
}

.wrapper {
    width: 600%;
    height: 100vh;
    overscroll-behavior: none;
    display: flex;
    overflow: hidden;
}

.image {
    width: 70vw;
    height: 100vh;
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(241, 241, 241);
}

:root {
    --transition-time: 2.3s;
}

section {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    align-items: center;
    height: 100vh;
}

.card {
    position: relative;
    height: 68vh;
    width: 100%;
    margin: 10px 0;
    transition: ease all var(--transition-time);
    perspective: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card:hover .cover {
    transform: rotateX(0deg) rotateY(-180deg);
}


.card:hover .cover:before {
    transform: translateZ(30px);
}

.card:hover .cover:after {
    background-color: black;
}

.cover.item-a h1.h1-official {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) translateZ(80px);
    transition: transform var(--transition-time);
    z-index: 3;
    font-size: 100px;
    font-family: "Bebas Neue";
    letter-spacing: 4px;
}

.card:hover .cover h1.h1-official {
    transform: translateZ(100px);
}

.card:hover .cover .price {
    transform: translateZ(60px);
}

.card:hover .cover a {
    transform: translateZ(-60px) rotatey(-180deg);
}

.cover {
    position: absolute;
    height: 100%;
    width: 70%;
    transform-style: preserve-3d;
    transition: ease all var(--transition-time);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 20px;
}

.cover:before {
    content: '';
    position: absolute;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    background-color: #252525;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    z-index: 2;
    transition: ease all var(--transition-time);
    transform-style: preserve-3d;
    transform: translateZ(0px);
    border-radius: 20px;
}

.cover.item-a {
    background-color: rgb(255, 255, 255);
    position: relative;
}

:root {
    --brShadow: -5px 5px 12px #131313ad;
    /* --tlShadow: 6px -6px 15px rgba(44, 44, 44, 0.877); */
    --tlShadow: 5px -5px 12px rgba(48, 48, 48, 0.829);
}

.cover h3.title-card {
    font-weight: 600;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(50%);
    color: #252525;
    transform-style: preserve-3d;
    transition: ease all var(--transition-time);
    z-index: 3;
    font-size: 3em;
    transform: translateZ(25px, -25px);
    font-family: 'Bebas Neue', sans-serif;
    transform-origin: center bottom;
    text-shadow: var(--brShadow), var(--tlShadow);
}

.cover h3.title-card::before {
    left: 0;
    width: 100px;
    height: 100px;
    top: -150px;
    z-index: 10;
    box-shadow: inset var(--brShadow), inset var(--tlShadow);
}

.cover h3.title-card::after {
    left: -50px;
    width: 200px;
    height: 200px;
    top: -200px;
    box-shadow: var(--brShadow), var(--tlShadow);
}

h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 8em;
    color: white;
    line-height: 1em;
    text-align: center;
}

.card-back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #252525;
    transform-style: preserve-3d;
    transition: ease all var(--transition-time);
    transform: translateZ(-1px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.322);
}

.card-back a {
    transform-style: preserve-3d;
    transition: ease transform var(--transition-time), ease background 0.5s;
    transform: translateZ(-1px) rotatey(-180deg);
    font-family: 'Bebas Neue', sans-serif;
    background: transparent;
    /* border: 1px solid white; */
    font-weight: 200;
    font-size: 100%;
    color: white;
    padding: 14px 32px;
    outline: none;
    text-decoration: none;
}

.card-back a:hover {
    background-color: white;
    color: #0b0f08;
}

.card-back a.lien-details {
    transform-style: preserve-3d;
    transition: ease transform var(--transition-time), ease background 0.5s;
    transform: translateZ(-1px) rotatey(-180deg);
    font-family: 'Bebas Neue', sans-serif;
    background: transparent;
    font-weight: 200;
    font-size: 100%;
    color: white;
    padding: 14px 32px;
    outline: none;
    text-decoration: none;
}

.card-back a.lien-details:hover {
    background-color: white;
    color: #0b0f08;
}


/* **************************************************************************media querry ***************************************************** */

@media screen and (max-width: 1200px) {}


@media screen and (max-width: 959px) {
    .cover.item-a h1.h1-official {
        font-size: 78px;
    }
}



@media screen and (min-width:480px) and (max-width: 767px) {
    .cover.item-a h1.h1-official {
        font-size: 45px;
        transform: translateX(-50%) translateY(-50%) translateZ(20px);
    }

    .card {
        height: 59vh;
        width: 102%;
    }

    .card-back a.lien-details {
        font-size: 78%;
    }

    .image {
        width: 100vw;

    }
}


@media screen and (min-width: 360px)and (max-width: 479px) {
    .cover.item-a h1.h1-official {
        font-size: 35px;
        transform: translateX(-50%) translateY(-50%) translateZ(20px);
    }

    .card {
        height: 55vh;
        width: 100%;
    }

    .card-back a.lien-details {
        font-size: 65%;
    }

    .image {
        width: 100vw;

    }

}



@media screen and (min-width: 320px)and (max-width: 359px) {

    .cover.item-a h1.h1-official {
        font-size: 35px;
        transform: translateX(-50%) translateY(-50%) translateZ(20px);
    }

    .card {
        height: 55vh;
        width: 100%;
    }

    .card-back a.lien-details {
        font-size: 65%;
    }

    .image {
        width: 100vw;

    }
}
</style>

