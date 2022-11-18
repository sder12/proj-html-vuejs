<script>
export default {
    name: "AppBranches"
}
</script>

<template>
    <div class="branches">
        <!-- New York -->
        <div class="branch ny">
            <div class="branch__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                voluptate
                tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                Doloremque,
                quod.
            </div>
            <div class="branch__txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                voluptate
                tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                Doloremque,
                quod.
            </div>

        </div>
        <!-- London -->
        <div class="branch london">
            <div class="branch__img">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                voluptate
                tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                Doloremque,
                quod.
            </div>
            <div class="branch__txt">
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

.branches {
    @include flex(row, center, center);

    //DEBUG
    >* {
        background-color: rgb(157, 244, 255);
    }

    .branch {
        //DEBUG
        border: 1px solid blue;

        >* {
            background-color: rgba(6, 8, 124, 0.171);
        }
    }
}
</style>