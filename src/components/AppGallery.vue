<script>
import AppGalleryCard from './AppGalleryCard.vue';
export default {
    name: "AppGallery",
    components: { AppGalleryCard },
    data() {
        return {
            galleryEvents: [
                {
                    imgVisible: "../assets/img/gallery/corporate-bg.jpg",
                    imgAlt: "corporate",
                    imgHover: "../assets/img/gallery/corporate-hover-bg.jpg",
                    hoverTitle: "Corporate events",
                    hoverSubTitle: "our product",
                    hoverBtn: "Explore more"
                },
                {
                    imgVisible: "../assets/img/gallery/wedding-bg.jpg",
                    imgAlt: "wedding",
                    imgHover: "../assets/img/gallery/wedding-hover-bg.jpg",
                    hoverTitle: "Wedding & Parties",
                    hoverSubTitle: "private dinning hall",
                    hoverBtn: "Explore more"
                }
            ]
        }
    }
}
</script>

<template>
    <section class="ms_gallery container-fluid g-0">
        <div class="row g-3">
            <AppGalleryCard v-for="(events, index) in galleryEvents" :key="index" :galleryImg="events" />
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>