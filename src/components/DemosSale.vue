<script>
export default {
    name: "DemosSale"
}
</script>

<template>
    <div class="demo position-absolute">

        <div class="demo__icon">
            <i class="fa-solid fa-file-arrow-down pt-2"></i>
            <h5 class="pt-1"> Demos </h5>
        </div>

        <div class="demo__sales mt-2">
            <span class="pt-2">
                <sup>$</sup>39
            </span>
            <h5> On Sale </h5>

        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;


.demo {
    top: calc($header-height + 60px);
    right: 10px;

    >* {
        @include flex(column, center, center);
        background-color: white;
        border-radius: 5px;
        box-shadow: -1px 1px 10px 0px rgba(0, 0, 0, 0.226);
        width: 55px;
        height: 55px;
        cursor: pointer;

        h5,
        i {
            color: $diverse-icon !important;
        }

        h5 {
            font-weight: bold;
            font-size: .8rem;
            font-family: "Work Sans", sans-serif;
        }


    }

    &__sales {
        span {
            color: $diverse-txt;
            font-weight: bold;
            font-size: 1.4rem;
        }
    }
}
</style>