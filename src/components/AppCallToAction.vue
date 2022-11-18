<script>
export default {
    name: "AppCallToAction"
}
</script>

<template>
    <!-- Order cta -->
    <section class="container-fluid">
        <div class="cta col-lg-12">
            <span>try our seasonal products</span>
            <h3>Order for pick-up or delivery to your home</h3>
            <button class="btn btn-light">Shop Now</button>
        </div>
    </section>
    <!-- / Order cta -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.cta {
    padding: 5em 10em;
    color: $lighten-txt;

    h3 {
        margin: .5em 0 2em;
    }
}
</style>