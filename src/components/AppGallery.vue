<script>
export default {
    name: "AppGallery"
}
</script>

<template>
    <div class="gallery">
        <div class="row">
            <div class="col-6 gallery__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                voluptate
                tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                Doloremque,
                quod.
            </div>
            <div class="col-6 gallery__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                voluptate
                tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                Doloremque,
                quod.
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.gallery__img {
    background-color: rgb(157, 244, 255);
    border: 1px solid white;
}
</style>