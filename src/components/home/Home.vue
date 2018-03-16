<template>
    <div class="wxc-content">
        <banner></banner>
        <list :style="listStyle">
            <cell class="border-cell"></cell>
            <cell class="cell" v-for="cell in lists">
                <wxc-pan-item
                        :url="cell.url"
                        @wxcPanItemPan="wxcPanItemPan">
                    <home-item :item-data="cell"></home-item>
                </wxc-pan-item>
            </cell>

        </list>
    </div>
</template>

<script>
    import {WxcPanItem} from 'weex-ui'
    import Banner from './Banner.vue'
    import HomeItem from './Home-item.vue'
    import Title from '../Title.vue'

    var modal = weex.requireModule('modal')
    export default {
        components: {Banner, WxcPanItem, HomeItem,Title},
        data() {
            return {
                listStyle: {},
                lists: [{
                    image: 'https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg',
                    imageText: '西安发团',
                    title: '卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游',
                    price: 666,
                    priceDesc: '月售58笔｜999+条评论',
                    url: 'https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675',
                    desc: [{
                        type: 'text',
                        value: '特价机票|班期:清明 3/27-4/2等',
                        theme: 'gray'
                    }],
                    tags: [{
                        type: 'tag',
                        value: '满100减20测试',
                        theme: 'yellow'
                    }]
                }]
            }
        },
        mounted() {
            this.lists = this.lists.concat(this.lists).concat(this.lists).concat(this.lists).concat(this.lists).concat(this.lists).concat(this.lists);
        },
        created() {
            // this.listStyle = {
            //     width: 750 + 'px',
            //     height: (this.contentheight - 390) + 'px'
            // }
        },
        props: ['contentheight','title'],
        methods:
            {
                wxcPanItemPan(e) {
                    modal.toast({
                        message: 'wxcPanItemPan',
                        duration: 0.3
                    })
                    if (Utils.env.supportsEBForAndroid()) {
                        this.$refs['wxc-tab-page'].bindExp(e.element);
                        modal.toast({
                            message: 'supportsEBForAndroid',
                            duration: 0.3
                        })
                    }
                }
            }
    }

</script>

<style scoped>
    .wxc-content {
        width: 750px;
        position: absolute;
        margin-top: 90px;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #f2f3f4;
    }

    list {
        width: 750px;
        position: absolute;
        background-color: #f2f3f4;
    }

    .border-cell {
        background-color: #f2f3f4;
        width: 750px;
        height: 24px;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: #e0e0e0;
    }

    .cell {
        background-color: #fdfdfd;
    }

</style>
