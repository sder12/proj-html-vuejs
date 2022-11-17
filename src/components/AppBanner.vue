<script>
export default {
    name: "AppBanner"
}
</script>

<template>
    <!-- Wrapper = main -->
    <div class="wrapper">

        <!-- Banner -->
        <div class="banner">
            <span>fresh & tasty bakery every day</span>
            <h1>The Perfect Fresh Bread</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia enim ea, odio facilis suscipit incidunt
            </p>
            <button class="btn btn-light">
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

.banner {
    @include flex(column, center, flex-start);
    gap: 1em;
    padding: 8em 0;
    width: 35%;
}
</style>