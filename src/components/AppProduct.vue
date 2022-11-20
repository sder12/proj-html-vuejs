<script>
import { store } from "../store"
export default {
    name: "AppProduct",
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
                    <div class="col-6" v-for="(product, index) in store.products.slice(0, 2)" :key="index">
                        <img :src="getImage(product.image)" :alt="product.prod">
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