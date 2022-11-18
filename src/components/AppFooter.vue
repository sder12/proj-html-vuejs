<script>
export default {
    name: "AppFooter",
    props: {
        navMenu: Array,
        socialMenu: Array,
    }
}

</script>

<template>
    <footer class="footer px-2">
        <!-- FOOTER TOP -->
        <section class="footer-top">
            <!-- Footer Nav -->
            <div class="footer-nav">
                <div class="footer-nav__logo">
                    <img src="../assets/img/logo/avada-bakery-logo-retina-200x97.png" alt="Bakery logo">
                </div>

                <ul class="footer-nav__menu">
                    <li v-for="(link, index) in navMenu" :key="index">
                        <a :href="link.url" v-if="link.name !== 'cart'">
                            {{ link.name }}
                        </a>
                        <a :href="link.url" v-else>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                    <li>

                    </li>
                </ul>
            </div>
            <!-- Footer Subscribe -->
            <div class="footer-subscribe">
                <h4>Subscribe to our Newsletter</h4>
                <div class="subscribe-email">
                    <label for="subscribe" class="sr-only">Enter email address</label>
                    <input type="email" id="subscripe" placeholder="Enter email address*">
                    <button class="btn btn-dark"> Subscribe </button>
                </div>
            </div>
        </section>
        <!-- / FOOTER TOP -->

        <!-- FOOTER BOTTOM -->
        <section class="footer-bottom mt-3">
            <!-- Footer Copyright -->
            <div class="footer-copyright">
                <span> &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by
                    Wordpress</span>
            </div>
            <!-- Footer Social -->
            <div class="footer-social">
                <ul>
                    <li v-for="(social, index) in socialMenu" :key="index">
                        <a :href="social.url">
                            <i :class="`fa-brands fa-${social.name}`"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <!-- / FOOTER BOTTOM -->


    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;


//Flexing the two row 
//1.row(nav-subscribe) vs 2.row(copyright-social)
.footer-top,
.footer-bottom {
    @include flex(row, space-between, flex-start);
}

//Giving space between the columns 
//1. nav-copyright vs 2.subscribe-social
.footer-nav,
.footer-copyright {
    width: 60%;
}

.footer-subscribe,
.footer-social {
    width: 30%;
    text-align: right;
}

//Styling
.footer-nav {
    &__logo {
        width: 150px;
    }

    &__menu {
        @include flex(row, flex-start, flex-start);
        margin-top: 1em;

        li {
            padding-right: 1em;
        }
    }
}

.footer-social {
    ul {
        @include flex(row, flex-end, flex-start);
        gap: 2em;


    }
}
</style>