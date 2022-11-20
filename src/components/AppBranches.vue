<script>
import AppBranchesCard from './AppBranchesCard.vue';
export default {
    name: "AppBranches",
    components: {
        AppBranchesCard
    },
    data() {
        return {
            london: {
                place: "London",
                phone: "1.800.345.333",
                timetable: "9:00 AM - 6:00 PM",
                image: "../assets/img/london-bk-800x530.jpg"
            },
            newYork: {
                place: "New York",
                phone: "1.600.445.333",
                timetable: "9:30 AM - 6:00 PM",
                image: "../assets/img/new-york-bk-800x530.jpg"
            }
        }
    }
}
</script>

<template>
    <section class="ms_branches container-fluid g-0">
        <div class="row g-0">


            <!-- New York -->
            <AppBranchesCard :location="newYork" class="ms_background-1" />
            <!-- / New York -->


            <!-- London -->
            <AppBranchesCard :location="london" class="ms_background-2" />
            <!-- / London -->

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;

.ms_background-1 {
    background-color: $bg-visit-ny;
}

.ms_background-2 {
    background-color: $bg-visit-london;
}
</style>