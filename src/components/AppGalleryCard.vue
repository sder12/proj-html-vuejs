<script>
export default {
    name: "AppGalleryCard",
    props: {
        galleryImg: Object
    },
    methods: {
        getImage(pathImg) {
            return new URL(pathImg, import.meta.url).href
        }
    }
}
</script>

<template>

    <div class="ms_gallery-img col-lg-6 ">

        <!-- STATIC-->
        <div class="position-relative">
            <!-- Img Visible -->
            <img :src="getImage(galleryImg.imgVisible)" :alt="imgAlt">

            <!-- HOVER -->
            <div class="ms_gallery-hover">
                <!-- Img Visible with hover -->
                <img :src="getImage(galleryImg.imgHover)" :alt="imgAlt">
                <!-- Text Visible with hover -->
                <div class="ms_gallery-hover-txt text-center ">
                    <span class="ms_little-caption">
                        {{ galleryImg.hoverSubTitle }}
                    </span>
                    <h3>
                        {{ galleryImg.hoverTitle }}
                    </h3>
                    <button class="btn ms_btn-dark">
                        {{ galleryImg.hoverBtn }}
                    </button>
                </div>
            </div>
            <!-- / HOVER -->
        </div>
        <!-- /STATIC-->

    </div>

</template>

<style lang="scss" scoped>
.ms_gallery-img:hover .ms_gallery-hover {
    opacity: 1;
}

.ms_gallery-hover {
    opacity: 0;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;

    img {
        opacity: .5;
    }

    &-txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h3,
        span {
            color: white;
        }
    }


}
</style>