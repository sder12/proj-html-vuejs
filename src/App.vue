<script>
import { store } from "./store";
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
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <!-- container -->
  <div class="container">

    <!-- Wrapper Jumbo -->
    <div class="wrapper-jumbotron">
      <!-- Header -->
      <AppHeader :navLinks=store.navHeader />
      <!-- /Header -->
      <!-- Banner -->
      <AppBanner />
      <!-- /Banner -->
    </div>
    <!-- /Wrapper Jumbo -->


    <!-- Wrapper Main -->
    <div class="wrapper">
      <!-- DEBUG MAIN -->
      <AppMainDebug class="mt-4" />
      <AppMainDebug class="mt-4" />
      <AppMainDebug class="mt-4" />
      <!-- / DEBUG MAIN -->
    </div>
    <!-- / Wrapper Main -->

    <!-- Footer -->
    <div class="wrapper-footer">
      <AppFooterTop class="mt-4" />
    </div>

    <AppFooterBottom />
    <!-- / Footer -->

  </div>
  <!-- / container -->
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.wrapper-jumbotron,
.wrapper-footer {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.wrapper-jumbotron {
  background-image: url("../src/assets/img/hero-header-bakery.jpg");
}

.wrapper-footer {
  background-image: url("../src/assets/img/call-to-action-bg.jpg");
}
</style>