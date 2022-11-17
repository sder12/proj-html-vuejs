<script>
export default {
    name: "AppHeader"
}
</script>
 
<template>
    <header class="header">
        <h2>header</h2>
    </header>
</template>

 
<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.header {
    height: $header-height;
}
</style>