<script>
export default {
    name: "AppProductAll"
}
</script>

<template>
    <div class="product">
        <!-- Text -->
        <section class="product__text">
            <h3>Find a freshly backed product perfect for you </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            <button class="btn btn-dark">Shop All Products</button>
        </section>
        <!-- Slider -->
        <section class="product__slider">
            <!-- Chevron -->
            <!-- <div class="product__slider-cta">
                <div class="slider-cta chevron-left">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="slider-cta chevron-left">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div> -->
            <!-- Images -->
            <div class="product__slider-img">
                <!-- First img -->
                <div class="slider">
                    <div class="slider__img">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi ipsam
                        nostrum
                        expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores consequatur
                        iure
                        nulla blanditiis officiis! Aperiam.
                    </div>
                    <div class="slider__text">
                        <h4>Choco Chip Cookies</h4>
                        <span>$19.00 -$39.00</span>
                    </div>
                </div>
                <!-- Second -->
                <div class="slider">
                    <div class="slider__img">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi ipsam
                        nostrum
                        expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores consequatur
                        iure
                        nulla blanditiis officiis! Aperiam.
                    </div>
                    <div class="slider__text">
                        <h4>Choco Chip Cookies</h4>
                        <span>$19.00 -$39.00</span>
                    </div>
                </div>
                <!-- Third-->
                <div class="slider">
                    <div class="slider__img">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi ipsam
                        nostrum
                        expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores consequatur
                        iure
                        nulla blanditiis officiis! Aperiam.
                    </div>
                    <div class="slider__text">
                        <h4>Choco Chip Cookies</h4>
                        <span>$19.00 -$39.00</span>
                    </div>
                </div>
                <!-- Last img -->
                <div class="slider">
                    <div class="slider__img">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ad cum similique nisi ipsam
                        nostrum
                        expedita praesentium. Voluptates, blanditiis repellat? Hic minima facilis asperiores consequatur
                        iure
                        nulla blanditiis officiis! Aperiam.
                    </div>
                    <div class="slider__text">
                        <h4>Choco Chip Cookies</h4>
                        <span>$19.00 -$39.00</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.product {
    @include flex(row, center, flex-start);
    gap: 3em;

    >* {
        background-color: rgb(255, 225, 229);
    }

    &__slider-img {
        @include flex(row, center, flex-start);
        gap: 1em;

        >* {
            border: 1px solid black;
            background-color: rgba(104, 152, 255, 0.308);
        }


    }
}
</style>