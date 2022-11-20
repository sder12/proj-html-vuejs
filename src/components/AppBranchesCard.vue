<script>
export default {
    name: "AppBranchesCard",
    props: {
        location: Object,
        imgLocation: String,
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        }
    }
}
</script>

<template>
    <!-- New York / London...-->
    <div class="ms_branch col-lg-6 ">
        <!-- Img -->
        <img :src="getImage(location.image)" alt="location.name">
        <!-- Text -->
        <div class="py-3">
            <div class="row text-center">
                <div class="col-12 ">
                    <h4>{{ location.place }}</h4>
                </div>
                <div class="col-4">
                    <h6 class="ms_little-caption">call us</h6>
                    <span>{{ location.phone }}</span>
                </div>
                <div class="col-4">
                    <h6 class="ms_little-caption">open all week</h6>
                    <span>{{ location.timetable }}</span>
                </div>
                <div class="col-4">
                    <button class="btn ms_btn-light">View Map</button>
                </div>
            </div>
        </div>
    </div>
    <!-- / New York -->

</template>

<style lang="scss" scoped>

</style>