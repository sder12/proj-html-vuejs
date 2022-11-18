<script>
export default {
    name: "AppProduct"
}
</script>

<template>
    <div class="row product">

        <!-- Text -->
        <section class="col-4 product__text">
            <span> our products</span>
            <h3>
                All our delectable pastries are backed fresh in our
                Kitchen very morning, and are made with all-natural,
                all organic ingredients.
            </h3>
            <button class="btn btn-dark">Start shopping</button>
        </section>
        <!-- Slider -->
        <section class="col-8 product__slider">
            <!-- IMG -->
            <div class="row">
                <!-- First img -->
                <div class="col-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi ipsam
                    nostrum
                    expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores consequatur
                    iure
                    nulla blanditiis officiis! Aperiam.

                </div>
                <!-- Second img -->
                <div class="col-6 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis doloribus dolorem amet
                    non
                    rem
                    sequi nisi voluptates esse saepe quidem nemo, possimus impedit, ratione quo dolores ad aut
                    perferendis!
                </div>
            </div>

            <!-- CTA -->
            <!-- <div class="product__slider-cta">
                <div class="slider_chevron chevron-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="slider_chevron chevron-left">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div> -->

        </section>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;


.product {
    &__text {
        //DEBUG
        background-color: lightpink;
    }

    &__slider {
        //DEBUG
        background-color: rgba(104, 152, 255, 0.308);

    }
}
</style>