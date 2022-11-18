<script>
export default {
    name: "AppBranches"
}
</script>

<template>
    <section class="ms_branches container-fluid g-0">
        <div class="row g-0">
            <!-- New York -->
            <div class="ms_branch col-lg-6 ">
                <div class="ms_branch__img">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                    voluptate
                    tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                    Doloremque,
                    quod.
                </div>
                <div class="ms_branch__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                    voluptate
                    tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                    Doloremque,
                    quod.
                </div>

            </div>
            <!-- London -->
            <div class="ms_branch col-lg-6 ">
                <div class="ms_branch__img">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                    voluptate
                    tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                    Doloremque,
                    quod.
                </div>
                <div class="ms_branch__txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus placeat quia ullam dicta
                    voluptate
                    tenetur laboriosam maxime quis fugit, atque inventore, earum ipsum corporis sequi magnam culpa.
                    Doloremque,
                    quod.
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.ms_branch {
    //DEBUG
    border: 1px solid blue;

    >* {
        background-color: rgba(6, 8, 124, 0.171);
        border: 1px solid red;
    }
}
</style>