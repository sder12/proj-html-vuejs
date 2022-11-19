<script>
export default {
    name: "AppValues"
}
</script>

<template>
    <section class="ms_values container-fluid g-0">
        <div class="row  align-items-stretch gy-4 gx-0">


            <div class="ms_values-one col-12">
                <div class="d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between">
                        <h3>Tell us what you have in mind</h3>
                        <h2>01</h2>
                    </div>
                    <div class="align-self-end text-end">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div>

            </div>

            <div class="ms_values-two col-6 ">
                <div class="d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between">
                        <h3>We Start Baking</h3>
                        <h2>02</h2>
                    </div>
                    <div class="align-self-start">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>

            <div class="ms_values-text col-6 ">
                <div class="d-flex justify-content-center align-items-center ms-4">
                    <div>
                        <span>dont't just take our word for it</span>
                        <h3>"Finally found an alternatice to the mass products. Something that incorporates real organic
                            ingredients, nutrients dense wellness while promoting sustainabilit andd activity." </h3>
                        <span>Rachel Copper, Founder</span>
                    </div>
                </div>
            </div>


            <div class="ms_value-three col-12">
                <div class="d-flex flex-column justify-content-between">
                    <div class="d-flex justify-content-between">
                        <h3>Delivered to your home</h3>
                        <h2>03</h2>
                    </div>
                    <div class="align-self-start">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_values-text {

    >* {
        height: 100%;
        background-color: $bg-simple;
        padding: 3em 4em;
    }
}

.ms_values-one,
.ms_values-two,
.ms_value-three {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    padding: 2em 2em;

    >* {
        height: 100%;
    }
}

.ms_values-one {
    background-image: url("../assets/img/values/bakery-process-1.jpg");
}

.ms_values-two {
    background-image: url("../assets/img/values/bakery-process-2.jpg");
}

.ms_value-three {
    background-image: url("../assets/img/values/bakery-process-3.jpg");
}
</style>