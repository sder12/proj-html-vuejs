<script>
export default {
    name: "AppProduct"
}
</script>

<template>
    <section class="ms_product container-fluid g-0">
        <div class="row g-0">

            <!-- Text -->
            <div class="ms_product-text col-4 pe-5">
                <span> our products</span>
                <h3>
                    All our delectable pastries are backed fresh in our
                    Kitchen very morning, and are made with all-natural,
                    all organic ingredients.
                </h3>
                <button class="btn ms_btn-dark">Start shopping</button>
            </div>
            <!-- Slider -->
            <div class="ms_product-slider col-8 position-relative">
                <!-- IMG -->
                <div class="row g-3">
                    <!-- First img -->
                    <div class="col-6">
                        <img src="../assets/img/slider/choco-chip-cookies-600x765.jpg" alt="choco cips cookies">
                    </div>
                    <!-- Second img -->
                    <div class="col-6 ">
                        <img src="../assets/img/slider/strawberry-jam-cookies-600x765.jpg" alt="strawberry jam cookies">
                    </div>
                </div>

                <!-- CTA chevron -->
                <div class="ms_cta-slider d-flex justify-content-between">
                    <div class="ms_cta-slider-left ">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                    <div class="ms_cta-slider-right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_cta-slider {
    top: 40%;
}
</style>