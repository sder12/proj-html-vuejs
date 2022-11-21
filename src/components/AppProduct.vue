<script>
import { store } from "../store";
import AppProductCard from "./AppProductCard.vue";
import ChevronSlider from "./ChevronSlider.vue";

export default {
    name: "AppProduct",
    components: { ChevronSlider, AppProductCard },
    data() {
        return {
            store,
            firstImg: 0,
            secondImg: 1,
        }
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        },
        moveForward() {
            if (this.secondImg < this.store.products.length - 1) {
                this.secondImg++
            } else {
                this.secondImg = 0
            }
            if (this.firstImg < this.store.products.length - 1) {
                this.firstImg++
            } else {
                this.firstImg = 0
            }
        },
        moveBackward() {
            if (this.secondImg == 0) {
                this.secondImg = this.store.products.length - 1
            } else {
                this.secondImg--
            }

            if (this.firstImg == 0) {
                this.firstImg = this.store.products.length - 1
            } else {
                this.firstImg--
            }
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
                    <AppProductCard :indexArray=firstImg />
                    <AppProductCard :indexArray=secondImg />
                </div>

                <!-- CTA chevron -->
                <ChevronSlider @chevronRightClicked="moveForward()" @chevronLeftClicked="moveBackward()" />

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.ms_cta-slider {
    top: 40%;
}
</style>