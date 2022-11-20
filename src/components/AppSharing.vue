<script>
export default {
    name: "AppSharing",
    data() {
        return {
            sharingImg: [
                {
                    imgSrc: "../assets/img/cta-sharing/social-1.jpg",
                    imgAlt: "woman baking",
                    order: 1,
                },
                {
                    imgSrc: "../assets/img/cta-sharing/social-2.jpg",
                    imgAlt: "croissant",
                    order: 3,
                },
                {
                    imgSrc: "../assets/img/cta-sharing/social-3.jpg",
                    imgAlt: "bread",
                    order: 3,

                },
                {
                    imgSrc: "../assets/img/cta-sharing/social-4.jpg",
                    imgAlt: "bread",
                    order: 3,
                },
                {
                    imgSrc: "../assets/img/cta-sharing/social-5.jpg",
                    imgAlt: "crepes",
                    order: 3,
                },
                {
                    imgSrc: "../assets/img/cta-sharing/social-6.jpg",
                    imgAlt: "coffee",
                    order: 3,
                },

            ]
        }
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        }
    }
}
</script>

<template>

    <section class="container-fluid g-0">
        <div class="ms_sharing row g-3 align-items-stretch">

            <!-- TeXT -->
            <div class="ms_sharing__text col-6 order-2">
                <div class=" text-center">
                    <span class="ms_little-caption">made for sharing</span>
                    <h4>Let's stay in touch</h4>
                    <button class="btn ms_btn-dark">
                        <i class="fa-brands fa-instagram"></i>
                        Follow us
                    </button>
                </div>
            </div>

            <!-- All images -->
            <div class="ms_sharing__img col-3" v-for="(photo, index) in sharingImg" :key="index"
                :class="`order-${photo.order}`">
                <img :src="getImage(photo.imgSrc)" :alt="photo.imgAlt">
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.ms_sharing {
    &__text {
        >* {
            background-color: $bg-simple;
            padding: 8em 0;
        }
    }

    &__img {
        img {
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>