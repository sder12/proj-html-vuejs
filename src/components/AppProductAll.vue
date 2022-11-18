<script>
export default {
    name: "AppProductAll"
}
</script>

<template>
    <section class="ms_product container-fluid">
        <div class="row">

            <!-- Text -->
            <div class="ms_product-text col-12 col-lg-4 text-center align-self-center">
                <h3>Find a freshly backed product perfect for you </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <button class="btn ms_btn-dark">Shop All Products</button>
            </div>
            <!-- Slider -->
            <div class="ms_product-slider col-lg-8 col-12 g-0 position-relative">
                <!-- Images -->
                <div class="row row-cols-4 g-3">
                    <!-- First img -->
                    <div class="ms_slider col-3">
                        <div class="ms_slider__img">
                            <img src="../assets/img/slider/choco-chip-cookies-600x765.jpg" alt="choco cips cookies">

                        </div>
                        <div class="ms_slider__text text-center">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                    <!-- Second -->
                    <div class="ms_slider col-3">
                        <div class="ms_slider__img">
                            <img src="../assets/img/slider/strawberry-jam-cookies-600x765.jpg"
                                alt="strawberry jam cookies">

                        </div>
                        <div class="ms_slider__text  text-center">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                    <!-- Third-->
                    <div class="ms_slider col-3">
                        <div class="ms_slider__img">
                            <img src="../assets/img/slider/strawberry-donut-600x765.jpg" alt="perfect macarons">

                        </div>
                        <div class="ms_slider__text  text-center">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                    <!-- Last img -->
                    <div class="ms_slider col-3">
                        <div class="ms_slider__img">
                            <img src="../assets/img/slider/perfect-macarons-600x765.jpg" alt="perfect macarons">

                        </div>
                        <div class="ms_slider__text  text-center">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                </div>



                <!-- CTA chevron -->

                <div class="ms_cta-slider d-flex justify-content-between">
                    <div class="ms_cta-slider-left">
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
    top: 30%;
}
</style>