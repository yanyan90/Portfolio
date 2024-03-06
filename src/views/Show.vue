<template>
    <div>
        <div v-if="projet">
            <h2 class="h2-projet">{{ projet.title }}</h2>
            <!-- spa -->
            <div v-if="projet.id === 6" class="image-mac-japonais">
                <img class="image-jap" :src="projet.projectImages[3]" alt="">
            </div>
            <!-- mode -->
            <div v-if="projet.id === 4" v-for="image in projet.projectImages" class="image-mode">
                <img class="image-mo" :src="image" alt="">
            </div>
            <!-- plante -->
            <div v-if="projet.id === 9" class="image-plante">
                <img class="image-pl" :src="projet.projectImages[1]" alt="">
            </div>
            <!-- personna -->
            <div v-if="projet.id === 1" class="image-plante">
                <img class="image-pl" :src="projet.projectImages[0]" alt="">
            </div>
            <!-- personna -->
            <div v-if="projet.id === 11" class="image-plante">
                <img class="image-pl" :src="projet.projectImages[0]" alt="">
            </div>
            <!-- pw2 -->
            <div v-if="projet.id === 3" class="image-pw2">
                <img class="image-p" :src="projet.projectImages[1]" alt="">
            </div>
            <!-- House project -->
            <div v-if="projet.id === 8" class="image-house">
                <img class="image-hou" :src="projet.projectImages[0]" alt="">
            </div>
            <!-- Hockey project -->
            <div v-if="projet.id === 10" class="image-hockey">
                <img class="image-hock" :src="projet.projectImages[0]" alt="">
            </div>
            <!-- portfolio project -->
            <div v-if="projet.id === 12" class="image-portfolio">
                <img class="image-port" :src="projet.projectImages[0]" alt="">
            </div>

            <div v-if="projet.id === 6 || projet.id === 9 || projet.id === 3" class="deuxieme-section">
                <div class="wave5"></div>
                <div class="backgroud-blue">
                    <img v-if="projet.id === 6" class="iphone1" :src="projet.projectImages[0]" alt="">
                    <img v-if="projet.id === 9" class="iphone1" :src="projet.projectImages[2]" alt="">
                    <img v-if="projet.id === 3" class="iphone4" :src="projet.projectImages[0]" alt="">
                </div>
                <div class="backgroud-blue-pale">
                    <img v-if="projet.id === 6" class="iphone2" :src="projet.projectImages[1]" alt="">
                    <img v-if="projet.id === 9" class="iphone2" :src="projet.projectImages[3]" alt="">
                    <img v-if="projet.id === 3" class="iphone5" :src="projet.projectImages[3]" alt="">
                </div>
            </div>

            <div v-if="projet.id === 6 || projet.id === 9 || projet.id === 3" class="troisieme-section">
                <div class="wave4"></div>
                <div class="background-trois">
                    <img v-if="projet.id === 6" class="iphone3" :src="projet.projectImages[2]" alt="">
                    <img v-if="projet.id === 9" class="mac1" :src="projet.projectImages[0]" alt="">
                    <img v-if="projet.id === 3" class="iphone6" :src="projet.projectImages[2]" alt="">
                </div>
            </div>

            <div v-if="projet.id === 8 || projet.id === 10 || projet.id === 12" class="quatrieme-section">
                <div class="wave6"></div>
                <div class="background-quatre">

                    <img v-if="projet.id === 8" class="mac2" :src="projet.projectImages[1]" alt="">
                    <img v-if="projet.id === 10" class="mac2" :src="projet.projectImages[1]" alt="">
                    <img v-if="projet.id === 12" class="mac2" :src="projet.projectImages[1]" alt="">
                </div>
            </div>

            <div v-if="projet.id === 8 || projet.id === 10 || projet.id === 12" class="cinq-section">
                <div class="wave7"></div>
                <div class="background-cinq">
                    <img v-if="projet.id === 8" class="mac2" :src="projet.projectImages[2]" alt="">
                    <img v-if="projet.id === 10" class="mac2" :src="projet.projectImages[2]" alt="">
                    <img v-if="projet.id === 12" class="mac2" :src="projet.projectImages[2]" alt="">
                </div>
            </div>
        </div>
    </div>
    <FooterOfficial />
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import { useRoute } from "vue-router"
import FooterOfficial from '@/components/Footer.vue'

const projetId = ref(null)
const projet = ref(null)

const fetchProjectDetails = async () => {
    try {
        const response = await axios.get('/Portfolio/projects.json')
        projet.value = response.data.find((projet) => projet.id === Number(projetId.value))
    } catch (error) {
        console.error("Error fetching project details:", error)
    }
}

onMounted(() => {
    const route = useRoute()
    const id = route.params.id
    projetId.value = id
    fetchProjectDetails()
});

