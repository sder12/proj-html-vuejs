<script>
export default {
    name: "AppGallery"
}
</script>

<template>
    <section class="ms_gallery container-fluid g-0">
        <div class="row g-3">
            <div class="col-lg-6">
                <img src="../assets/img/corporate-bg.jpg" alt="">
            </div>
            <div class="col-lg-6">
                <img src="../assets/img/wedding-bg.jpg" alt="">
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;
</style>