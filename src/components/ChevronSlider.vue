<script>
export default {
    name: "ChevronSlider"
}
</script>


<template>
    <div class="ms_cta-slider d-flex justify-content-between">

        <!-- CHEVRON BACKWARD -->
        <div class="ms_cta-slider-left" @click="$emit('chevronLeftClicked')">
            <i class="fa-solid fa-chevron-left"></i>
        </div>

        <!-- CHEVRON FORWARD -->
        <div class="ms_cta-slider-right" @click="$emit('chevronRightClicked')">
            <i class="fa-solid fa-chevron-right"></i>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

//Chevron slider
.ms_cta-slider {
    width: 100%;
    cursor: pointer;
    position: absolute;

    >* {
        background-color: $bg-chevron-slider;
        padding: 1em .5em;
        color: white;

        &:hover {
            background-color: darken($bg-chevron-slider, 10%);
        }
    }

}
</style>