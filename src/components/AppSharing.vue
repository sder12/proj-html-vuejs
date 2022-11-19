<script>
export default {
    name: "AppSharing"
}
</script>

<template>
    <section class="ms_cta container-fluid g-0">


        <div class="ms_sharing row g-3 align-items-stretch">

            <div class="ms_sharing__img col-3 ">
                <img src="../assets/img/cta-sharing/social-1.jpg" alt="">
            </div>


            <div class="ms_sharing__text col-6 ">
                <div class=" text-center">
                    <span class="ms_little-caption">made for sharing</span>
                    <h4>Let's stay in touch</h4>
                    <button class="btn ms_btn-dark">
                        <i class="fa-brands fa-instagram"></i>
                        Follow us
                    </button>
                </div>
            </div>


            <div class="ms_sharing__img col-3 ">
                <img src="../assets/img/cta-sharing/social-2.jpg" alt="">
            </div>

            <div class="ms_sharing__img col-3 ">
                <img src="../assets/img/cta-sharing/social-3.jpg" alt="">
            </div>
            <div class="ms_sharing__img col-3 ">
                <img src="../assets/img/cta-sharing/social-4.jpg" alt="">
            </div>
            <div class="ms_sharing__img col-3 ">
                <img src="../assets/img/cta-sharing/social-5.jpg" alt="">
            </div>
            <div class="ms_sharing__img col-3 ">
                <img src="../assets/img/cta-sharing/social-6.jpg" alt="">
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

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