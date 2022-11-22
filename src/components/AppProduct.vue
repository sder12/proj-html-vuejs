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
            //firstImg has index 0, secondImg index 1
            firstImg: 0,
            secondImg: 1,
        }
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        },
        //Slider using index store-array
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
            <div class="ms_product-text pe-5 col-lg-4 col-sm-12  text-lg-start text-sm-center">
                <span class="ms_little-caption"> our products</span>
                <h4 class="mt-3 ">
                    All our delectable pastries are backed fresh in our
                    Kitchen very morning, and are made with all-natural,
                    all organic ingredients.
                </h4>
                <button class="btn ms_btn-dark mt-lg-5 mt-2">Start shopping</button>
            </div>
            <!-- / Text -->


            <!-- Slider -->
            <div class="ms_product-slider col-lg-8  col-sm-12 mt-sm-4 position-relative">
                <!-- IMG -->
                <div class="row g-3">
                    <AppProductCard :indexArray=firstImg :arrayProds=store.products />
                    <AppProductCard :indexArray=secondImg :arrayProds=store.products />
                </div>

                <!-- CTA chevron -->
                <ChevronSlider @chevronRightClicked="moveForward()" @chevronLeftClicked="moveBackward()" />
            </div>
            <!-- / Slider -->

        </div>
    </section>

</template>

<style lang="scss" scoped>
.ms_cta-slider {
    top: 40%;
}
</style>