<template>
    <div class="home-item">
        <image :src="itemData.image"
               class="item-image"
               resize="cover"></image>
        <div class="image-desc" v-if="itemData.imageText">
            <text class="image-text">{{itemData.imageText}}</text>
        </div>

        <div class="item-content">
            <text class="item-text" v-if="isTitleString">{{itemData.title}}</text>
            <wxc-special-rich-text v-else :config-list="itemData.title"></wxc-special-rich-text>
            <wxc-rich-text :config-list="itemData.desc"></wxc-rich-text>
            <wxc-rich-text :config-list="itemData.tags"></wxc-rich-text>


            <div class="item-price">
                <wxc-rich-text :config-list="itemData.priceDesc"></wxc-rich-text>
                <div class="price-num">
                    <text class="price">￥{{itemData.price}}</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {WxcRichText, WxcSpecialRichText, Utils} from 'weex-ui';

    export default {
        name: "home-item",
        components: {WxcRichText, WxcSpecialRichText},
        data() {
            return {}
        },
        props: ['itemData'],
        mounted() {
        },
        computed: {
            isTitleString() {
                return Utils.isString(this.itemData.title);
            }
        }
    }
</script>

<style scoped>
    .home-item {
        width: 750px;
        height: 246px;
        flex-direction: row;
    }

    .item-image {
        width: 198px;
        height: 198px;
        margin-top: 24px;
        margin-left: 24px;
        margin-bottom: 24px;
        margin-right: 24px;
    }

    .image-desc {
        position: absolute;
        left: 24px;
        top: 186px;
        width: 198px;
        height: 36px;
        background-color: rgba(0, 0, 0, .8);
        align-items: center;
        justify-content: center;
    }

    .image-text {
        font-size: 24px;
        color: #ffffff;
    }

    .item-content {
        flex: 1;
        justify-content: space-between;
        border-bottom-color: #e0e0e0;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-top: 24px;
        padding-right: 24px;
        padding-bottom: 18px;
    }

    .item-text {
        font-size: 28px;
        line-height: 40px;
        color: #333333;
        lines: 2;
        text-overflow: ellipsis;
    }

    .item-price {
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        height: 36px;
    }

    .price-num {
        flex-direction: row;
        align-items: center;
    }

    .price {
        color: #FF5E00;
        font-size: 36px;
        line-height: 40px;
    }

</style>