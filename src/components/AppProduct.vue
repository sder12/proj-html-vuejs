<script>
import { store } from "../store";
import ChevronSlider from "./ChevronSlider.vue";
export default {
    name: "AppProduct",
    components: { ChevronSlider },
    data() {
        return {
            store,
            first: 0,
            second: 1,
        }
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        },
        moveForward() {
            console.log("forward")
        },
        moveBackward() {
            console.log("backward")
        }
    }
}
</script>

<template>
    <section class="ms_product container-fluid g-0">
        <div class="row g-0">

            <!-- Text -->
            <div class="ms_product-text col-4 pe-5">
                <span class="ms_little-caption"> our products</span>
                <h4>
                    All our delectable pastries are backed fresh in our
                    Kitchen very morning, and are made with all-natural,
                    all organic ingredients.
                </h4>
                <button class="btn ms_btn-dark">Start shopping</button>
            </div>
            <!-- Slider -->
            <div class="ms_product-slider col-8 position-relative">
                <!-- IMG -->
                <div class="row g-3">
                    <div class="ms_product-slider col-6 positon-relative ">
                        <div class="ms_slider-image d-flex justify-content-center align-items-center">
                            <img :src="getImage(store.products[first].image)" :alt="store.products[first].prod">

                            <div class="ms_slider-hover position-absolute text-center">
                                <h3>{{ store.products[first].prod }}</h3>
                                <span>{{ store.products[first].type }}</span>
                                <span>{{ store.products[first].price }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="ms_product-slider col-6 positon-relative ">
                        <div class="ms_slider-image d-flex justify-content-center align-items-center">
                            <img :src="getImage(store.products[second].image)" :alt="store.products[second].prod">

                            <div class="ms_slider-hover position-absolute text-center">
                                <h3>{{ store.products[second].prod }}</h3>
                                <span>{{ store.products[second].type }}</span>
                                <span>{{ store.products[second].price }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA chevron -->
                <ChevronSlider @chevronRightClicked="moveForward()" @chevronLeftClicked="moveBackward()" />

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


.ms_slider-image:hover .ms_slider-hover {
    opacity: 1;
}

.ms_slider-image:hover img {
    filter: brightness(70%)
}

.ms_slider-hover {
    opacity: 0;
    top: 20%;
    width: 200px;

    //Typography
    text-transform: capitalize;
    color: $lighten-txt !important;
    font-size: 1.4rem;
    font-weight: 700;

    h3 {
        color: $lighten-txt !important;
        font-size: 1.2rem;
    }

    span {
        display: inline-block;
        font-size: 1rem;
        font-weight: 400;
    }

}
</style>