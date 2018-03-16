<template>
    <div class="demo-title">
        <text class="middle-title">{{this.title}}</text>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['title']
    }
</script>

<style scoped>
    .demo-title {
        width: 750px;
        height: 90px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #3eb4ff;
    }

    .middle-title {
        font-size: 30px;
        color: #ffffff;
        /*float: inside;*/
        /*height: 36px;*/
        /*line-height: 34px;*/
    }

</style>