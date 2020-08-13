<template>
    <div id="page">
        <div class="header">
            <div class="header-div1">
                <img src="../images/wodetianmao/back.png" alt="" @click="back">
            </div>
            <div class="header-div2">
                <div class="header-div3">
                    <img src="../images/wodetianmao/x1.png" alt="">
                    <span>搜索商品/品牌</span>
                </div>
            </div>
        </div>
        <!-- <div class="content"> -->
            <div class="lift">
                <div class="lift-div" :class={active:seen1} @click="fun1"><span>流行趋势</span></div>
                <div class="lift-div" :class={active:seen2} @click="fun2"><span>天猫国际</span></div>
                <div class="lift-div" :class={active:seen3} @click="fun3"><span>女装</span></div>
                <div class="lift-div" :class={active:seen4} @click="fun4"><span>女鞋</span></div>
                <div class="lift-div" :class={active:seen5} @click="fun5"><span>男装</span></div>
                <div class="lift-div" :class={active:seen6} @click="fun6"><span>男鞋</span></div>
                <div class="lift-div" :class={active:seen7} @click="fun7"><span>内衣</span></div>
                <div class="lift-div" :class={active:seen8} @click="fun8"><span>母婴</span></div>
                <div class="lift-div" :class={active:seen9} @click="fun9"><span>手机</span></div>
                <div class="lift-div" :class={active:seen10} @click="fun10"><span>数码</span></div>
                <div class="lift-div" :class={active:seen11} @click="fun11"><span>家电</span></div>
                <div class="lift-div" :class={active:seen12} @click="fun12"><span>美妆</span></div>
                <div class="lift-div" :class={active:seen13} @click="fun13"><span>箱包</span></div>
                <div class="lift-div" :class={active:seen14} @click="fun14"><span>运动</span></div>
                <div class="lift-div" :class={active:seen15} @click="fun15"><span>户外</span></div>
                <div class="lift-div" :class={active:seen16} @click="fun16"><span>家装</span></div>
                <div class="lift-div" :class={active:seen17} @click="fun17"><span>家纺</span></div>
                <div class="lift-div" :class={active:seen18} @click="fun18"><span>居家百货</span></div>
                <div class="lift-div" :class={active:seen19} @click="fun19"><span>鲜花宠物</span></div>
                <div class="lift-div" :class={active:seen20} @click="fun20"><span>配饰</span></div>
                <div class="lift-div" :class={active:seen21} @click="fun21"><span>食品</span></div>
                <div class="lift-div" :class={active:seen22} @click="fun22"><span>生鲜</span></div>
                <div class="lift-div" :class={active:seen23} @click="fun23"><span>汽车摩托</span></div>
                <div class="lift-div" :class={active:seen24} @click="fun24"><span>医药</span></div>
                <div class="lift-div" :class={active:seen25} @click="fun25"><span>图书</span></div>
                <div class="lift-div" :class={active:seen26} @click="fun26"><span>通信</span></div>
                <div class="lift-div" :class={active:seen27} @click="fun27"><span>洗护</span></div>
                <div class="lift-div" :class={active:seen28} @click="fun28"><span>乐器</span></div>
            </div>
            <div class="right">
                <classify-detail :num="num"></classify-detail> 
            </div>
        <!-- </div> -->
    </div>
</template>
<script>
import ClassifyDetail from "./ClassifyDetail.vue";
export default {
    data: function() {
        return {
            num:0,
            seen1:true,
            seen2:false,
            seen3:false,
            seen4:false,
            seen5:false,
            seen6:false,
            seen7:false,
            seen8:false,
            seen9:false,
            seen10:false,
            seen11:false,
            seen12:false,
            seen13:false,
            seen14:false,
            seen15:false,
            seen16:false,
            seen17:false,
            seen18:false,
            seen19:false,
            seen20:false,
            seen21:false,
            seen22:false,
            seen23:false,
            seen24:false,
            seen25:false,
            seen26:false,
            seen27:false,
            seen28:false,
        }
    },
    
    components:{
        "classify-detail":ClassifyDetail,
    },
    methods:{
        fun1(){
            this.num=0;
            this.seen1=true;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun2(){
            this.num=1;
            this.seen1=false;
            this.seen2=true;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun3(){
            this.num=2;
            this.seen1=false;
            this.seen2=false;
            this.seen3=true;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun4(){
            this.num=3;
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=true;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun5(){
            this.num=4;
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=true;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun6(){
            this.num=5;
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=true;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun7(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=true;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun8(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=true;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun9(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=true;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun10(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=true;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun11(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=true;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun12(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=true;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun13(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=true;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun14(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=true;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun15(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=true;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun16(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=true;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun17(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=true;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun18(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=true;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun19(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=true;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun20(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=true;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun21(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=true;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun22(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=true;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun23(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=true;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun24(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=true;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun25(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=true;
            this.seen26=false;
            this.seen27=false;
            this.seen28=false;
        },
        fun26(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=true;
            this.seen27=false;
            this.seen28=false;
        },
        fun27(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=true;
            this.seen28=false;
        },
        fun28(){
            this.seen1=false;
            this.seen2=false;
            this.seen3=false;
            this.seen4=false;
            this.seen5=false;
            this.seen6=false;
            this.seen7=false;
            this.seen8=false;
            this.seen9=false;
            this.seen10=false;
            this.seen11=false;
            this.seen12=false;
            this.seen13=false;
            this.seen14=false;
            this.seen15=false;
            this.seen16=false;
            this.seen17=false;
            this.seen18=false;
            this.seen19=false;
            this.seen20=false;
            this.seen21=false;
            this.seen22=false;
            this.seen23=false;
            this.seen24=false;
            this.seen25=false;
            this.seen26=false;
            this.seen27=false;
            this.seen28=true;
        },
        back(){
                this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
    #page{
        width: 100%;
        height: 100%;
    }
    .header{
        display: flex;
        position: fixed;
        width: 100%;
        height: 70px;
        /* background-color: blue; */
        align-items: center;
        /* justify-content: center; */
        background-color: white;
        z-index: 5;
    }
    .header-div1{
        width: 50px;
        height: 70px;
        flex-shrink:0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header-div1>img{
        width: 20px;
    }
    .header-div2{
        flex-grow: 1;
    }
    .header-div3{
        display: flex;
        align-items: center;
        width: 90%;
        height: 30px;
        border-radius: 15px;
        /* justify-content: center; */
        color: rgb(153,153,153);
        background-color: rgb(242,242,242);
        padding-left: 20px;
    }
    .header-div3>img{
        width: 15px;
        margin-right: 5px;
        /* vertical-align: middle; */
    }
   
    .lift{
        position: fixed;
        top: 70px;
        left: 0px;
        width: 18%;
        height: 91%;
        font-size: 14px;
        flex-shrink:0;
        /* overflow: hidden; */
        overflow-y: auto;
    }
    .lift-div{
        width: 100%;
        height: 70px;
        border-bottom: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(247, 247, 247);
    }
    .lift-div>span{
        display: inline-block;
        width: 40px;
        height: 40px;
        /* background-color: violet; */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active{
        color: red;
        border-left: 3px solid red;
        background-color: white;
    }
    .right{
        position:absolute;
        top: 70px;
        right: 0px;
        width: 82%;
        height: 100%;
        /* overflow: hidden; */
        /* overflow-y: auto; */
        /* height: 100%; */
        /* background-color: violet; */
    }
</style>