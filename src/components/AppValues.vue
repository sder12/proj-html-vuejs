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
                paragraph: "Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius.Ut eu laoreet ex.Aliquam erat volutpat. Nullam quis sagittis nibh.Morbi consectetur ultricies ante ac congue.Donec lorem erat, finibus in velit placerat, rutrum augue.",
                align: "end",
            },
            valueSecond: {
                valueNumber: "02",
                title: "We Start Baking",
                subTitle: "sweet & delicious",
                paragraph: "Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius.Ut eu laoreet ex.Aliquam erat volutpat. Nullam quis sagittis nibh.",
                align: "start",
            },
            valueThird: {
                valueNumber: "03",
                title: "Delivered to your home",
                subTitle: "baked to order & gift wrapper",
                paragraph: "Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius.Ut eu laoreet ex.Aliquam erat volutpat. Nullam quis sagittis nibh.Morbi consectetur ultricies ante ac congue.Donec lorem erat, finibus in velit placerat, rutrum augue.",
                align: "start",
            }
        }
    }
}
</script>

<template>
    <section class="ms_values container-fluid g-0">
        <div class="row align-items-stretch gy-4 gx-0">

            <!-- Value First -->
            <div class="ms_bg-1 col-12">
                <AppValuesCard :value="valueOne" />
            </div>

            <!-- Value Second -->
            <div class="ms_bg-2 col-6">
                <AppValuesCard :value="valueSecond" />
            </div>

            <!-- Quote section -->
            <div class="ms_values-text col-6">
                <div class="d-flex justify-content-center align-items-center ms-4">
                    <div>
                        <span class="ms_little-caption">{{ quote.subTitle }}</span>
                        <h3 class="mt-3">&ldquo;{{ quote.sentence }}&rdquo;</h3>
                        <span class="ms_little-caption text-capitalize mt-4">{{ quote.cit }}</span>
                    </div>
                </div>
            </div>

            <!-- Value Third -->
            <div class="ms_bg-3 col-12">
                <AppValuesCard :value="valueThird" />
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

//SQUARE TEXT QUOTE
.ms_values-text {
    >* {
        height: 100%;
        background-color: $bg-simple;
        padding: 4em 4em;
    }
}


// BACKGROUND IMAGE
.ms_bg-1,
.ms_bg-2,
.ms_bg-3 {

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.ms_bg-1 {
    background-image: url("../assets/img/values/bakery-process-1.jpg");
}

.ms_bg-2 {
    background-image: url("../assets/img/values/bakery-process-2.jpg");
}

.ms_bg-3 {
    background-image: url("../assets/img/values/bakery-process-3.jpg");
}
</style>