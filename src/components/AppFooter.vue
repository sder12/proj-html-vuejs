<script>
export default {
    name: "AppFooter",
    props: {
        navFooter: Array,
        socialMenu: Array,
    }
}

</script>

<template>
    <footer class="footer px-2">
        <!-- FOOTER TOP -->
        <section class="footer-top row">

            <!-- Footer Nav -->
            <div class="footer-nav col-8">
                <div class="footer-nav__logo">
                    <img src="../assets/img/logo/avada-bakery-logo-retina-200x97.png" alt="Bakery logo">
                </div>
                <ul class="footer-nav__menu">
                    <li v-for="(link, index) in navFooter" :key="index" v-show="link.footerShow">
                        <a :href="link.url" v-if="link.name !== 'cart'">
                            {{ link.name }}
                        </a>
                        <a :href="link.url" v-else>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span> 0 </span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Footer Subscribe -->
            <div class="footer-subscribe col-4">
                <h4>Subscribe to our Newsletter</h4>
                <div class="subscribe-email">
                    <label for="subscribe" class="sr-only">Enter email address</label>
                    <input type="email" id="subscripe" placeholder="Enter email address*">
                    <button class="btn btn-dark"> Subscribe </button>
                </div>
            </div>

            <!-- Footer Copyright -->
            <div class="footer-copyright col-8">
                <span> &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by
                    Wordpress</span>
            </div>

            <!-- Footer Social -->
            <div class="footer-social col-4">
                <ul>
                    <li v-for="(social, index) in socialMenu" :key="index">
                        <a :href="social.url">
                            <i :class="`fa-brands fa-${social.name}`"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>


    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;



//Styling
.footer-nav {
    &__logo {
        width: 150px;
    }

    &__menu {
        @include flex(row, flex-start, flex-start);
        margin: 1em 0;

        li {
            padding-right: 1em;
        }
    }
}

.footer-subscribe {
    text-align: right;
}

.footer-social {
    ul {
        @include flex(row, flex-end, flex-start);
        gap: 2em;
    }
}
</style>