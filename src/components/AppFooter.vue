<script>
export default {
    name: "AppFooter",
    props: {
        navMenu: Array,
    }
}

</script>

<template>
    <footer class="footer">
        <!-- FOOTER TOP -->
        <section class="footer-top">
            <div class="footer-nav">
                <div class="footer-nav__logo">
                    <img src="../assets/img/logo/avada-bakery-logo-retina-200x97.png" alt="Bakery logo">
                </div>

                <ul class="footer-nav__menu">
                    <li v-for="(link, index) in navMenu" :key="index">
                        <a :href="link.url">
                            {{ link.name }}
                        </a>
                    </li>

                </ul>

            </div>
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
        <section class="footer-bottom">
            <div class="footer-copyright">
                <span> &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by
                    Wordpress</span>
            </div>
            <div class="footer-social">
                instagram - twitter - facebook - pinterest
            </div>
        </section>
        <!-- / FOOTER BOTTOM -->
    </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.footer {
    padding: 0 2em 4em;
}

.footer-top,
.footer-bottom {
    @include flex(row, space-between, flex-start);
    margin-top: 4em
}

.footer-nav,
.footer-copyright {
    width: 60%;
}

.footer-subscribe,
.footer-social {
    width: 30%;
    text-align: right;
}

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
</style>