<script>
export default {
    name: "AppCallToAction"
}
</script>

<template>
    <!-- Order cta -->
    <section class="container-fluid">
        <div class="cta col-lg-12">
            <span class="ms_little-caption">try our seasonal products</span>
            <h2>Order for pick-up or delivery to your home</h2>
            <button class="btn ms_btn-light">Shop Now</button>
        </div>
    </section>
    <!-- / Order cta -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.cta {
    padding: 5em 10em;

    h3 {
        margin: .5em 0 2em;
    }
}
</style>