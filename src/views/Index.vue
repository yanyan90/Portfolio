<template>
    <div class="conteneur">
        <router-link class="button-projet" :to="{ name: 'profile' }">
            <span class="button-toprojet">Yanik</span><br> Portfolio
        </router-link>
        <div class="contenue-officiel">
            <section class="animation">
                <div class="first">
                    <div>Yanik Lemieux</div>
                </div>
                <div class="second">
                    <div>développeur web</div>
                </div>
                <div class="third">
                    <div>Intégrateur web</div>
                </div>
            </section>
        </div>

        <div class="wrap">
            <div class="line" v-for="( link, index ) in     links    " :key="index">
                <div>
                    <div class="left">
                        <div class="content">
                            <!-- Utiliser router-link lorsque l'index est 0 -->
                            <router-link v-if="index === 0" :to="{ name: link.routeName }" class="link"
                                @mouseenter="handleLinkEnter" @mouseleave="handleLinkLeave">
                                <span class="link" :class="link.speed === 'slow' ? 'spanSlow' : 'spanFast'"
                                    :style="{ transform: `translateX(${link.translation}px)` }">{{ link.content }}</span>
                            </router-link>

                            <router-link v-else-if="index === 2"
                                :to="{ name: link.page, params: { id: link.param }, hash: '#' + link.anchor }" class="link"
                                @mouseenter="handleLinkEnter" @mouseleave="handleLinkLeave">
                                <span class="link" :class="link.speed === 'slow' ? 'spanSlow' : 'spanFast'"
                                    :style="{ transform: `translateX(${link.translation}px)` }">{{ link.content }}</span>
                            </router-link>

                            <!-- Utiliser la balise d'ancre pour les autres indices -->
                            <router-link v-else :to="{ name: link.page, hash: '#' + link.anchor }" class="link"
                                @mouseenter="handleLinkEnter" @mouseleave="handleLinkLeave">
                                <span class="link" :class="link.speed === 'slow' ? 'spanSlow' : 'spanFast'"
                                    :style="{ transform: `translateX(${link.translation}px)` }">{{ link.content }}</span>
                            </router-link>
                        </div>
                    </div>
                    <div class="right">
                        <div class="content">
                            <!-- Utiliser router-link lorsque l'index est 0 -->
                            <router-link v-if="index === 0" :to="{ name: link.routeName }" class="link"
                                @mouseenter="handleLinkEnter" @mouseleave="handleLinkLeave">
                                <span class="link" :class="link.speed === 'slow' ? 'spanSlow' : 'spanFast'"
                                    :style="{ transform: `translateX(${link.translation}px)` }">{{ link.content }}</span>
                            </router-link>

                            <router-link v-else-if="index === 2"
                                :to="{ name: link.page, params: { id: link.param }, hash: '#' + link.anchor }" class="link"
                                @mouseenter="handleLinkEnter" @mouseleave="handleLinkLeave">
                                <span class="link" :class="link.speed === 'slow' ? 'spanSlow' : 'spanFast'"
                                    :style="{ transform: `translateX(${link.translation}px)` }">{{ link.content }}</span>
                            </router-link>

                            <!-- Utiliser la balise d'ancre pour les autres indices -->
                            <router-link v-else :to="{ name: link.page, hash: '#' + link.anchor }" class="link"
                                @mouseenter="handleLinkEnter" @mouseleave="handleLinkLeave">
                                <span class="link" :class="link.speed === 'slow' ? 'spanSlow' : 'spanFast'"
                                    :style="{ transform: `translateX(${link.translation}px)` }">{{ link.content }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="custom-cursor" ref="customCursor"></div>
        </div>

        <div class="avatar1"><img class="avatar-img1" src="/images/avataaars2.svg" alt=""></div>
        <div class="fuzzy-overlay-officiel"></div>
    </div>
</template>
  
<script setup>
import { ref, onBeforeMount, onBeforeUnmount, computed, onMounted } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const links = ref([
    { page: "", content: 'Profile', speed: 'slow', translation: 0, routeName: 'profile', anchor: "" },
    { page: "profile", content: 'Projets', speed: 'slow', translation: 0, routeName: 'accueil', anchor: "projet" },
    { page: "projets", content: 'Map', speed: 'fast', translation: 0, routeName: 'projets', anchor: "map", param: 2 },
    { page: "profile", content: 'Contact', speed: 'slow', translation: 0, routeName: 'accueil', anchor: "contact" },
])

const customCursor = ref(null)
let width = window.innerWidth

onBeforeMount(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleWindowResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('resize', handleWindowResize)
})

function handleMouseMove(e) {
    const normalizedPosition = e.pageX / (width / 2) - 1
    links.value.forEach((link) => {
        const speed = link.speed === 'slow' ? 100 : 200
        link.translation = speed * normalizedPosition
    })

    // Move the custom cursor
    if (customCursor.value) {
        customCursor.value.style.left = e.pageX + 'px'
        customCursor.value.style.top = e.pageY + 'px'
        customCursor.value.style.pointerEvents = "none"
    }

}

// Recalculate width when the window is resized
function handleWindowResize() {
    width = window.innerWidth
}

