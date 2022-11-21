<script>
export default {
    name: "AppBanner"
}
</script>

<template>
    <!-- Wrapper = main -->
    <div class="ms_wrapper container-fluid g-0">

        <!-- Banner -->
        <div class="ms_banner col-lg-4 col-md-6">
            <span class="ms_little-caption">fresh & tasty bakery every day</span>
            <h1>The Perfect Fresh Bread</h1>
            <p>
                Cras consequat lectus vestibulum tortor pulvinar, quis
                euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat.
                Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac
                congue.
            </p>
            <button class="btn ms_btn-light">
                Explore our products
            </button>
        </div>
        <!-- / Banner -->
    </div>
    <!-- / Wrapper -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_banner {
    @include flex(column, center, flex-start);
    gap: 1em;
    padding: 8em 0;
}
</style>