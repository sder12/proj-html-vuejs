<script>
export default {
    name: "AppValuesCard",
    props: {
        value: Object
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        }
    }
}
</script>


<template>
    <div class="ms_value position-relative">
        <!-- ImG Background -->
        <img :src="getImage(value.srcImg)" :alt="value.altImg">

        <!-- TEXT in absolute -->
        <div class="ms_value-txt position-absolute top-0 start-0">
            <div class="ms_value-txt-inner">

                <!-- TOP Title + number -->
                <div class="ms_value-txt-inner-title">
                    <h2 class="ms_values-title">
                        {{ value.title }}
                    </h2>
                    <h2 class="ms_values-numbers">
                        {{ value.valueNumber }}
                    </h2>
                </div>

                <!-- BOTTOM Subtitle + Paragraph -->
                <div :class="value.align == 'end' ? 'align-self-end text-end' : 'align-self-start'"
                    class="ms_value-txt-white">
                    <span class="ms_little-caption">
                        {{ value.subTitle }}
                    </span>
                    <p>
                        {{ value.paragraph }}
                    </p>
                </div>
            </div>

        </div>
    </div>

</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

// IMAGE
img {
    filter: opacity(0.7);
}

// TEXT
.ms_value-txt {
    padding: 2em 3em;
    width: 100%;
    height: 100%;

    &-inner {
        height: 100%;
        @include flex(column, space-between, space-between);

        &-title {
            @include flex(row, space-between, space-between)
        }
    }

    &-white {
        color: $lighten-txt;
    }
}
</style>