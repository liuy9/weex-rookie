<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <div class="item-container" :style="contentStyle">
            <title :title="title"></title>
            <home v-if="index === 0" :title="title"></home>
        </div>

        <div class="item-container" :style="contentStyle">
            <title :title="title"></title>
            <recommend v-if="index === 1"></recommend>
        </div>
        <div class="item-container" :style="contentStyle">
            <title :title="title"></title>
            <message v-if="index === 2"></message>
        </div>
        <div class="item-container" :style="contentStyle">
            <title :title="title"></title>
            <me v-if="index === 3"></me>
        </div>
    </wxc-tab-bar>
</template>

<script>
    import {WxcTabBar, Utils, WxcCell, WxcEpSlider} from 'weex-ui';
    import Config from './config'
    import Home from '../home/Home.vue'
    import Recommend from '../Recommend.vue'
    import Message from '../Message.vue'
    import Me from '../Me.vue'
    import Title from '../Title.vue'

    export default {
        components: {WxcTabBar, Home, WxcCell, WxcEpSlider, Recommend, Message, Me, Title},
        data: () => ({
            tabTitles: Config.tabTitles,
            tabStyles: Config.tabStyles,
            index: 0,
            contentStyle: {},
            title: Config.tabTitles[0].title,
            contentHeight: 0
        }),
        created() {
            const tabPageHeight = Utils.env.getPageHeight();
            console.log('tabPageHeight', tabPageHeight)
            const {tabStyles} = this;
            this.contentHeight = tabPageHeight - 34;
            this.contentStyle = {height: this.contentHeight + 'px'};
        },

        methods: {
            wxcTabBarCurrentTabSelected(e) {
                this.index = e.page;
                this.title = this.tabTitles[this.index].title;
            }

        }
    }
</script>

<style scoped>

    .item-container {
        width: 750px;
        position: relative;
        background-color: #f2f3f4;
    }
</style>
