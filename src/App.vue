<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppBanner from "./components/AppBanner.vue";
import AppSectionTitle from "./components/AppSectionTitle.vue";
import AppMainDebug from "./components/AppMainDebug.vue";
import AppCallToAction from "./components/AppCallToAction.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppBanner,
    AppSectionTitle,
    AppMainDebug,
    AppCallToAction,
    AppFooter,
  },
  data() {
    return {
      store,

    }
  }
}
</script>

<template>
  <!-- container -->
  <div class="container">

    <!-- Wrapper Jumbo -->
    <div class="wrapper-jumbotron">
      <!-- Header & Banner-->
      <AppHeader :navLinks=store.navHeader />
      <AppBanner />
      <!-- Header & Banner-->
    </div>
    <!-- /Wrapper Jumbo -->


    <!-- Wrapper Main -->
    <div class="wrapper">
      <!-- DEBUG MAIN -->
      <AppMainDebug class="mt-4" />
      <AppMainDebug class="mt-4" />
      <AppSectionTitle :titleSection=store.sectionsTitle[0] class="mt-4" />
      <AppMainDebug class="mt-4" />
      <AppSectionTitle :titleSection=store.sectionsTitle[1] class="mt-4" />
      <AppMainDebug class="mt-2" />
      <!-- / DEBUG MAIN -->
    </div>
    <!-- / Wrapper Main -->


    <!--Wrapper Cta -->
    <div class="wrapper-cta">
      <AppCallToAction class="mt-4" />
    </div>
    <!--/Wrapper Cta -->


    <!-- Footer -->
    <AppFooter class="my-3" :navMenu=store.navFooter />
    <!-- / Footer -->

  </div>
  <!-- / container -->
</template>


<style lang="scss">
@use "./styles/general.scss" as *;

//Background IMAGES full page
.wrapper-jumbotron,
.wrapper-cta {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.wrapper-jumbotron {
  background-image: url("../src/assets/img/hero-header-bakery.jpg");
}

.wrapper-cta {
  background-image: url("../src/assets/img/call-to-action-bg.jpg");
}
</style>