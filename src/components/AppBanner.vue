<script>
export default {
    name: "AppBanner"
}
</script>

<template>
    <div class="wrapper">
        <div class="banner">
            <h2>Banner</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia enim ea, odio facilis suscipit incidunt
            tenetur illum molestiae dolorum eligendi repudiandae quos repellat voluptatem aspernatur earum tempora
            similique, temporibus harum.
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.banner {
    min-height: $banner-minheight;
}
</style>