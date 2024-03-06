<template>
    <div class="profile">
        <div class="head">

            <div class="neumorphisme "><img class="profilepicture" src="/images/1688759789613.jpg" width="300"
                    alt="Profile picture"></div>
            <h1 class="name-profile">Yanik Lemieux<span class="chop"><br> Développeur web Front-End</span></h1>
           
            <div class="links">
                <div class=""><a href="https://github.com/yanyan90"><img src="/images/github-mark-white.svg" width="40"
                            alt="github"></a>
                </div>

                <div class=""><a href="https://www.facebook.com/yanik.lemieux.5/"><img
                            src="/images/f_logo_RGB-White_1024.png" width="40" alt="Logo facebook"></a>
                </div>

                <div class=""><a href="https://www.linkedin.com/in/yanik-lemieux-4219a4105/"><img src="/images/linkedin.png"
                            width="40" alt="Logo LinkedIn"></a>
                </div>

                
                    <img @click="openImage"  class="cv" src="/images/demography_FILL0_wght400_GRAD0_opsz24.svg" alt="cv">
             
            </div>
            <div class="links-phone-email">
                <div class="icon animate__animated animate__bounce"><a :href="emailLink"><img src="/images/email (1).png"
                            width="50" alt="Phone"></a>
                </div>
                <div class="icon phoneNum" @click="callPhoneNumber"><img src="/images/phone-call.png" width="50"
                        alt="Phone">
                </div>
            </div>
            <div class="wave3">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        class="shape-fill"></path>
                </svg>
            </div>
        </div>

        <div class="cv-official" @click="openImage"  ref="showImage"  v-if="showImage"><img  src="/images/cv.jpg"  class="image-cv"></div>

        <div class="body">
            <div class="avatar"><img class="avatar-img" src="/images/avataaars.svg" alt=""></div>
            <section class="container about">
                <h2 class="heading my-3">À-propos</h2>
                <p class="my-3">
                    Enthousiaste et déterminé, je suis un développeur web frontend/intégrateur passionné par la création
                    d'interfaces utilisateur modernes et intuitives. Mes études et mon stage m'ont permis d'acquérir des
                    compétences solides en HTML, CSS, JavaScript et PHP. J'ai également développé une expérience pratique
                    avec plusieurs frameworks. Prêt à mettre en œuvre ces compétences dans un environnement professionnel,
                    je suis motivé à contribuer à des projets concrets. Mon enthousiasme s'accompagne d'une volonté
                    constante d'apprentissage, et je suis déterminé à renforcer davantage mes compétences en développement
                    web frontend.
                </p>
                <p class="my-4">
                    Instructeur de parachute depuis 2014, j'ai développé une expertise dans la formation et la sécurité
                    aérienne, démontrant ma capacité à enseigner et à encadrer. Ma carrière va au-delà, avec plus de 10 ans
                    d'expérience dans le domaine de la construction, où j'ai contribué à divers projets en tant que
                    professionnel compétent. Mes compétences englobent un large éventail, allant de la coordination
                    d'équipes sur le chantier à la gestion de projets. Mon parcours professionnel diversifié, combiné à ma
                    passion pour le développement web frontend, reflète ma polyvalence, mon engagement et ma détermination à
                    exceller dans chaque aspect de ma carrière.
                </p>
            </section>
            <section class="experience my-3">
                <div class="fav"></div>
                <h2 class="mb-3 heading py-3">Expériences</h2>
                <div class="experience-container">
                    <!-- titles-left -->
                    <div class="left-container">
                        <div v-for="(project, index) in displayedProjects" :key="project.id" class="mb-3">
                            <div @click="handleTitleClick(project)" :class="{ title: selectedProject === project }"
                                @mouseover="mouseHover(true)" @mouseout="mouseHover(false)">
                                <h3 v-if="project.id !== 7" :class="{ 'px-3 py-3': isHovered }">{{ project.title }}</h3>
                            </div>
                        </div>
                    </div>
                    <!-- content-right -->
                    <div class="right-container">
                        <div v-for="project in projects" :key="project.id" class="">
                            <div v-if="selectedProject === null || selectedProject === project" class="">
                                <div class="d-flex m">
                                    <p class="date">{{ project.date }}</p>
                                    <a v-if="project.id === 12 || project.id === 3 || project.id === 8 || project.id === 10"
                                        class="lien-experience" :href="project.link" target="_blank"
                                        rel="noopener noreferrer">Lien</a>
                                </div>
                                <p class="description-text">{{ project.description }}</p>
                                <ul>
                                    <li v-for="(item, index) in project.items" :key="`${project.id}_${index}`">
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="pagination-buttons">
                            <button @click="showPreviousProjects" :disabled="currentPage === 0"
                                :class="{ 'disabled-button': currentPage === 0, 'pointer': true }"> Précédant </button>
                            <button @click="showNextProjects" :disabled="currentPage === maxPage"
                                :class="{ 'disabled-button': currentPage === maxPage, 'pointer': true }">
                                Suivant
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="wave2">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill"></path>
            </svg>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue"
