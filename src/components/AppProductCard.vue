<script>
export default {
    name: "AppProductCard",
    props: {
        indexArray: Number,
        arrayProds: Array
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        }
    }
}
</script>

<template>


    <div class="ms_product-slider col-6 positon-relative ">

        <div class="ms_slider-image d-flex justify-content-center align-items-center">
            <img :src="getImage(arrayProds[indexArray].image)" :alt="arrayProds[indexArray].prod">

            <div class="ms_slider-hover position-absolute text-center">
                <h3>{{ arrayProds[indexArray].prod }}</h3>
                <span>{{ arrayProds[indexArray].type }}</span>
                <span>{{ arrayProds[indexArray].price }}</span>
            </div>
        </div>

    </div>


</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

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