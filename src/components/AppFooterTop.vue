<script>
export default {
    name: "AppFooterTop"
}
</script>

<template>
    <div class="footer footer-top">
        <span>try our seasonal products</span>
        <h3>Order for pick-up or delivery to your home</h3>
        <button class="btn btn-light">Shop Now</button>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.footer-top {
    padding: 5em 10em;
    color: $lighten-txt;
}
</style>