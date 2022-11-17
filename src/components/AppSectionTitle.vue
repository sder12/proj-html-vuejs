<script>
export default {
    name: "AppSectionTitle",
    props: {
        titleSection: Object,
    }
}
</script>


<template>
    <section class="title-section">
        <span class="section-subtitle">
            {{ titleSection.subtitle }}
        </span>
        <h3 class="section-title">
            {{ titleSection.title }}
        </h3>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.title-section {
    text-align: center;

    .section-subtitle {
        color: $light-txt;
        text-transform: uppercase;
    }

    .section-title {
        color: $dark-txt;
    }
}
</style>