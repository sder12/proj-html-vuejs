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
        <span class="ms-section-subtitle text-uppercase">
            {{ titleSection.subtitle }}
        </span>
        <h3 class="ms_section-title">
            {{ titleSection.title }}
        </h3>
    </section>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.ms_section-subtitle {
    color: $light-txt;
}

.ms_section-title {
    color: $dark-txt;
}
</style>