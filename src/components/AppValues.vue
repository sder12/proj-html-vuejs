<script>
export default {
    name: "AppValues"
}
</script>

<template>
    <div class="values">
        <div class="row">
            <div class="col-12 values__one">
                <h2>01</h2>
                <h3>Tell us what you have in mind</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>

            <div class="col-6 values__two">
                <h2>02</h2>
                <h3>We Start Baking</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>

            <div class="col-6 values__text">
                <span>dont't just take our word for it</span>
                <h3>"Finally found an alternatice to the mass products.
                    Something that incorporates real organic ingredients,
                    nutrients dense wellness while promoting sustainabilit andd activity."
                </h3>
                <span>Rachel Copper, Founder</span>
            </div>


            <div class="col-12 values__three">
                <h2>03</h2>
                <h3>delivered to your home</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.row>* {
    background-color: rgba(54, 158, 40, 0.527);
    border: 1px solid white;
}
</style>