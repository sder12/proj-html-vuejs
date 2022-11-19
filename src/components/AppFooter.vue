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
    <footer class="footer container-fluid">
        <!-- FOOTER TOP -->
        <section class="ms_footer-top row">

            <!-- Footer Nav -->
            <div class="ms_footer-nav col-lg-8 col-md-12">
                <!-- Logo -->
                <div class="ms_footer-nav__logo">
                    <img src="../assets/img/logo/avada-bakery-logo-retina-200x97.png" alt="Bakery logo">
                </div>
                <!-- Nav -->
                <ul class="ms_footer-nav__menu ms_footer-txt mt-4">
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
            <div class="ms_footer-subscribe col-lg-4 col-md-12 text-lg-end text-md-start">
                <h5>Subscribe to our Newsletter</h5>
                <div class="ms_subscribe-email d-flex gap-2 mt-4">
                    <div class="input-group">
                        <label for="subscribe" class="sr-only">Enter email address</label>
                        <input type="email" class="form-control rounded ms_footer-txt"
                            placeholder="Enter email address">
                    </div>
                    <button class="btn ms_btn-dark"> Subscribe </button>
                </div>
            </div>

            <!-- Footer Copyright -->
            <div class="ms_footer-copyright col-lg-8 col-md-12">
                <span class="ms_copyright-txt"> &copy; Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights
                    Reserved | Powered by
                    Wordpress</span>
            </div>

            <!-- Footer Social -->
            <div class="ms_footer-social col-lg-4 col-md-12 ">
                <ul class="d-flex gap-4  justify-content-lg-end justify-content-md-start">
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

.footer {
    padding: 3em 2em;
}

//Styling
.ms_footer-nav {
    &__logo {
        width: 150px;
    }

    &__menu {
        @include flex(row, flex-start, flex-start);
        padding-left: 0;
        margin: 1em 0;
        color: $dark-txt;
        text-transform: capitalize;

        li {
            padding-right: 1em;

            &:hover {
                font-weight: 600;
            }
        }
    }
}

.ms_footer-copyright,
.ms_footer-social {
    margin-top: 3rem;
}

.ms_footer-social {
    color: $dark-txt;
}

.ms_copyright-txt {
    font-size: .6rem;
}

.ms_footer-txt {
    font-size: .8rem;
}
</style>