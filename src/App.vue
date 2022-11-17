<script>
import AppHeader from "./components/AppHeader.vue";
import AppBanner from "./components/AppBanner.vue";
import AppMainDebug from "./components/AppMainDebug.vue";
import AppFooterTop from "./components/AppFooterTop.vue";
import AppFooterBottom from "./components/AppFooterBottom.vue";

export default {
  components: {
    AppHeader,
    AppBanner,
    AppMainDebug,
    AppFooterTop,
    AppFooterBottom,
  }
}
</script>

<template>
  <div class="container">
    <div class="wrapper-jumbotron">
      <!-- Header -->
      <AppHeader />

      <!-- Banner -->
      <AppBanner />
    </div>


    <!-- Wrapper Main -->
    <div class="wrapper">
      <!-- DEBUG MAIN -->
      <AppMainDebug />
      <hr>
      <AppMainDebug />
      <AppMainDebug />
    </div>

    <!-- Footer -->
    <AppFooterTop />
    <AppFooterBottom />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>