</script>


<style>
.wave4 {
    width: 100vw;
    height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, #1f39459f 50%, #cedae99c 50%);
    z-index: 2;
    --mask:
        radial-gradient(122.98px at 50% calc(100% - 165.00px), #000 99%, #0000 101%) calc(50% - 110px) 0/220px 100%,
        radial-gradient(122.98px at 50% calc(100% + 110.00px), #0000 99%, #000 101%) 50% calc(100% - 55px)/220px 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);

}

.wave5 {
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

.wave6 {
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

.wave7 {
    width: 100vw;
    height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(232, 193, 255);
    z-index: 2;
    --mask:
        radial-gradient(122.98px at 50% calc(100% - 165.00px), #000 99%, #0000 101%) calc(50% - 110px) 0/220px 100%,
        radial-gradient(122.98px at 50% calc(100% + 110.00px), #0000 99%, #000 101%) 50% calc(100% - 55px)/220px 100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);

}

.image-mac-japonais {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin-top: 15px;
    margin-bottom: 100px;
}

.image-jap {
    width: 55%;
}

.image-mode {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin-top: 15px;
    margin-bottom: 100px;
}


.image-mo {
    width: 80%;
}

.image-plante {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin-top: 50px;
    margin-bottom: 100px;
}

.image-pl {
    width: 40%;
}

.image-pw2 {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    margin-top: 50px;
    margin-bottom: 100px;
}

.image-p {
    width: 50%;
}

.image-house {
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80vh;
    margin-top: 50px;
    margin-bottom: 100px;


}

.image-hou {
    width: 65%;
    margin-right: 100px;
    margin-top: 50px;
}

.image-hockey {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-bottom: 100px;
}

.image-hock {
    width: 80%;
    margin-top: 50px;
}

.image-portfolio {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}

.image-port {
    width: 90%;
    margin-top: 50px;
}

h2.h2-projet {
    margin-top: 50px;
}

.deuxieme-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.backgroud-blue {
    width: 50%;
    height: 100%;
    background-color: #1f39459f;
    display: flex;
    justify-content: center;
    align-items: center;
}

.backgroud-blue-pale {
    width: 50%;
    height: 100%;
    background-color: #cedae99c;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iphone1 {
    margin-top: 10vh;
    width: 63%;
}

.iphone2 {
    width: 60%;
    margin-top: 10vh;
}

.troisieme-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quatrieme-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(232, 193, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cinq-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #eceff1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-trois {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-quatre {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background-cinq {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iphone3 {
    margin-top: 10vh;
    width: 60%;
}

.iphone4 {
    margin-top: 10vh;
    width: 69%;
}

.iphone5 {
    margin-top: 10vh;
    width: 60%;
}

.iphone6 {
    margin-top: 10vh;
    width: 60%;
}

.mac1 {
    margin-top: 10vh;
    width: 40%;

}

.mac2 {
    margin-top: 10vh;
    width: 70%;
}

/* **************************************************************************media querry ***************************************************** */

@media screen and (max-width: 1200px) {
    h2.h2-projet {
        font-size: 110px;
    }

    .image-plante {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .image-pw2 {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .image-house {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .image-hou {
        width: 80%;
        margin-right: 60px;
        margin-top: -75px;
    }

    .image-hockey {
        margin-bottom: 0px;
        margin-top: -60px;
    }

    .image-hock {
        width: 80%;
        margin-top: 0px;
    }
}


@media screen and (max-width: 959px) {
    h2.h2-projet {
        font-size: 100px;
    }

    .image-jap {
        width: 81%;
    }

    .iphone3 {

        width: 81%;
    }

    .image-pl {
        width: 55%;
    }

    .mac1 {

        width: 55%;
    }

    .image-portfolio {
        margin-top: -50px;
    }

    .image-p {
        width: 81%;
    }

    .iphone6 {

        width: 80%;
    }

    .iphone5 {

        width: 80%;
    }

    .iphone4 {

        width: 91%;
    }

    .image-house {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .image-hou {
        width: 80%;
        margin-right: 60px;
        margin-top: -75px;
    }

    .image-hockey {
        margin-bottom: 0px;
        margin-top: -80px;
    }

    .image-hock {
        width: 80%;
        margin-top: 0px;
    }

    .wave5 {
        display: none;
    }

    .wave4 {
        display: none;
    }

    .wave6 {
        display: none;
    }

    .wave7 {
        display: none;
    }
}



@media screen and (min-width:480px) and (max-width: 767px) {
    h2.h2-projet {
        font-size: 80px;
    }

    .image-jap {
        width: 81%;
    }

    .iphone3 {

        width: 81%;
    }

    .iphone2 {

        width: 81%;
    }

    .iphone1 {

        width: 81%;
    }

    .image-mode {

        margin-top: -75px;
        margin-bottom: 0px;
        height: 68vh;
    }

    .image-pl {
        width: 65%;
    }

    .mac1 {
        width: 65%;
    }

    .quatrieme-section {
        height: 80vh;
    }

    .cinq-section {
        height: 80vh;
    }

    .image-pw2 {
        margin-top: -30px;
    }

    .troisieme-section {
        height: 80vh;
    }

    .image-house {
        margin-top: -50px;
        margin-bottom: -60px;
    }

    .image-hou {
        width: 80%;
        margin-right: 10px;
        margin-top: -75px;
    }

    .image-hockey {
        margin-bottom: -50px;
        margin-top: -100px;
    }

    .image-hock {
        width: 90%;
        margin-top: 0px;
    }
}


@media screen and (min-width: 360px)and (max-width: 479px) {
    h2.h2-projet {
        font-size: 60px;
    }

    .image-mac-japonais {
        margin-bottom: 20px;
        margin-top: -50px;
    }

    .image-jap {
        width: 90%;
    }

    .iphone3 {
        margin-top: 0px;
        width: 81%;
    }

    .iphone2 {

        width: 50%;
        margin-top: 0;
    }

    .iphone4 {
        margin-top: 0px;
        width: 60%;
    }

    .iphone5 {

        width: 50%;
        margin-top: 0;
    }

    .iphone1 {
        margin-top: 0;
        width: 50%;
    }

    .wave4 {
        background: #cedae99c;
    }

    .deuxieme-section {
        flex-direction: column;
    }

    .backgroud-blue {
        width: 100%;
        height: 100%;

    }

    .backgroud-blue-pale {
        width: 100%;
        height: 100%;
    }

    .image-mode {

        margin-top: -125px;
        margin-bottom: 0px;
        height: 78vh;
    }

    .image-plante {
        margin-top: -25px;
    }

    .image-pl {
        width: 75%;
    }

    .mac1 {

        width: 75%;
    }

    .image-portfolio {
        margin-top: -125px;
    }

    .quatrieme-section {
        height: 70vh;
    }

    .cinq-section {
        height: 70vh;
    }

    .image-pw2 {
        margin-top: -30px;

    }

    .troisieme-section {

        height: 80vh;

    }

    .image-house {
        margin-top: -75px;
        margin-bottom: -75px;
    }

    .image-hou {
        width: 90%;
        margin-right: 0px;
        margin-top: -75px;
    }

    .mac2 {
        margin-top: 7vh;
        width: 80%;
    }


    .image-hockey {
        margin-bottom: -60px;
        margin-top: -140px;
    }

    .image-hock {
        width: 90%;
        margin-top: 0px;
    }
}


@media screen and (min-width: 320px)and (max-width: 359px) {
    h2.h2-projet {
        font-size: 54px;
    }

    .image-mac-japonais {
        margin-bottom: 20px;
        margin-top: -50px;
    }

    .image-jap {
        width: 90%;
    }

    .iphone3 {
        margin-top: 0px;
        width: 81%;
    }

    .iphone2 {

        width: 50%;
        margin-top: 0;
    }

    .iphone4 {
        margin-top: 0px;
        width: 60%;
    }

    .iphone5 {

        width: 50%;
        margin-top: 0;
    }

    .iphone1 {
        margin-top: 0;
        width: 50%;
    }



    .wave4 {
        background: #cedae99c;
    }

    .deuxieme-section {
        flex-direction: column;
    }

    .backgroud-blue {
        width: 100%;
        height: 100%;

    }

    .backgroud-blue-pale {
        width: 100%;
        height: 100%;
    }

    .image-mode {

        margin-top: -125px;
        margin-bottom: 0px;
        height: 78vh;
    }

    .image-plante {
        margin-top: -25px;
    }

    .image-pl {
        width: 75%;
    }

    .mac1 {

        width: 75%;
    }

    .image-portfolio {
        margin-top: -125px;
    }

    .quatrieme-section {
        height: 70vh;
    }

    .cinq-section {
        height: 70vh;
    }

    .image-pw2 {
        margin-top: -30px;

    }

    .troisieme-section {

        height: 80vh;

    }

    .image-house {
        margin-top: -75px;
        margin-bottom: -75px;
    }

    .image-hou {
        width: 90%;
        margin-right: 0px;
        margin-top: -75px;
    }

    .mac2 {
        margin-top: 7vh;
        width: 80%;
    }


    .image-hockey {
        margin-bottom: -60px;
        margin-top: -140px;
    }

    .image-hock {
        width: 90%;
        margin-top: 0px;
    }

    .contact {
        display: none;
    }
}
</style>