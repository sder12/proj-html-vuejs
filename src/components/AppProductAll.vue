<script>
export default {
    name: "AppProductAll"
}
</script>

<template>
    <section class="ms_product container-fluid">
        <div class="row">

            <!-- Text -->
            <div class="ms_product-text col-lg-2 col-md-12">
                <h3>Find a freshly backed product perfect for you </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <button class="btn btn-dark">Shop All Products</button>
            </div>
            <!-- Slider -->
            <div class="ms_product-slider col-lg-10 col-md-12">
                <!-- Images -->
                <div class="row row-cols-lg-4 ">
                    <!-- First img -->
                    <div class="ms_slider col-md-3">
                        <div class="ms_slider__img">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi
                            ipsam
                            nostrum
                            expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores
                            consequatur
                            iure
                            nulla blanditiis officiis! Aperiam.
                        </div>
                        <div class="ms_slider__text">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                    <!-- Second -->
                    <div class="ms_slider col-md-3">
                        <div class="ms_slider__img">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi
                            ipsam
                            nostrum
                            expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores
                            consequatur
                            iure
                            nulla blanditiis officiis! Aperiam.
                        </div>
                        <div class="ms_slider__text">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                    <!-- Third-->
                    <div class="ms_slider col-md-3">
                        <div class="ms_slider__img">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi
                            ipsam
                            nostrum
                            expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores
                            consequatur
                            iure
                            nulla blanditiis officiis! Aperiam.
                        </div>
                        <div class="ms_slider__text">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                    <!-- Last img -->
                    <div class="ms_slider col-md-3">
                        <div class="ms_slider__img">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi
                            ipsam
                            nostrum
                            expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores
                            consequatur
                            iure
                            nulla blanditiis officiis! Aperiam.
                        </div>
                        <div class="ms_slider__text">
                            <h4>Choco Chip Cookies</h4>
                            <span>$19.00 -$39.00</span>
                        </div>
                    </div>
                </div>
                <!-- Chevron -->
                <!-- <div class="product__slider-cta">
                <div class="slider-cta chevron-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="slider-cta chevron-left">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div> -->
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_product {

    >* {
        background-color: rgb(255, 225, 229);
    }

    .ms_slider {
        border: 1px solid black;
        background-color: rgba(104, 152, 255, 0.308);
    }
}
</style>