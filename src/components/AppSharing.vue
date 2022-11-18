<script>
export default {
    name: "AppSharing"
}
</script>

<template>
    <div class="sharing">
        <div class="row sharing__section">
            <div class="sharing__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
            <div class="sharing__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
            <div class="sharing__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
        </div>
        <div class="row sharing__section">
            <div class="sharing__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
            <div class="sharing__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
            <div class="sharing__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
            <div class="sharing__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad eos temporibus reiciendis architecto
                nam neque animi, saepe quasi itaque, pariatur ex velit atque, maiores minus laborum consectetur officiis
                et!
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.sharing {
    @include flex(column, center, center);
    background-color: lightblue;

    &__section {
        @include flex(row, center, center);
        gap: 2em;

        >* {
            border: 1px solid black
        }

        ;

        .sharing__img {
            width: 25%;
        }

        .sharing__text {
            width: 50%;
        }
    }
}
</style>