import projectData from "/public/projects.json"
import "animate.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const projects = ref(projectData)
const selectedProject = ref(null)
const isHovered = ref(false)
const showImage = ref(false)

const openImage = () => {
    showImage.value = !showImage.value;
};


onMounted(() => {
    selectedProject.value = projects.value[0]
})
const handleTitleClick = (project) => {
    selectedProject.value = project
}


const projectsPerPage = 4
const currentPage = ref(0)

const phoneNumber = '14505128626'
const callPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`
}

const emailAddress = 'yanik_lemieux@hotmail.com.com'
const subject = ''
const body = ''
const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

const displayedProjects = computed(() => {
    const startIndex = currentPage.value * projectsPerPage
    const endIndex = startIndex + projectsPerPage
    return projects.value.slice(startIndex, endIndex)
})

const maxPage = computed(
    () => Math.ceil(projects.value.length / projectsPerPage) - 1
)

// Set the first project as active when going to nex/previous page
const showPreviousProjects = () => {
    currentPage.value = Math.max(currentPage.value - 1, 0)
    selectedProject.value = displayedProjects.value[0]
}

const showNextProjects = () => {
    currentPage.value = Math.min(currentPage.value + 1, maxPage.value)
    selectedProject.value = displayedProjects.value[0]
}

const mouseHover = (hovered) => {
    isHovered.value = hovered
}


onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // animation personnal info****************************************************
    const divAvatar = ".avatar"
    gsap.to(divAvatar, {
        x: "75%",
        duration: 5,
        scrollTrigger: {
            trigger: divAvatar,
            start: "top 65%",
            end: "top 15%",
            scrub: 4,
            toggleActions: "play reverse none none",
            // markers: true,
            refreshPriority: 0,
        },
    })
})
</script>

<style >
.profile {
    width: 100%;
    height: 1855px;
    background-color: rgb(255, 255, 255);
    position: relative;
}

.j1 {
    width: 15%;
    position: absolute;
    left: 50%;
    top: 0;
}

.PreviewPlayButton_circularContainer__IPZte {
    width: 20%;
    height: 20%;
    background-color: black;
    position: absolute;
    left: 20%;
    z-index: 10;
}

.cv-official{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.534);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 35;
 transition: 0.2s ease-in-out;   
}
.cv:hover{
    cursor: pointer;
}
.image-cv{
   width:34%;
   border-radius:10px;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.582);
}
.Button-sc-1dqy6lx-0 {
    width: 25%;
    height: 25%;
}

.pointer {
    cursor: pointer;
}

.body {
    width: 100%;
    position: relative;
}

.avatar {
    position: absolute;
    left: -16%;
    top: 202px;
    z-index: 5;
    width: 16%;
    transform: rotate(65deg);
}

.avatar img.avatar-img {
    width: 100%;
    height: auto;
}

.wave2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}



.wave2 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 64px;
    transform: rotateY(180deg);
}

.wave2 .shape-fill {
    fill: rgb(241, 241, 241);
}

.wave3 {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}


.wave3 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 60px;
    transform: rotateY(180deg);
}

.wave3 .shape-fill {
    fill: #FFFFFF;
}

div.head {
    position: relative;
    margin: 0;
    width: 100vw;
    height: 22%;
    background-color: #252525;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 104px;
}

:root {
    --brShadow: -1px 5px 5px #13131344;
    --tlShadow: 2px -5px 5px rgba(48, 48, 48, 0.452);
}

a.lien-experience {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #da7ee2;
}

.neumorphisme {
    position: absolute;
    bottom: -88px;
    left: 64%;
    border-radius: 50%;
    width: 350px;
    height: 350px;
    background: linear-gradient(#25252500 75%, rgb(255, 255, 255) 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: ease all var(--transition-time);
    box-shadow: var(--brShadow), var(--tlShadow);
    z-index: 2;
    --animate-duration: 1s;
}

.head img.profilepicture {
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    transform-style: preserve-3d;

}

div.links {
    position: fixed;
    left: 0px;
    top: 437px;
    z-index: 50;
    width: 50px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.226);
    border-radius: 0px 8px 8px 0px;
    transition: 0.2s ease-in-out;
}

div.links-phone-email {
    position: fixed;
    right: 0px;
    top: 159px;
    z-index: 50;
    width: 40px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 8px 0px 0px 8px;
    transition: 0.2s ease-in-out;
    display: none;
}

div.links:hover {
    background-color: black;

}

div.links img {
    width: 25px;
    height: 25px;
}

div.links-phone-email img {
    width: 25px;
    height: 25px;
}

h1.name-profile {
    margin-left: 6%;
    font-family: "Bebas Neue", sans-serif;
    font-size: 100px;
    color: white;
    letter-spacing: 7px;
    margin-bottom: -1px;
    line-height: 10px;
}

span.chop {
    font-size: 20px;
    background: linear-gradient(to right, #ffffff, #b586be, rgb(90, 146, 120));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.button {
    cursor: pointer;
}

/* ******************************************************************** */

.about,
.experience {
    width: 80%;
    margin: auto;
}

.experience {
    flex-direction: column;
    box-sizing: border-box;
    min-height: 31.5rem;
}

.experience-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    width: 100%;
}

.left-container {
    border-left: #da7ee2 solid 2px;
    position: relative;
    width: 40%;
    padding-left: 0.2rem;
    flex-shrink: 0;
}

.right-container {
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    width: 60%;
    min-height: 380px;
}

.title {
    border-bottom: #da7ee2 solid 2px;
    ;
    color: #da7ee2;
}

p.my-3 {
    margin-bottom: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
}


p.my-4 {
    margin-bottom: 25px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
}

h2.heading {
    color: #252525;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 50px;
}

h2.py-3 {
    margin-bottom: 40px;
}

.px-3.py-3:hover {
    cursor: pointer;

}

h3 {
    font-size: 1.1rem;
    margin-bottom: 5px;
}

h2,
h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
}

p,
h6,
h1,
li {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
}

p.description-text {
    margin-bottom: 25px;
}

.job-title {
    font-size: 1rem;
}

.date {
    margin-bottom: 10px;
}

.pagination-buttons {
    margin-top: 25px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}

.pagination-buttons button {
    width: 200px;
    height: 37px;
    border: none;
    background-color: #252525;
    color: white;
    border-radius: 5px;
    font-family: "Bebas Neue", sans-serif;
    font-size: 18px;
}

ul {
    list-style-type: none;
}

li::before {
    content: "+";
    display: inline-block;
    margin-right: 0.5em;
    color: #ef402f;
}

li:last-child {
    margin-bottom: 50px;
}

div.links img.cv{
    width:30px;
    height: 30px;
}

/* **************************************************************************media querry ***************************************************** */

@media screen and (max-width: 1200px) {

    .neumorphisme {
        width: 250px;
        height: 250px;
    }

    .head img.profilepicture {
        width: 90%;
    }

    h1.name-profile {
        margin-left: 5%;
        font-size: 80px;
        line-height: 15px;
    }

    div.head {
        height: 17%;
    }

    span.chop {
        font-size: 25px;
    }

    h2.heading.my-3 {
        font-size: 7em;
    }

    h2.py-3 {
        font-size: 7em;
    }

    .pagination-buttons button {
        margin: 2px;
    }
    .image-cv{
   width:44%;
  
}
}


@media screen and (max-width: 959px) {
    .neumorphisme {
        width: 250px;
        height: 250px;
    }

    .head img.profilepicture {
        width: 90%;
    }

    h1.name-profile {
        margin-left: 5%;
        font-size: 80px;
        line-height: 15px;
    }

    div.head {
        height: 17%;
    }

    span.chop {
        font-size: 25px;
    }

    h2.heading.my-3 {
        font-size: 6em;
    }

    h2.py-3 {
        font-size: 6em;
    }

    .pagination-buttons button {
        margin: 2px;
    }
    .image-cv{
   width:55%;
  
}
}


@media screen and (min-width:480px) and (max-width: 767px) {
    .neumorphisme {
        width: 150px;
        height: 150px;
        bottom: -25px;
        left: 50%;
    }

    .head img.profilepicture {
        width: 90%;
    }

    h1.name-profile {
        margin-left: 2%;
        font-size: 40px;
        line-height: 15px;
        margin-top: -80px;
    }

    div.head {
        height: 13%;
    }

    span.chop {
        font-size: 15px;
    }

    h2.heading.my-3 {
        font-size: 3em;
        margin-top: 0px;
        margin-bottom: 25px;
    }

    h2.py-3 {
        font-size: 3em;
    }

    .pagination-buttons button {
        margin: 2px;
    }

    p.my-3,
    p.my-4 {
        text-align: center;
    }

    .about {
        margin-top: -50px;
    }

    p.description-text {
        font-size: 12px;
    }

    li {
        font-size: 14px;
    }

    .left-container {
        width: 28%;
    }
    .image-cv{
   width:70%;
  
}
}


@media screen and (min-width: 360px)and (max-width: 479px) {
    .neumorphisme {
        width: 100px;
        height: 100px;
        bottom: -25px;
        left: 5%;
    }

    .head img.profilepicture {
        width: 90%;
    }

    h1.name-profile {
        margin-left: 4%;
        font-size: 30px;
        line-height: 15px;
        margin-top: -80px;
    }

    div.head {
        height: 13%;
    }

    span.chop {
        font-size: 12px;
        letter-spacing: 3px;
    }

    h2.heading.my-3 {
        font-size: 2em;
        margin-top: 0px;
        margin-bottom: 25px;
    }

    h2.py-3 {
        font-size: 2em;
        margin-bottom: 25px;
        margin-top: 25px;
    }

    .pagination-buttons button {
        margin: 2px;
    }

    p.my-3,
    p.my-4 {
        text-align: center;
    }

    p.my-4 {
        display: none;
    }

    .about {
        margin-top: -50px;
    }

    p.description-text {
        font-size: 14px;
    }

    li {
        font-size: 14px;
    }

    .left-container {
        width: 28%;
    }

    .experience-container {
        margin-top: 25px;
        flex-direction: column;
        align-items: center;
    }

    .left-container {
        width: 90%;
        margin-bottom: 15px;
    }

    .right-container {
        width: 90%;
    }

    .profile {
        height: 1500px;
    }

    .head .links {
        display: none;
    }

    .wave {
        display: none;
    }

    .image-cv{
     display: none;
    }
.cv-official{
 display: none;
}
}


@media screen and (min-width: 320px)and (max-width: 359px) {
    .neumorphisme {
        width: 100px;
        height: 100px;
        bottom: -25px;
        left: 5%;
    }

    .head img.profilepicture {
        width: 90%;
    }

    h1.name-profile {
        margin-left: 4%;
        font-size: 19px;
        line-height: 15px;
        margin-top: -80px;
    }

    div.head {
        height: 11%;
    }

    .nav {
        right: 5px;
    }

    .menu-icon:checked+label,
    .menu-icon:not(:checked)+label {
        right: 29px;
    }

    span.chop {
        font-size: 11px;
        letter-spacing: 3px;
    }

    h2.heading.my-3 {
        font-size: 2em;
        margin-top: 0px;
        margin-bottom: 25px;
    }

    h2.py-3 {
        font-size: 2em;
        margin-bottom: 25px;
        margin-top: 25px;
    }

    .pagination-buttons button {
        margin: 2px;
    }

    p.my-3,
    p.my-4 {
        text-align: center;
    }

    p.my-3 {
        font-size: 16px;
    }

    p.my-4 {
        display: none;
    }

    .about {
        margin-top: -50px;
    }

    p.description-text {
        font-size: 14px;
    }

    li {
        font-size: 14px;
    }

    .left-container {
        width: 28%;
    }

    .experience-container {
        margin-top: 25px;
        flex-direction: column;
        align-items: center;
    }

    .left-container {
        width: 90%;
        margin-bottom: 15px;
    }

    .right-container {
        width: 90%;
    }

    .profile {
        height: 1500px;
    }

    .head .links {
        display: none;
    }

    .wave {
        display: none;
    }

    div.links-phone-email {
        display: flex;
    }
}
</style>
