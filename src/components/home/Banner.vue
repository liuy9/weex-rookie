<template>
    <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="img in imageList">
            <image class="image" resize="stretch" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>

<script>
    export default {
        data() {
            return {
                imageList: [
                    {src: 'http://pic2.ooopic.com/12/19/86/28b1OOOPICd8.jpg'},
                    {src: 'http://pic2.ooopic.com/11/91/45/40b4OOOPIC8c_1024.jpg'},
                    {src: 'http://pic2.ooopic.com/12/22/14/79bOOOPICc2_1024.jpg'}
                ]
            }
        },
        created() {
        },
        methods: {}
    };
</script>

<style scoped>
    .image {
        width: 750px;
        height: 300px;
    }

    .slider {
        width: 750px;
        height: 300px;
        border: 1px solid #CCCCCC;
    }

    .frame {
        width: 750px;
        height: 300px;
        position: relative;
    }

    .indicator {
        width: 750px;
        height: 300px;
        item-color: #CCCCCC;
        item-selected-color: blue;
        item-size: 15px;
        position: absolute;
        top: 120px;
    }
</style>
