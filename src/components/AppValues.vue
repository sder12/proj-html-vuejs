<script>
import AppValuesCard from './AppValuesCard.vue';
export default {
    name: "AppValues",
    components: { AppValuesCard },
    data() {
        return {
            quote: {
                subTitle: "dont't just take our word for it",
                sentence: "Finally found an alternative to the mass products. Something that incorporates real organic ingredients, nutrients dense wellness while promoting sustainabilit andd activity.",
                cit: "Rachel Copper, Founder"
            },
            valueOne: {
                valueNumber: "01",
                title: "Tell us what you have in mind",
                subTitle: "manual ingredients selection",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                srcImg: "../assets/img/values/bakery-process-1.jpg",
                altImg: "Bakery process",
                align: "end",
            },
            valueSecond: {
                valueNumber: "02",
                title: "We Start Baking",
                subTitle: "sweet & delicious",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                srcImg: "../assets/img/values/bakery-process-2.jpg",
                altImg: "Bakery process",
                align: "start",
            },
            valueThird: {
                valueNumber: "03",
                title: "Delivered to your home",
                subTitle: "baked to order & gift wrapper",
                paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                srcImg: "../assets/img/values/bakery-process-3.jpg",
                altImg: "Bakery process",
                align: "start",
            }
        }
    }
}
</script>

<template>
    <section class="ms_values container-fluid g-0">
        <div class="row align-items-stretch gy-4 gx-0">

            <!-- Value One -->
            <div class="overlay col-12">
                <AppValuesCard :value="valueOne" />
            </div>

            <!-- Value Second -->
            <div class="overlay col-6 ">
                <AppValuesCard :value="valueSecond" />
            </div>

            <!-- Quote section -->
            <div class="ms_values-text col-6 ">
                <div class="d-flex justify-content-center align-items-center ms-4">
                    <div>
                        <span class="ms_little-caption">{{ quote.subTitle }}</span>
                        <h3>&ldquo;{{ quote.sentence }}&rdquo;</h3>
                        <span class="ms_little-caption text-capitalize">{{ quote.cit }}</span>
                    </div>
                </div>
            </div>

            <!-- Value Third -->
            <div class="overlay col-12">
                <AppValuesCard :value="valueThird" />
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.overlay {
    background-color: black;
}

.ms_values-text {
    >* {
        height: 100%;
        background-color: $bg-simple;
        padding: 0 4em;
    }
}
</style>