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
import ChevronToTop from "./components/ChevronToTop.vue";
import DemosSale from "./components/DemosSale.vue";

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
    ChevronToTop,
    DemosSale
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
  <div class="ms_container">


    <!-- Wrapper Jumbo -->
    <div class="ms_wrapper-jumbotron">
      <!-- Header & Banner-->
      <AppHeader :navHeader=store.navMenu id="ms_header" />
      <AppBanner />
      <!-- Header & Banner-->
    </div>
    <!-- /Wrapper Jumbo -->


    <!-- Wrapper Main -->
    <div class="ms_wrapper">
      <AppProduct class="ms_mt-section " />
      <AppSectionTitle class="ms_mt-section " :titleSection=store.sectionsTitle[0] />
      <AppGallery class="mt-4" />
      <AppProductAll class="ms_mt-section " />
      <AppValues class="ms_mt-section " />
      <AppSectionTitle class="ms_mt-section " :titleSection=store.sectionsTitle[1] />
      <AppBranches class="mt-4" />
      <AppSharing class="ms_mt-section " />
    </div>
    <!-- / Wrapper Main -->


    <!--Wrapper Cta -->
    <div class="ms_wrapper-cta ms_mt-section ">
      <AppCallToAction />
    </div>
    <!--/Wrapper Cta -->


    <!-- Footer -->
    <AppFooter :navFooter=store.navMenu :socialMenu=store.socialNetwork />
    <!-- / Footer -->


    <!-- ----------- elements removed from the flow -----------  -->
    <!-- Chevron To header -->
    <ChevronToTop />
    <!-- Demos Sales Icons -->
    <DemosSale />
    <!-- ----------- / elements removed from the flow -----------  -->


  </div>
  <!-- / container -->
</template>


<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/variables" as *;

//Background IMAGES full page
.ms_wrapper-jumbotron,
.ms_wrapper-cta {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f1e5ef;

  >* {
    max-width: $wrapper-max-width;
  }

  #ms_header {
    max-width: $container-max-width;
  }
}

.ms_wrapper-jumbotron {
  background-image: url("../src/assets/img/hero-header-bakery.jpg");
}

.ms_wrapper-cta {
  background-image: url("../src/assets/img/call-to-action-bg.jpg");
}
</style>