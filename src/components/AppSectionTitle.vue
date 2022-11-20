<script>
export default {
    name: "AppSectionTitle",
    props: {
        titleSection: Object,
    }
}
</script>


<template>
    <section class="ms_title-section text-center">
        <span class="ms_little-caption">
            {{ titleSection.subtitle }}
        </span>
        <h4>
            {{ titleSection.title }}
        </h4>
    </section>
</template>


<style lang="scss" scoped>

</style>