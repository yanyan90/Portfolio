<template>
    <header>
        <MainNav />
        <ProfileOfficielle />
    </header>
    <main>
        <HorizontalScroll id="projet" />

    </main>
    <footer>
        <FooterOfficial id="contact" />
    </footer>
    <CustomCursor />
</template>

<script setup>
import MainNav from '../components/Nav.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import HorizontalScroll from '@/components/HorizontalScroll.vue'
import FooterOfficial from '@/components/Footer.vue'
import ProfileOfficielle from '@/components/Profile.vue'
import 'animate.css'
</script>

<style >
header {
    overflow: hidden;
}

footer {
    width: 99vw;
    overflow-x: hidden;
    height: 90vh;
    position: relative;
}
</style>
