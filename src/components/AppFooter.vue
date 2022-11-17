<script>
export default {
    name: "AppFooter"
}
</script>

<template>
    <footer class="footer">
        <!-- FOOTER TOP -->
        <section class="footer-top">
            <div class="footer-nav">

                <ul>
                    <li>Shop</li>
                    <li>About</li>
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

.footer-top,
.footer-bottom {
    @include flex(row, space-between, flex-start)
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
</style>