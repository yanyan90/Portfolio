<template>
    <div class="list-wrapper">
        <ProjetsListe :projets="filteredProjets" />
    </div>
</template>
  
<script setup>
import axios from 'axios'
import ProjetsListe from '@/components/ProjetsListe.vue'
import { ref, onBeforeMount, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const projets = ref([])
const router = useRouter()
const routeId = ref(0)

onBeforeMount(() => {
    axios('/Portfolio/projects.json').then((response) => {
        projets.value = response.data
        console.log(projets.value)
        updateFilteredProjets()
    })
})

watch(() => router.currentRoute, () => {
    updateFilteredProjets()
})

const updateFilteredProjets = () => {
    const id = parseInt(router.currentRoute.value.params.id, 10) || 0
    routeId.value = id
}

const filteredProjets = computed(() => {
    const targetTypes = getTypeFromId(routeId.value)
    return projets.value.filter((projets) => targetTypes.includes(projets.type))
})

const getTypeFromId = (id) => {
    switch (id) {
        case 0:
            return ['code']
        case 1:
            return ['design']
        case 2:
            return ['map']
        default:
            return []
    }
}
</script>
  

<style >
div.list-wrapper {
    width: 100vw;
    height: 100vh;
}
</style>
