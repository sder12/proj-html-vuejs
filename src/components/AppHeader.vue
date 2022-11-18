<script>
export default {
    name: "AppHeader",
    props: {
        navHeader: Array,
    }
}
</script>
 
<template>
    <!-- Header -->
    <header class="ms_header container-fluid pt-2">
        <div class="row align-items-center">

            <!-- Logo -->
            <div class="ms_header__logo col-lg-4 col-md-12">
                <div class="text-lg-start text-md-center">
                    <img src="../assets/img/logo/avada-bakery-logo-retina-200x97.png" alt="Bakery logo">
                </div>
            </div>
            <!-- / Logo -->

            <!-- Nav Menu -->
            <div class="ms_header__nav col-lg-8 col-md-12 ">
                <ul class="d-flex justify-content-lg-end justify-content-md-center align-items-center mb-0">
                    <li v-for="(link, index) in navHeader" :key="index" :class="link.active ? 'active' : ''"
                        v-show="link.headerShow">
                        <a :href="link.url" v-if="link.name !== 'cart'">
                            {{ link.name }}
                        </a>
                        <a :href="link.url" v-else>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- / Nav Menu -->
        </div>
    </header>
    <!-- /Header -->
</template>

 
<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_header {
    height: $header-height;
    // padding: 2.8em 1em 0;

    //LOGO
    &__logo img {
        height: $header-height;
    }

    //NAV
    &__nav ul {
        color: $dark-txt;

        li {
            margin-right: 1em
        }

        .active {
            border-bottom: 2px solid $dark-txt;
        }
    }
}
</style>