<template>
    <div class="wxc-content">
        <wxc-ep-slider :slider-id="sliderId"
                       :card-length='cardInfoList.length'
                       :card-s="cardSize"
                       :select-index="2"
                       :auto-play="true"
                       style="padding-top: 40px"
                       @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

            <!--自动生成demo-->
            <wxc-pan-item v-for="(v,index) in cardInfoList"
                          :key="index"
                          :slot="`card${index}_${sliderId}`"
                          class="slider">
                <image style="width:400px;height:300px"
                       :src="v.imgSrc"></image>
                <text style="font-size: 14px;color: white;position: absolute;right: 0; top: auto;bottom: 0;width:400px;height: auto;background-color: #635147">
                    {{v.desc}}
                </text>
            </wxc-pan-item>
        </wxc-ep-slider>
    </div>
</template>

<script>
    import {WxcEpSlider,WxcPanItem} from 'weex-ui';

    export default {
        data() {
            return {
                sliderId: 1,
                cardSize: {
                    width: 400,
                    height: 300,
                    spacing: 0,
                    scale: 0.8
                },
                cardInfoList: [

                    {
                        imgSrc: 'http://n.sinaimg.cn/front/w600h480/20180311/IC-W-fxpwyhx0930283.jpg',
                        desc: '新闻联播：十三届全国人大一次会议举行第三次全体会议'
                    },
                    {
                        imgSrc: 'http://n.sinaimg.cn/news/transform/w550h309/20180312/Nvb1-fyscsmu6872668.jpg',
                        desc: '李鸿忠：薄熙来、孙政才和王立军，达到了领导干部违法犯罪的极致'
                    },
                    {
                        imgSrc: 'http://n.sinaimg.cn/news/crawl/w550h483/20180312/___O-fyscsmu5706549.jpg',
                        desc: '军方代表委员:宪法修正案通过是党心军心民心所向'
                    },
                    {
                        imgSrc: 'http://n.sinaimg.cn/news/transform/w447h357/20180311/Vp0W-fxpwyhx0913263.png',
                        desc: '党的总书记的任期限制应该写进党章？法工委回应'
                    },
                    {
                        imgSrc: 'http://n.sinaimg.cn/ent/transform/w477h383/20180312/dBVd-fyscsmu6724111.jpg',
                        desc: '赵薇生日黄晓明晒小燕子剧照：镇店之宝生日快乐'
                    }

                ],
            }
        },
        components: {WxcEpSlider,WxcPanItem},
        methods: {
            wxcEpSliderCurrentIndexSelected(e) {
                const index = e.currentIndex;
                console.log('slider-index', index);
            }
        }
    }
</script>

<style scoped>
    .wxc-content {
        width: 750px;
        position:absolute;
        margin-top: 90px;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #f2f3f4;
    }


</style>