const redirectToProfileAndScroll = (sectionId) => {
    // Rediriger d'abord vers la vue "Profile"
    this.$router.push({ name: 'profile' }).then(() => {
        // Ensuite, faire défiler jusqu'au lien spécifié
        scrollToSection(sectionId)
    })
}

const handleLinkEnter = () => {
    if (customCursor.value) {
        customCursor.value.style.transition = 'border-color 0.2s ease-in-out'
        customCursor.value.style.borderColor = '#deccff' // Change this to the desired color
    }
}

const handleLinkLeave = () => {
    if (customCursor.value) {
        customCursor.value.style.transition = 'border-color 0.2s ease-in-out'
        customCursor.value.style.borderColor = 'white' // Reset to the original color
    }
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // animation personnal info****************************************************
    const divAvatar = ".avatar1"
    gsap.to(divAvatar, {
        x: "75%",
        duration: 1,
        scrollTrigger: {
            trigger: divAvatar,
            start: "top 65%",
            end: "top 15%",
            // scrub: 4,
            toggleActions: "play reverse none none",
            // markers: true,
            refreshPriority: 0,
        },
    })
})
</script>

<style>
HTML CSS JSResult Skip Results Iframe EDIT ON * {
    margin: 0;
    padding: 0;
}

a.button-projet {
    position: absolute;
    left: 50%;
    top: 50%;
    text-decoration: none;
    color: white;
    font-size: 50px;
    transform: translateX(-50%)translateY(-50%);
    font-family: "Bebas Neue";
    letter-spacing: 35px;
    border-radius: 10px;
    padding: 10px;
    padding-top: 14px;
    width: 70%;
    text-align: center;
    display: none;
}

span.button-toprojet {
    font-size: 18px;
    width: 70%;
}

.avatar1 {
    position: absolute;
    left: -16%;
    top: 202px;
    z-index: 1001;
    width: 16%;
    transform: rotate(65deg);
    display: none;
}

.avatar1 img.avatar-img1 {
    width: 100%;
    height: auto;
}

.conteneur {
    height: 100vh;
    background-color: black;
    overflow: hidden;
    cursor: none !important;
    position: relative;
}

.custom-cursor {
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url('../../Portfolio/images/1688759789613.jpg');
    background-size: cover;
    z-index: 9999;
    border-radius: 50%;
    border: 20px solid white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}



.wrap {
    margin-top: 14%;
    z-index: 5;
}

.line {
    width: 100vw;
}

.left,
.right {
    width: 50vw;
    overflow: hidden;
    display: inline-block;
}

.left {
    transform: skew(0deg, -15deg);
}

.left a,
.right a {
    color: rgb(255, 255, 255);
}

.right {
    transform: skew(0deg, 15deg);
}

.right a {
    color: #ffffff;
}

.left .content {
    width: 100vw;
    text-align: center;
}

.right .content {
    width: 100vw;
    text-align: center;
    transform: translate(-50vw);
}

span.link {
    display: inline-block;
    font-family: "Bebas Neue", sans-serif;
    font-size: 10vw;
    text-transform: uppercase;
    line-height: .8;
    transition: ease-out .6s;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:700');

.contenue-officiel {
    color: #e5e5e5;
    font-size: 2.26rem;
    text-transform: uppercase;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 260px;
    top: 15px;
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
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
}

.second div {
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
}

.third div {
    font-family: 'Bebas Neue', sans-serif;
    text-align: center;
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

.fuzzy-overlay-officiel {
    position: absolute;
    inset: -200%;
    z-index: 1;
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

/* **************************************************************************media querry ***************************************************** */

@media screen and (max-width: 1200px) {
    .contenue-officiel {
        display: none;
    }

    .wrap {
        margin-top: 17%;
    }

    span.link {
        font-size: 15vw;
    }

}


@media screen and (max-width: 959px) {
    .custom-cursor {
        display: none;
    }

    .wrap {
        margin-top: 25%;
    }

    .wrap {
        display: none;
    }

    span.link {
        font-size: 16vw;
    }

    a.button-projet {
        display: block;

    }

    .avatar1 {
        display: block;
    }

}

@media screen and (min-width:480px) and (max-width: 767px) {

    .wrap {
        margin-top: 40%;
    }

    span.link {
        font-size: 19vw;
    }

    a.button-projet {
        display: block;
        font-size: 22px;
        letter-spacing: 22px;
        width: 80%;
    }

    span.button-toprojet {
        font-size: 16px;
        letter-spacing: 22px;
    }
}


@media screen and (min-width: 360px)and (max-width: 479px) {
    .wrap {
        margin-top: 40%;
    }

    span.link {
        font-size: 19vw;
    }

    a.button-projet {
        display: block;
        font-size: 21px;
        letter-spacing: 21px;
        width: 80%;
    }

    span.button-toprojet {
        font-size: 14px;
        letter-spacing: 22px;
    }
}

@media screen and (min-width: 320px)and (max-width: 359px) {
    .wrap {
        margin-top: 40%;
    }

    span.link {
        font-size: 19vw;
    }

    a.button-projet {
        display: block;
        font-size: 20px;
        letter-spacing: 19px;
    }

    span.button-toprojet {
        font-size: 14px;
        letter-spacing: 19px;
    }
}
</style>