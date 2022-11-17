<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppBanner from "./components/AppBanner.vue";
import AppProduct from "./components/AppProduct.vue";
import AppSectionTitle from "./components/AppSectionTitle.vue";
import AppGallery from "./components/AppGallery.vue";
import AppProductAll from "./components/AppProductAll.vue";
import AppValues from "./components/AppValues.vue";
import AppBranches from "./components/AppBranches.vue";
import AppSharing from "./components/AppSharing.vue";
import AppCallToAction from "./components/AppCallToAction.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppBanner,
    AppProduct,
    AppSectionTitle,
    AppGallery,
    AppProductAll,
    AppValues,
    AppBranches,
    AppSharing,
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
      <AppProduct class="mt-4" />
      <AppSectionTitle class="mt-4" :titleSection=store.sectionsTitle[0] />
      <AppGallery class="mt-1" />
      <AppProductAll class="mt-4" />
      <AppValues class="mt-4" />
      <AppSectionTitle :titleSection=store.sectionsTitle[1] class="mt-4" />
      <AppBranches class="mt-1" />
      <AppSharing class="mt-4" />
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