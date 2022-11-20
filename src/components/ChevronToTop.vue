<script>
export default {
    name: "ChevronToTop"
}
</script>

<template>
    <div class=" ms_wrapper">
        <a href="#ms_header" id="ms_chevron">
            <i class="fa-solid fa-chevron-up"></i>
        </a>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

//Chevron go to top page
#ms_chevron {
    position: fixed;
    bottom: 0em;
    right: .3em;
    padding: .5em 1em;
    background-color: $bg-chevron-footer;
    color: white;
    border-radius: 5px 5px 0px 0px;
}
</style>