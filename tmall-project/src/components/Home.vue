<template>
    <div id="app">
        <div class="header" ref="abc">
            <div class="header-box1">
                <div @click="fun"  class="header-box3" :class={active3:isActive,active4:seen,act3:act}><img src="../images/wodetianmao/分类.png" alt=""></div>
                    <div class="header-box5" :class={active:isActive,act:act}>
                        <img src="../images/xx6.png" alt="" :class={active1:isActive1,act1:act}>
                        <div @click="fun2" style="text-align: left;" class="header-box4" :class={active2:isActive,act2:act}><img src="../images/wodetianmao/x1.png" alt=""> 搜索商品、品牌</div>
                    </div>
                    <template v-if="$store.state.seen">
                        <div @click="fun1" class="header-box3" :class={active6:isActive,active5:seen,act4:act} style="color: white;">登录</div>
                    </template>
                    <template v-else>
                        <div class="header-box3" :class={active6:isActive,active5:seen,act4:act} @click="fun3"><img src="../images/wodetianmao/我.png" alt=""></div>
                    </template>
            </div>
        </div>
        <div class="content" @scroll="menu" ref="bcd">
            <div class="biaoqian">
                <a href="https://suning.m.tmall.com/?refer=https%3A%2F%2Fwww.tmall.com%2F%3Fali_trackid%3D2%3Amm_26632258_3504122_55934697%3A1596589494_267_631372692%26clk1%3D28bf947415fa3cb1a0a21a2734ae11bd%26upsid%3D28bf947415fa3cb1a0a21a2734ae11bd%26bxsign%3Dtbk15965894940966dfb771d4f5dfca0777c3a27c71f219c&pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1">
                    <div class="biaoqian-div1">
                        <img src="../images/biaoqian/xx1.png" alt="">
                        <p>苏宁易购</p>
                    </div>
                </a>
                <a href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2">
                    <div class="biaoqian-div1">
                        <img src="../images/biaoqian/xx2.png" alt="">
                        <p>天猫超市</p>
                    </div>
                </a>
                <a href="https://pages.tmall.com/wow/jinkou/act/zhiyingchaoshi?from=zebra:offline">
                    <div class="biaoqian-div1">
                        <img src="../images/biaoqian/xx3.png" alt="">
                        <p>天猫国际</p>
                    </div>
                </a>
                <a href="https://jhs.m.taobao.com/">
                    <div class="biaoqian-div1">
                        <img src="../images/biaoqian/xx4.png" alt="">
                        <p>聚划算</p>
                    </div>
                </a>
                <div class="biaoqian-div1" @click="fun">
                    <img src="../images/biaoqian/xx5.png" alt="">
                    <p>分类</p>
                </div>
            </div>
            <div class="lunbo">
                <template>
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="item in arr" :key="item.a">
                            <a :href="item.a"><img :src="item.url" alt="" class="lunbo-img"></a>
                        </swiper-slide>
                        <!-- <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide> -->
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </template>
            </div>
            <h3>猜你喜欢</h3>
            <div class="item">
                <div class="item-div1" @click="jump1">
                    <div class="item-box1"><img src="../images/weinituijian-shouye/c1.jpg" alt=""></div>
                    <div class="item-box2"><p>百变小樱airpods Pro3</p><p>代保护套适用苹果无线蓝牙耳机套盒子壳可爱</p></div>
                    <div class="item-box3"><div>2元券</div></div>
                    <div class="item-box4">
                        <div class="item-box4-1">¥ 9.9</div>
                        <div class="item-box4-2">看相似</div>
                    </div>
                    <div class="item-div2">zestar</div>
                </div>
                <div class="item-div1" style="margin-right: 14px;"><a href="https://pages.tmall.com/wow/mit/act/download?firstModule=3&mmstat=tb_homepageprice&src=tb_homepageprice&spm=a211ue.11501597.new-recommend.dingkeng"><img class="libao" src="../images/weinituijian-shouye/x1.png" alt=""></a></div>
                
                <div class="item-div1" @click="jump2">
                    <div class="item-box1"><img src="../images/weinituijian-shouye/c2.jpg" alt=""></div>
                    <div class="item-box2"><p>鲸鲨公仔毛绒玩具生日</p><p>礼物靠垫抱枕</p></div>
                    <div class="item-box3"><div>2元券</div></div>
                    <div class="item-box4">
                        <div class="item-box4-1">¥ 9.9</div>
                        <div class="item-box4-2">看相似</div>
                    </div>
                    <div class="item-div2">zestar</div>
                </div>
                
                <div class="item-div1" @click="jump3" style="margin-right: 14px;">
                    <div class="item-box1"><img src="../images/weinituijian-shouye/c3.jpg" alt=""></div>
                    <div class="item-box2"><p>果酱夹心饼干多口味代</p><p>餐饼干小包装混合装散装早餐饼干整箱零食</p></div>
                    <div class="item-box3"><div>2元券</div></div>
                    <div class="item-box4">
                        <div class="item-box4-1">¥ 9.9</div>
                        <div class="item-box4-2">看相似</div>
                    </div>
                    <div class="item-div2">金冠</div>
                </div>
                <div class="item-div1" v-for="item in list" :key="item.img" style="margin-right: 10px;">
                    <div class="item-box1"><img :src="item.img" alt=""></div>
                    <div class="item-box2"><p>{{item.span1}}</p><p>{{item.span2}}</p></div>
                    <div class="item-box3"><div>2元券</div></div>
                    <div class="item-box4">
                        <div class="item-box4-1">{{item.money}}</div>
                        <div class="item-box4-2">看相似</div>
                    </div>
                    <div class="item-div2">{{item.lable}}</div>
                </div>
                <!-- <div class="item-div1" style="border: none;"></div>
                <div class="item-div1" style="margin-right: 14px;border: none;"></div> -->
                
            </div>    
        </div>
        <div class="top" :class={top1:seen1} @click="top">
            <img src="../images/wodetianmao/返回顶部.png" alt="">
            <span>顶部</span>
        </div>
        <div class="mask" v-if="seen2">
            <div class="triangle"></div>
            <div class="mask-box">
                <div class="mask-head">
                    <div>我的天猫</div>
                    <div @click="back"><img src="../images/wodetianmao/删除.png" alt="" class="mask-img"></div>
                </div>
                <div class="mask-content">
                    <div class="mask-div">
                        <img src="../images/wodetianmao/天猫-01.png" alt="">
                        <p>天猫客户端</p>
                    </div>
                    <div class="mask-div">
                        <img src="../images/wodetianmao/新人有礼.png" alt="">
                        <p>新人有礼</p>
                    </div>
                    <div class="mask-div" @click="shopfun">
                        <img src="../images/wodetianmao/购物车.png" alt="">
                        <p>购物车</p>
                    </div>
                    <div class="mask-div">
                        <img src="../images/wodetianmao/收藏.png" alt="">
                        <p>收藏宝贝</p>
                    </div>
                    <div class="mask-div">
                        <img src="../images/wodetianmao/店铺.png" alt="">
                        <p>收藏店铺</p>
                    </div>
                    <div class="mask-div">
                        <img src="../images/wodetianmao/yly_订单.png" alt="">
                        <p>全部订单</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false
                },
                loop:true,
                // Some Swiper option/callback...
            },
                    visible: false ,
            arr:[
                {
                    url:require("../images/lunbotu/x1.jpg"),
                    a:"https://pages.tmall.com/wow/a/act/tmall/tmc/27498/wupr?trackInfo=2017041212100101;97233372484;358315;588144867628;3;null;1007.15052.105003.999999999999999;986a07c0-eca2-4f69-879f-2be0aefcb237;3;0;null;123888;66049;null_null_0.5_null_null_e:1007.15052.105003.999999999999999;986a07c0-eca2-4f69-879f-2be0aefcb237;0&item_id=588144867628&pvid=986a07c0-eca2-4f69-879f-2be0aefcb237&pos=3&activity_id=358315&wh_pid=other-205380&disableNav=YES&acm=2017041213.1003.1.2368046&scm=1003.1.2017041212.OTHER_0_8435365&spm=a211ue.11501597.banner.6"
                },
                {
                    url:require("../images/lunbotu/x2.jpg"),
                    a:"https://xizhilangsp.m.tmall.com/?pos=1&acm=&scm=1049.lyg_turing_-1_335.156296.156296-THJH_236970&spm=a211ue.11501597.banner.2"
                },
                {
                    url:require("../images/lunbotu/x3.jpg"),
                    a:"https://market.m.taobao.com/apps/market/shop/simpleshop.html?wh_weex=true&shopId=397916846&sellerId=3189770892&spm=a2141.7631565.backup.0&_inNestedEmbed=true&inWeexShop=true&ignoreShopHeadEvent=false&weexShopTransparentBG=true&_page_inside_embed_=true&_page_home_isweex_=true&useIframeInWeb=false"
                },
                {
                    url:require("../images/lunbotu/x1.png"),
                    a:"https://pages.tmall.com/wow/mit/act/download?mmstat=tb_homepagejiao&src=tb_homepage&pos=1&acm=201810194.1003.2.7697690&scm=1003.2.201810194.OTHER_1595745033777_7697690&firstModule=7&spm=a211ue.11501597.banner.1"
                }
            ],
            list:[
                {
                img:require("../images/weinituijian-shouye/c2.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c3.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c4.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c5.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c6.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c7.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c8.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c9.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c10.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c11.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c2.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c3.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c4.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c5.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c6.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c7.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c8.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c9.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c10.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c11.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },{
                img:require("../images/weinituijian-shouye/c2.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c3.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c4.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c5.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c6.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c7.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c8.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c9.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c10.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c11.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },{
                img:require("../images/weinituijian-shouye/c2.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c3.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c4.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c5.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c6.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c7.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c8.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c9.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                },
                {
                img:require("../images/weinituijian-shouye/c10.jpg"),
                span1:"鲸鲨公仔毛绒玩具生日",
                span2:"礼物靠垫抱枕",
                money:"¥ 39",
                lable:"怡米儿"
                },
                {
                img:require("../images/weinituijian-shouye/c11.jpg"),
                span1:"果酱夹心饼干多口味代",
                span2:"餐饼干小包装混合装散装早餐饼干整箱零食",
                money:"¥ 9.9",
                lable:"金冠"
                }
            ],
            scrollTop:0,
            seen:true,
            isActive:false,
            isActive1:false,
            act:false,
            seen1:true,
            num:0,
            seen2:false,
        }
    },
    methods:{
        menu(event){
            console.log(event);
            this.scrollTop = event.target.scrollTop;
                    if(this.num<this.scrollTop){
                        this.seen1=true;
                    }else{
                        this.seen1=false;
                    }
                    this.num=this.scrollTop;
                    if(this.scrollTop==0){
                        this.seen1=true;
                    }
                    if(this.scrollTop>105){
                        this.seen=false;
                        this.$refs.abc.style.height=`70px`;
                        this.$refs.bcd.style.top=`70px`;
                        this.isActive=true;
                        this.isActive1=true;
                        this.act=false;
                    }
                    if(this.scrollTop<105){
                        this.seen=true;
                        this.$refs.abc.style.height=`105px`;
                        this.$refs.bcd.style.top=`105px`;
                        this.isActive=false;
                        this.isActive1=false;
                        this.act=true;
                    }
        },
        fun(){
            this.$router.push({
                path:"/classify"
            })
        },
        fun1(){
            this.$router.push({
                path:"/login"
            })
        },
        fun2(){
            this.$router.push({
                path:"/discover"
            })
        },
        fun3(){
            this.seen2=true
        },
        back(){
            this.seen2=false
        },
        jump1(){
            this.$router.push({
                path:"/detail1"
            })
        },
        jump2(){
            this.$router.push({
                path:"/detail2"
            })
        },
        jump3(){
            this.$router.push({
                path:"/detail3"
            })
        },
        shopfun(){
            this.$router.push({
                path:"/shopping"
            })
        },
        top(){
           this.$refs.bcd.scrollTop=0;
           console.log(this.$refs.bcd.scrollTop)
        }
    }
}
</script>
<style scoped>
    a{
        color: black;
        text-decoration: none;
    }
    html,#app{
        width: 100%;
        height: 100%;
    }
    #app{
        display: flex;
        flex-direction: column;
        height: 1000px;
    }
    /* 头部样式 */
    .header{
        width: 100%;
        height: 105px;
        display: flex;
        background-color: rgb(255,0,54);
        flex-direction: column;
        position: fixed;
        top: 0px;
        z-index: 10;
        /* flex-shrink:0; */
    }
    .header-box1{
        width: 90%;
        /* height: 50px; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 10px 0px 10px;
        position: relative;
    }
    .header-box2{
        position: absolute;
        top: 40px;
        width: 100%;
        padding: 10px;
    }
    .header-box3{
        width: 10%;
        z-index: 3;
    }

    .header-box5{
        width: 100%;
        text-align: center;
        position: absolute;
        top:15px;
    }
    .header-box3>img{
        width: 30px;
    }
    .header-box4>img{
        width: 18px;
        vertical-align: middle;
        margin-right: 10px;
    }
    .header-box5>img{
        width: 105px;
        /* vertical-align: middle; */
        margin-bottom: 10px;
    }
    .header-box4{
        width: 90%;
        /* height: 20px; */
        background-color: white;
        /* line-height: 10px; */
        padding: 10px;
        color: rgb(173, 173, 173);
        border-radius: 5px;
        font-size: 15px;
        margin-left: 15px;
    }
    /* 中间内容样式 */
    .content{
        display: flex;
        height: 100%;
        /* background-color: rgb(5, 206, 21); */
        width: 100%;
        position: relative;
        top: 100px;
        flex-direction: column;
        /* padding: 0px 10px; */
        overflow-y :auto;
    }
    .biaoqian{
        width: 95%;
        height: 100px;
        /* border: 1px solid black; */
        flex-shrink:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        margin-left: 10px;
    }
    .biaoqian img{
        width: 50px;
        margin-bottom: 10px;
    }
    .biaoqian-div1{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .lunbo{
        width: 95%;
        height: 150px;
        flex-shrink:0;
        margin-left: 10px;
    }
    .lunbo-img{
        width: 100%;
        height: 150px;
    }
    h3{
        margin-top: 15px;
        margin-left: 10px;
    }
    .item{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: 10px;
    }
    .item-div1{
        width: 46%;
        height: 280px;
        border: 1px solid rgb(236, 236, 236);
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        position: relative;
    }
    .libao{
        width: 100%;
        height: 280px;
    }
    .item-box1{
        width: 100%;
        height: 62%;
        flex-shrink:0;
        background-color: rgb(247,247,247);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item-box1>img{
        width: 150px;
    }
    .item-box2{
        width: 90%;
        height: 15%;
        flex-shrink:0;
        /* background-color: blueviolet; */
        padding: 0px 10px;
        margin-top: 10px;
        font-size: 16px;
        color: rgb(100, 100, 100);
    }
    .item-box2>p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
    .item-box3{
        width: 90%;
        height: 7%;
        /* background-color: chartreuse; */
        padding: 0px 10px;
        color: rgb(255, 25, 75);
        font-size: 12px;
    }
    .item-box3>div{
        border: 1px solid rgb(255, 25, 75);
        width: 35px;
        height: 15px;
        text-align: center;
        line-height: 15px;
        margin-top: 5px;
    }
    .item-box4{
        /* background-color: coral; */
        width: 90%;
        height: 12%;
        display: flex;
        padding: 0px 10px;
        align-items: center;
        justify-content: space-between;
    }
    .item-box4-1{
        color: red;
        font-weight: bolder;
    }
    .item-box4-2{
        width: 60px;
        height: 30px;
        border-radius: 20px;
        background-color: rgba(255, 25, 75,0.1);
        text-align: center;
        line-height: 30px;
        color: rgb(250, 25, 36);
        font-size: 14px;
    }
    .item-div2{
        width: 45px;
        height: 20px;
        font-size: 12px; 
        position: absolute;
        color: white;
        background-color: rgb(136, 163, 192);
        text-align: center;
        line-height: 18px;
        top: 165px;
        left: 10px;
    }
    @keyframes myfirst{
        from{
            width: 100%;
            /* transform: scaleX(1); */
            top:15px;
        }
        to{
            width: 80%;
            /* transform: scaleX(0.8); */
            top: 8px;
        }
    }
    @keyframes mytwo{
        from{
            transform: scale(1);
            top: 10px;
            left: 110px;
        }
        to{
            transform: scale(0);
            top: -20px;
            left: 110px;
        }
    }
    @keyframes mythree{
        from{
            top: 10px;
        }
        to{
            top: 20px;
        }
    }
    .active,.active2{
        width: 80%;
        text-align: center;
        position: absolute;
        /* top:-10px; */
        animation: myfirst 0.5s;
    }
    
    .active1{
        animation: mytwo 0.5s;
        position: absolute;
    }
    .active4{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .active5{
        position: absolute;
        top: 10px;
        right: -5px;
    }
    .active3{
        animation: mythree 0.5s;
        position: absolute;
        top: 20px;
        left: 15px;
    }
    .active6{
        animation: mythree 0.5s;
        position: absolute;
        top: 20px;
        right: -5px;
    }
    @keyframes myfirst1{
        from{
            width: 80%;
            /* transform: scaleX(1); */
            top:8px;
        }
        to{
            width:93%;
            /* transform: scaleX(0.8); */
            top: 15px;
        }
    }
    @keyframes mytwo1{
        from{
            transform: scale(0);
            top: -20px;
            left: 110px;
        }
        to{
            transform: scale(1);
            top: 10px;
            left: 110px;
        }
    }
    @keyframes mythree1{
        from{
            top: 20px;
        }
        to{
            top: 10px;
        }
    }
    .act{
        width: 100%;
        text-align: center;
        position: absolute;
        top:15px;
        animation: myfirst1 0.5s;
    }
    .act1{
        width: 130px;
        /* vertical-align: middle; */
        margin-bottom: 10px;
        animation: mytwo1 0.5s;
    }
    .act2{
        width: 90%;
        background-color: white;
        padding: 10px;
        color: rgb(173, 173, 173);
        border-radius: 5px;
        font-size: 15px;
        margin-left: 15px;
        animation: myfirst1 0.5s;
    }
    .act3{
        position: absolute;
        top: 10px;
        left: 15px;
        animation: mythree1 0.5s;
    }
    .act4{
        position: absolute;
        top: 10px;
        right: -5px;
        animation: mythree1 0.5s;
    }
    .top{
            position: fixed;
            bottom: 60px;
            right: 30px;
            width: 45px;
            height: 45px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 5;
            font-size: 10px;
            border-radius: 100%;
            border: 1px solid rgb(120, 120, 120);
            background-color: white;
            color: rgb(120, 120, 120);
        }
        .top>img{
            width: 25px;
        }
        .top1{
            display: none;
        }
        .mask{
            position: fixed;
            top: 0px;
            z-index: 10;
            width: 100%;
            height: 100%;
            background-color: rgba(102,102,102,0.6);
        }
        .mask-box{
            position: relative;
            top: 50px;
            width: 100%;
            height: 33%;
            background-color:  rgb(229, 229, 229);
        }
        .mask-head{
            width: 100%;
            height: 35px;
            /* background-color: royalblue; */
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .mask-head>div{
            margin: 0px 10px;
        }
        .mask-content{
            width: 100%;
            height: 240px;
            display: flex;
            flex-wrap: wrap;
            background-color: white;
        }
        .mask-div{
            width: 33%;
            height: 50%;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid rgb(229, 229, 229);
            border-bottom: 1px solid rgb(229, 229, 229);
            flex-shrink: 0;
        }
        .mask-div>img{
            width: 30px;
        }
        .mask-img{
            width: 30px;
            margin-right: 17px;
        }
        .triangle{
            position: absolute;
            top: 30px;
            right: 32px;
            width: 0px;
            height: 0px;
            border: 10px solid;
            border-color: transparent  transparent  rgb(229, 229, 229) transparent ;
        }
        
</style>