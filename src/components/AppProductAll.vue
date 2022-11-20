<script>
import { store } from "../store";
import ChevronSlider from "./ChevronSlider.vue";
export default {
    name: "AppProductAll",
    components: { ChevronSlider },
    data() {
        return { store }
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        }
    }
}
</script>

<template>
    <section class="ms_product container-fluid">
        <div class="row">

            <!-- Text -->
            <div class="ms_product-text col-12 col-lg-4 text-center align-self-center">
                <h4>Find a freshly backed product perfect for you </h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <button class="btn ms_btn-dark">Shop All Products</button>
            </div>
            <!-- / Text -->


            <!-- Slider -->
            <div class="ms_product-slider col-lg-8 col-12 g-0 position-relative">

                <!-- Product Cards -->
                <div class="row row-cols-4 g-3">

                    <div class="ms_slider col-3" v-for="(product, index) in store.products" :key="index">
                        <!-- Image -->
                        <div class="ms_slider__img positon-relative">
                            <img :src="getImage(product.image)" :alt="product.prod">

                            <div class="ms_slider-hover position-absolute top-50">
                                <span>select options / quick view</span>
                            </div>
                        </div>
                        <!-- Text Label -->
                        <div class="ms_slider__text text-center mt-3 fw-4">
                            <h5>{{ product.prod }}</h5>
                            <span>{{ product.price }}</span>
                        </div>
                    </div>

                </div>
                <!-- / Product Cards -->



                <!-- CTA chevron -->
                <ChevronSlider />
            </div>
            <!-- / Slider -->


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_cta-slider {
    top: 30%;
}

.ms_slider__text {
    color: $dark-txt;
}


.ms_slider:hover .ms_slider-hover {
    opacity: 1;
}

.ms_slider-hover {
    opacity: 0;
    text-transform: uppercase;
    color: $lighten-txt;
    font-size: .5rem;
    text-align: center;
    font-weight: 700;

}
</style>