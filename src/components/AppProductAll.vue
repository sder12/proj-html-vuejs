<script>
import { store } from "../store";
import ChevronSlider from "./ChevronSlider.vue";
export default {
    name: "AppProductAll",
    components: { ChevronSlider },
    data() {
        return {
            store,
            newProdArray: [...store.products],
        }
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        },
        //slider rigth - cancel last of the list, insert at index 0
        moveForward() {
            const arrayLength = this.newProdArray.length - 1;
            let element = this.newProdArray.splice(arrayLength, 1)[0];
            this.newProdArray.splice(0, 0, element)
        },
        //slider left - cancel first of the list, insert at the end
        moveBackward() {
            const arrayLength = this.newProdArray.length - 1;
            let element = this.newProdArray.splice(0, 1)[0];
            this.newProdArray.splice(arrayLength, 0, element)

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
                <button class="btn ms_btn-dark mb-4">Shop All Products</button>
            </div>
            <!-- / Text -->


            <!-- Slider -->
            <div class="ms_product-slider col-lg-8 col-12 g-0 position-relative">

                <!-- Product Cards -->
                <div class="row row-cols-4 g-3">

                    <div class="ms_slider col-3 " v-for="(product, index) in newProdArray" :key="index">

                        <!-- Image -->
                        <div
                            class="ms_slider__img positon-relative d-flex justify-content-center align-items-center text-center">
                            <img :src="getImage(product.image)" :alt="product.prod">
                            <!-- Hover Img -->
                            <div class="ms_slider-hover position-absolute">
                                <span>select options / quick view </span>
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
                <ChevronSlider @chevronRightClicked="moveForward()" @chevronLeftClicked="moveBackward()" />
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

    h5 {
        font-size: 1rem;
    }

    span {
        font-size: .8rem;
    }
}


//HOVER slider img
.ms_slider:hover .ms_slider-hover {
    opacity: 1;
}

.ms_slider:hover img {
    filter: brightness(70%)
}

.ms_slider-hover {
    opacity: 0;
    top: 20%;
    width: 100px;
    //Typography
    text-transform: uppercase;
    color: $lighten-txt;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer
}
</style>