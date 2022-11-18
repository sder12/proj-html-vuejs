<script>
export default {
    name: "AppBranches"
}
</script>

<template>
    <section class="ms_branches container-fluid g-0">
        <div class="row g-0">


            <!-- New York -->
            <div class="ms_branch col-lg-6 ">
                <!-- Img -->
                <img src="../assets/img/new-york-bk-800x530.jpg" alt="New York branch">
                <!-- Text -->
                <div class="ms_branch__ny py-3">
                    <div class="row text-center">
                        <div class="col-12 ">
                            <h5>New York</h5>
                        </div>
                        <div class="col-4">
                            <h6>call us</h6>
                            <span>1.800.345.333</span>
                        </div>
                        <div class="col-4">
                            <h6>open all week</h6>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div class="col-4">
                            <button class="btn ms_btn-light">View Map</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / New York -->


            <!-- London -->
            <div class="ms_branch col-lg-6 ">
                <!-- Img -->
                <img src="../assets/img/london-bk-800x530.jpg" alt="London branch">
                <!-- Text -->
                <div class="ms_branch__london py-3">
                    <div class="row text-center">
                        <div class="col-12 ">
                            <h5>London</h5>
                        </div>
                        <div class="col-4">
                            <h6>call us</h6>
                            <span>1.800.345.333</span>
                        </div>
                        <div class="col-4">
                            <h6>open all week</h6>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div class="col-4">
                            <button class="btn ms_btn-light">View Map</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / London -->

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.ms_branch {
    img {
        width: 100%;
    }

    &__ny {
        background-color: $bg-visit-ny;
    }

    &__london {
        background-color: $bg-visit-london;
    }
}
</style>