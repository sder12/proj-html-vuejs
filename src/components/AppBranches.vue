<script>
export default {
    name: "AppBranches"
}
</script>

<template>
    <div class="branches">
        <div class="row">
            <!-- New York -->
            <div class="col-6 branch">
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
            <div class="col-6 branch">
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
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.branch {
    //DEBUG
    border: 1px solid blue;

    >* {
        background-color: rgba(6, 8, 124, 0.171);
        border: 1px solid red;
    }
}
</style>