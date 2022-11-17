<script>
export default {
    name: "AppHeader",
    data() {
        return {
            navLinks: [
                {
                    name: "home",
                    url: "/home",
                    active: true
                },
                {
                    name: "shop",
                    url: "/shop",
                    active: false
                },
                {
                    name: "about",
                    url: "/about",
                    active: false
                },
                {
                    name: "gallery",
                    url: "/gallery",
                    active: false
                },
                {
                    name: "locations",
                    url: "/locations",
                    active: false
                },
                {
                    name: "journal",
                    url: "/journal",
                    active: false
                },
                {
                    name: "contact",
                    url: "/contact",
                    active: false
                },
                {
                    name: "my account",
                    url: "/my account",
                    active: false
                },
                {
                    name: "cart",
                    url: "/cart",
                    active: false
                }
            ]
        }
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