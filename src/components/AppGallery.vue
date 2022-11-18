<script>
export default {
    name: "AppGallery"
}
</script>

<template>
    <div class="gallery">
        <div class="gallery__img">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta voluptate
            tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa. Doloremque,
            quod.
        </div>
        <div class="gallery__img">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta voluptate
            tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa. Doloremque,
            quod.
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.gallery {
    @include flex(row, center, center);
    gap: 1em;

    &__img {
        background-color: rgb(157, 244, 255);
    }
}
</style>