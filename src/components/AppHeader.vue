<script>
export default {
    name: "AppHeader",
    props: {
        navLinks: Array,
    }
}

</script>
 
<template>
    <header class="header">
        <div class="header__logo">
            <div>
                <img src="../assets/img/logo/avada-bakery-logo-retina-200x97.png" alt="">
            </div>
        </div>
        <div class="header__nav">
            <ul>
                <li v-for="(link, index) in navLinks" :key="index" :class="link.active ? 'active' : ''">
                    <a :href="link.url">
                        {{ link.name }}
                    </a>
                </li>
            </ul>
        </div>
    </header>
</template>

 
<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.header {
    height: $header-height;
    padding: 2.8em 1em 0;
    @include flex(row, space-between, center);

    &__logo img {
        height: $header-height;
    }

    &__nav ul {
        @include flex(row, flex-end, center);
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