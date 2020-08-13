<template>

        <div id="app">
        <div class="page">
            <div class="top-box">
                <div class="top-box1">
                    <div class="item1" @click="back">
                        <img src="../images/shopping/2.png" alt="" >
                    </div>
                    <div class="item1 item2"><span>购物车({{$store.state.n3}})</span></div>
                    <div class="item1"></div>
                </div>

                <div class="top-box2" v-show="$store.state.showDiv1">
                    <div class="box2-item1">
                        <div class="box-little" @click='que1'>
                            <template v-if="$store.state.showYuan1">
                                <img src="../images/shopping/yuan.png" alt="" class="little-img1">
                            </template>
                            <template v-else>
                                <img src="../images/shopping/que.png" alt="" class="little-img1">
                            </template>
                            <img src="../images/shopping/tm.png" alt="" class="little-img2">
                        </div>
                        <div class="box-little2">
                            <span style="padding-right: 8px;">千机派数码专营店</span>
                            <img src="../images/shopping/3.png" alt="" class="little-img2" style="height: 15px;">
                        </div>
                        <div class="box-little3" style="padding-right: 12px; border-right: 0.75px solid #e7e7e7;">
                            <div>领券</div>
                        </div>
                        <template v-if="bianSeen1">
                            <div class="box-little3" style="padding-left: 12px;" @click="bian1">
                                编辑
                            </div>
                        </template>
                        <template v-else>
                            <div class="box-little3" style="padding-left: 12px;" @click="wan1">
                                完成
                            </div>
                        </template>

                    </div>

                    <div class="box2-item2">
                        <div class="box2-little2">
                            <div class="little2-small"></div>
                            <div class="little2-small" style="width: 18%;">
                                <img src="../images/shopping/jian.png" alt="" style="height: 18px;">
                            </div>
                            <div class="little2-small2">
                                <div>
                                    <span>8.6-8.30每满300减30，可跨店</span>
                                </div>
                                <div class="small-box">
                                    <span style="color: #f50;">凑单</span>
                                    <img src="../images/shopping/3.png" alt="" style="height: 15px;">
                                </div>
                            </div>
                            <div class="little2-small3">
                            </div>
                        </div>
                        <div class="big-div">
                            <div class="box2-little3" @touchstart="moveFun" @touchend="moveFun2" ref="moveDiv">
                                <div class="little3-small" @click='que1'>
                                    <template v-if="$store.state.showYuan1">
                                        <img src="../images/shopping/yuan.png" alt="" style="height: 23px;">
                                    </template>
                                    <template v-else>
                                        <img src="../images/shopping/que.png" alt="" style="height: 23px;">
                                    </template>
                                </div>
                                <div class="little3-small2">
                                    <img src="../images/shopping/c1.jpg" alt="" style="height: 100px;">
                                </div>
                                <div class="little3-small3">
                                    <div class="small3-item1">百变小樱airpods Pro3代保护套适用苹果无线蓝牙耳机套盒子壳可爱</div>
                                    <div class="small3-item2">
                                        <div>Pro三代专用 小樱鸟头呼唤杖</div>
                                        <div class="small3-img"><img src="../images/shopping/xia.png" alt=""
                                                style="height: 15px;">
                                        </div>
                                    </div>
                                    <div class="small3-item3">
                                        <div style="color: #f60; font-size: 0;">
                                            <span style="font-size: 12px;">￥</span>
                                            <span style="font-size: 14px;">19.8</span>
                                        </div>
                                        <div class="mins-box">
                                            <img src="../images/shopping/minus.png" alt="" style="height: 14px;" @click=" minus()">
                                            <input type="text" style="text-align: center;"  v-model="$store.state.count">
                                            <img src="../images/shopping/plus.png" alt="" style="height: 18px;" @click=" plus()">
                                        </div>
                                    </div>
                                </div>
                                <div class="little2-small3">
                                </div>
                                <div class="del-box" @click="delDiv">
                                    <span>删</span><span>除</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="top-box2" v-show="$store.state.showDiv2">
                    <div class="box2-item1">
                        <div class="box-little" @click='que2'>
                            <template v-if="$store.state.showYuan2">
                                <img src="../images/shopping/yuan.png" alt="" class="little-img1">
                            </template>
                            <template v-else>
                                <img src="../images/shopping/que.png" alt="" class="little-img1">
                            </template>
                            <img src="../images/shopping/tm.png" alt="" class="little-img2">
                        </div>
                        <div class="box-little2">
                            <span style="padding-right: 8px;">怡米儿旗舰店</span>
                            <img src="../images/shopping/3.png" alt="" class="little-img2" style="height: 15px;">
                        </div>
                        <div class="box-little3" style="padding-right: 12px; border-right: 0.75px solid #e7e7e7;">
                            <div>领券</div>
                        </div>
                        <template v-if="bianSeen2">
                            <div class="box-little3" style="padding-left: 12px;" @click="bian2">
                                编辑
                            </div>
                        </template>
                        <template v-else>
                            <div class="box-little3" style="padding-left: 12px;" @click="wan2">
                                完成
                            </div>
                        </template>
                    </div>

                    <div class="box2-item2">
                        <div class="box2-little2">
                            <div class="little2-small"></div>
                            <div class="little2-small" style="width: 18%;">
                                <img src="../images/shopping/jian.png" alt="" style="height: 18px;">
                            </div>
                            <div class="little2-small2">
                                <div>
                                    <span>8.6-8.30每满300减30，可跨店</span>
                                </div>
                                <div class="small-box">
                                    <span style="color: #f50;">凑单</span>
                                    <img src="../images/shopping/3.png" alt="" style="height: 15px;">
                                </div>
                            </div>
                            <div class="little2-small3">
                            </div>
                        </div>
                        <div class="big-div">
                            <div class="box2-little3" @touchstart="moveFun3" @touchend="moveFun4" ref="moveDiv2">
                                <div class="little3-small" @click='que2'>
                                    <template v-if="$store.state.showYuan2">
                                        <img src="../images/shopping/yuan.png" alt="" style="height: 23px;">
                                    </template>
                                    <template v-else>
                                        <img src="../images/shopping/que.png" alt="" style="height: 23px;">
                                    </template>
                                </div>
                                <div class="little3-small2">
                                    <img src="../images/shopping/c2.jpg" alt="" style="height: 100px;">
                                </div>
                                <div class="little3-small3">
                                    <div class="small3-item1">独角鲸公仔毛绒玩具卡通鲸鲨布娃娃抱枕鲸鱼大靠垫生日礼物女创意</div>
                                    <div class="small3-item2">
                                        <div>粉色独角鲸 60厘米</div>
                                        <div class="small3-img"><img src="../images/shopping/xia.png" alt=""
                                                style="height: 15px;">
                                        </div>
                                    </div>
                                    <div class="small3-item3">
                                        <div style="color: #f60; font-size: 0;">
                                            <span style="font-size: 12px;">￥</span>
                                            <span style="font-size: 14px;">39</span>
                                        </div>
                                        <div class="mins-box">
                                            <img src="../images/shopping/minus.png" alt="" style="height: 14px;"  @click=" minus1()" >
                                            <input type="text" style="text-align: center;" v-model="$store.state.count1">
                                            <img src="../images/shopping/plus.png" alt="" style="height: 18px;"  @click=" plus1()">
                                        </div>
                                    </div>
                                </div>
                                <div class="little2-small3">
                                </div>
                                <div class="del-box" @click="delDiv2">
                                    <span>删</span><span>除</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="top-box2" v-show="$store.state.showDiv3" style="margin-bottom: 10px;">
                    <div class="box2-item1">
                        <div class="box-little" @click='que3'>
                            <template v-if="$store.state.showYuan3">
                                <img src="../images/shopping/yuan.png" alt="" class="little-img1">
                            </template>
                            <template v-else>
                                <img src="../images/shopping/que.png" alt="" class="little-img1">
                            </template>

                            <img src="../images/shopping/tm.png" alt="" class="little-img2">
                        </div>
                        <div class="box-little2">
                            <span style="padding-right: 8px;">梦云食品专营店</span>
                            <img src="../images/shopping/3.png" alt="" class="little-img2" style="height: 15px;">
                        </div>
                        <div class="box-little3" style="padding-right: 12px; border-right: 0.75px solid #e7e7e7;">
                            <div>领券</div>
                        </div>
                        <template v-if="bianSeen3">
                            <div class="box-little3" style="padding-left: 12px;" @click="bian3">
                                编辑
                            </div>
                        </template>
                        <template v-else>
                            <div class="box-little3" style="padding-left: 12px;" @click="wan3">
                                完成
                            </div>
                        </template>
                    </div>

                    <div class="box2-item2">
                        <div class="box2-little2">
                            <div class="little2-small"></div>
                            <div class="little2-small" style="width: 18%;">
                                <img src="../images/shopping/jian.png" alt="" style="height: 18px;">
                            </div>
                            <div class="little2-small2">
                                <div>
                                    <span>8.6-8.30每满300减30，可跨店</span>
                                </div>
                                <div class="small-box">
                                    <span style="color: #f50;">凑单</span>
                                    <img src="../images/shopping/3.png" alt="" style="height: 15px;">
                                </div>
                            </div>
                            <div class="little2-small3">
                            </div>
                        </div>
                        <div class="big-div">
                            <div class="box2-little3" @touchstart="moveFun5" @touchend="moveFun6" ref="moveDiv3">
                                <div class="little3-small" @click='que3'>
                                    <template v-if="$store.state.showYuan3">
                                        <img src="../images/shopping/yuan.png" alt="" style="height: 23px;">
                                    </template>
                                    <template v-else>
                                        <img src="../images/shopping/que.png" alt="" style="height: 23px;">
                                    </template>
                                </div>
                                <div class="little3-small2">
                                    <img src="../images/shopping/c3.jpg" alt="" style="height: 100px;">
                                </div>
                                <div class="little3-small3">
                                    <div class="small3-item1">果酱夹心饼干多口味代餐饼干小包装混合装散装早餐饼干整箱零食</div>
                                    <div class="small3-item2">
                                        <div>草莓味10袋</div>
                                        <div class="small3-img"><img src="../images/shopping/xia.png" alt=""
                                                style="height: 15px;">
                                        </div>
                                    </div>
                                    <div class="small3-item3">
                                        <div style="color: #f60; font-size: 0;">
                                            <span style="font-size: 12px;">￥</span>
                                            <span style="font-size: 14px;">9.9</span>
                                        </div>
                                        <div class="mins-box">
                                            <img src="../images/shopping/minus.png" alt="" style="height: 14px;"  @click="minus2()">
                                            <input type="text" style="text-align: center;"  v-model="$store.state.count2">
                                            <img src="../images/shopping/plus.png" alt="" style="height: 18px;"  @click=" plus2()">
                                        </div>
                                    </div>
                                </div>
                                <div class="little2-small3">
                                </div>
                                <div class="del-box" @click="delDiv3">
                                    <span>删</span><span>除</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="kong-box" style="width:100%;height:105px;background-color: #fff;">

                </div>

            </div>

 
                <div class="mask"  v-show="showMask1">
                <div class="que-mask">
                    <div style="padding: 15px 5px; font-size: 14px;">确定要删除这个宝贝吗？</div>
                    <div class="mask-box" style="padding: 10px 5px;font-size: 17px;">
                        <div class="btn1" @click="quFun1">取消</div>
                        <div class="btn1" @click="confirmFun1">确定</div>
                    </div>
                </div>
            </div>

                <div class="mask" v-show="showMask2">
                <div class="que-mask">
                    <div style="padding: 15px 5px; font-size: 14px;">确定要删除这个宝贝吗？</div>
                    <div class="mask-box" style="padding: 10px 5px;font-size: 17px;">
                        <div class="btn1"  @click="quFun1">取消</div>
                        <div class="btn1"  @click="confirmFun2">确定</div>
                    </div>
                </div>
            </div>

            <div class="mask" v-show="showMask3">
                <div class="que-mask">
                    <div style="padding: 15px 5px; font-size: 14px;">确定要删除这个宝贝吗？</div>
                    <div class="mask-box" style="padding: 10px 5px;font-size: 17px;">
                        <div class="btn1"  @click="quFun1">取消</div>
                        <div class="btn1"  @click="confirmFun3">确定</div>
                    </div>
                </div>
            </div>

            

            <div class="bottom-box">
                <div class="bottom-box1" @click=que4()>
                    <div class="little3-small" style=" margin-right: 15px;">
                        <template v-if="$store.state.showYuan4">
                            <img src="../images/shopping/yuan.png" alt="" style="height: 23px;">
                        </template>
                        <template v-else>
                            <img src="../images/shopping/que.png" alt="" style="height: 23px;">
                        </template>
                    </div>
                    <div>全选</div>
                </div>
                <div class="bottom-box2">
                    <div class="bottom-box4">合计:<span style="font-size: 12px; margin-left: 10px; color: rgb(255, 85, 0);">¥<span style="font-size: 16px;">{{$store.state.n2.toFixed(2)}}</div>
                    <div class="bottom-box3">结算(<span>{{n1}}</span>)</div>
                </div>

            </div>
            <div class="bottom-div">
                <div class="bottom-div1" @click="jump">
                    <img src="../images/shopping/shouye.png" alt="">
                    <p>首页</p>
                </div>
                <div class="bottom-div1">
                    <img src="../images/shopping/购物车.png" alt="">
                    <p>购物车</p>
                </div>
                <div class="bottom-div1">
                    <img src="../images/shopping/订单列表.png" alt="">
                    <p>订单列表</p>
                </div>
                <div class="bottom-div1">
                    <img src="../images/shopping/我.png" alt="">
                    <p>我的淘宝</p>
                </div>
                <div class="bottom-div1">
                    <img src="../images/shopping/更多.png" alt="">
                    <p>更多</p>
                </div>
            </div>
            <div class="mask" v-show="$store.state.seen1">
                <div class="que-mask1">
                    <div style="padding: 15px 5px; font-size: 14px;">受不了了，宝贝你能再减少了哦~</div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data: function() {
        return {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            a: 0,
            b: 0,
            c: 0,
            e: 0,
            f: 0,
            g: 0,
            a1: 0,
            b1: 0,
            c1: 0,
            bianSeen1: true,
            bianSeen2: true,
            bianSeen3: true,
            showMask1:false,
            showMask2:false,
            showMask3:false,
            n1:0,
        }
    },
    methods: {                
        que1() {
            if (this.num1 % 2 == 0) {
                this.$store.state.showYuan1 = false;
                this.n1+=1;
                this.$store.state.n2+=19.8*this.$store.state.count;
            } else {
                this.$store.state.showYuan1 = true;
                this.n1-=1;
                this.$store.state.n2-=19.8*this.$store.state.count;
            }
            this.num1++;
            if (this.$store.state.showYuan1 == false && this.$store.state.showYuan2 == false && this.$store.state.showYuan3 == false) {
                this.$store.state.showYuan4 = false;
                this.n1=3;
            } else {
                this.$store.state.showYuan4 = true;
            }
            if(this.$store.state.showDiv1==true&&this.$store.state.showDiv2==false&&this.$store.state.showDiv3==false&& this.$store.state.showYuan1 ==false){
                this.$store.state.showYuan4 = false;
                this.n1=1;
            }
            if((this.$store.state.showDiv1==true&&this.$store.state.showDiv2==true&&this.$store.state.showDiv3==false&& this.$store.state.showYuan1 ==false&&this.$store.state.showYuan2 ==false)||
            (this.$store.state.showDiv1==true&&this.$store.state.showDiv3==true&&this.$store.state.showDiv2==false&& this.$store.state.showYuan1 ==false&&this.$store.state.showYuan3 ==false)){
                this.$store.state.showYuan4 = false;
                this.n1=2;
            }
        },
        que2() {                
            // this.m2=(39*this.$store.state.count1);
            if (this.num2 % 2 == 0) {
                this.$store.state.showYuan2 = false;
                this.n1+=1;
                this.$store.state.n2+=39*this.$store.state.count1;
            } else {
                this.$store.state.showYuan2 = true;
                this.n1-=1;
                this.$store.state.n2-=39*this.$store.state.count1;
            }
            this.num2++;
            if (this.$store.state.showYuan1 == false && this.$store.state.showYuan2 == false && this.$store.state.showYuan3 == false) {
                this.$store.state.showYuan4 = false;
                this.n1=3;
            } else {
                this.$store.state.showYuan4 = true;
            }
            if(this.$store.state.showDiv2==true&&this.$store.state.showDiv1==false&&this.$store.state.showDiv3==false&& this.$store.state.showYuan2 ==false){
                this.$store.state.showYuan4 = false;
                this.n1=1;
            }
            if((this.$store.state.showDiv1==true&&this.$store.state.showDiv2==true&&this.$store.state.showDiv3==false&& this.$store.state.showYuan1 ==false&&this.$store.state.showYuan2 ==false)||
        (this.$store.state.showDiv2==true&&this.$store.state.showDiv3==true&&this.$store.state.showDiv1==false&& this.$store.state.showYuan2 ==false&&this.$store.state.showYuan3 ==false)){
                this.$store.state.showYuan4 = false;
                this.n1=2;
            }
        },
        que3() {
            // this.m3=(9.9*this.$store.state.count2);
            if (this.num3 % 2 == 0) {
                this.$store.state.showYuan3 = false;
                this.n1+=1;
                this.$store.state.n2+=9.9*this.$store.state.count2;
            } else {
                this.$store.state.showYuan3 = true;
                this.n1-=1;
                this.$store.state.n2-=9.9*this.$store.state.count2;
            }
            this.num3++;
            if (this.$store.state.showYuan1 == false && this.$store.state.showYuan2 == false && this.$store.state.showYuan3 == false) {
                this.$store.state.showYuan4 = false;
                this.n1=3;
            } else {
                this.$store.state.showYuan4 = true;
            }
            if(this.$store.state.showDiv3==true&&this.$store.state.showDiv2==false&&this.$store.state.showDiv1==false&& this.$store.state.showYuan3 ==false){
                this.$store.state.showYuan4 = false;
                this.n1=1;
            }
            if((this.$store.state.showDiv1==true&&this.$store.state.showDiv3==true&&this.$store.state.showDiv2==false&& this.$store.state.showYuan1 ==false&&this.$store.state.showYuan3 ==false)||
            (this.$store.state.showDiv2==true&&this.$store.state.showDiv3==true&&this.$store.state.showDiv1==false&& this.$store.state.showYuan2 ==false&&this.$store.state.showYuan3 ==false)){
                this.$store.state.showYuan4 = false;
                this.n1=2;
            }
        },
        que4() {
            // if(this.$store.state.showYuan1 == false&&this.$store.state.showYuan2 == false&&this.$store.state.showYuan3 == false){
            //     this.num4=1;
            // }
            if (this.num4 % 2 == 0) {
                this.$store.state.showYuan4 = false;
                this.$store.state.showYuan3 = false;
                this.$store.state.showYuan2 = false;
                this.$store.state.showYuan1 = false;
                if(this.$store.state.showYuan1 == false&&this.$store.state.showYuan2 == false&&this.$store.state.showYuan3 == false&&this.$store.state.showDiv1==true&&this.$store.state.showDiv2==true&&this.$store.state.showDiv3==true){
                    this.n1=3;
                }else if((this.$store.state.showYuan1 == false&&this.$store.state.showYuan2==false&&this.$store.state.showDiv1==true&&this.$store.state.showDiv2==true)||
                (this.$store.state.showYuan1 == false&&this.$store.state.showYuan3==false&&this.$store.state.showDiv1==true&&this.$store.state.showDiv3==true)||
                (this.$store.state.showYuan2 == false&&this.$store.state.showYuan3==false&&this.$store.state.showDiv3==true&&this.$store.state.showDiv2==true)){
                    this.n1=2;
                }else{
                    this.n1=1;
                }

                this.$store.state.n2=9.9*this.$store.state.count2+39*this.$store.state.count1+19.8*this.$store.state.count;
            } else {
                this.$store.state.showYuan3 = true;
                this.$store.state.showYuan1 = true;
                this.$store.state.showYuan2 = true;
                this.$store.state.showYuan4 = true;
                this.n1=0;
                this.$store.state.n2=0.00;
            }
            this.num4++;
        },
        moveFun() {
            this.a = event.changedTouches[0].clientX;
        },
        moveFun2() {
            this.b = event.changedTouches[0].clientX;
            if (this.a > this.b) {
                this.c = this.a - this.b;
                if (this.c > 10) {
                    this.$refs.moveDiv.style.cssText =
                        `transform: translateX(-70px);transition-duration:1000ms;`;
                }

            } else if (this.a < this.b) {
                this.c = this.b - this.a;
                if (this.c > 10) {
                    this.$refs.moveDiv.style.cssText =
                        `transform: translateX(0px);transition-duration:1000ms;`;
                }
            }
        },
        moveFun3() {
            this.e = event.changedTouches[0].clientX;
        },
        moveFun4() {
            this.f = event.changedTouches[0].clientX;
            if (this.e > this.f) {
                this.g = this.e - this.f;
                if (this.g > 10) {
                    this.$refs.moveDiv2.style.cssText =
                        `transform: translateX(-70px);transition-duration:1000ms;`;
                }

            } else if (this.e < this.f) {
                this.g = this.f - this.e;
                if (this.g > 10) {
                    this.$refs.moveDiv2.style.cssText =
                        `transform: translateX(0px);transition-duration:1000ms;`;
                }
            }
        },
        moveFun5() {
            this.a1 = event.changedTouches[0].clientX;
        },
        moveFun6() {
            this.b1 = event.changedTouches[0].clientX;
            if (this.a1 > this.b1) {
                this.c1 = this.a1 - this.b1;
                if (this.c1 > 10) {
                    this.$refs.moveDiv3.style.cssText =
                        `transform: translateX(-70px);transition-duration:1000ms;`;
                }

            } else if (this.a1 < this.b1) {
                this.c1 = this.b1 - this.a1;
                if (this.c1 > 10) {
                    this.$refs.moveDiv3.style.cssText =
                        `transform: translateX(0px);transition-duration:1000ms;`;
                }
            }
        },
        bian1() {
            this.$refs.moveDiv.style.cssText =
                `transform: translateX(-70px);transition-duration:1000ms;`;
            this.bianSeen1 = false;
        },
        bian2() {
            this.$refs.moveDiv2.style.cssText =
                `transform: translateX(-70px);transition-duration:1000ms;`;
            this.bianSeen2 = false;
        },
        bian3() {
            this.$refs.moveDiv3.style.cssText =
                `transform: translateX(-70px);transition-duration:1000ms;`;
            this.bianSeen3 = false;
        },
        wan1() {
            this.$refs.moveDiv.style.cssText =`transform: translateX(0px);transition-duration:1000ms;`;
            this.bianSeen1 = true;
        },
        wan2() {
            this.$refs.moveDiv2.style.cssText =`transform: translateX(0px);transition-duration:1000ms;`;
            this.bianSeen2 = true;
        },
        wan3() {
            this.$refs.moveDiv3.style.cssText =`transform: translateX(0px);transition-duration:1000ms;`;
            this.bianSeen3 = true;
        },
        delDiv(){
            this.showMask1=true;
            this.showMask2=false;
            this.showMask3=false;
        },
        delDiv2(){
            this.showMask1=false;
            this.showMask2=true;
            this.showMask3=false;
        },
        delDiv3(){
            this.showMask1=false;
            this.showMask2=false;
            this.showMask3=true;
        },
        quFun1(){
            this.showMask1=false;
            this.showMask2=false;
            this.showMask3=false;
        },
        confirmFun1(){
            this.showMask1=false;
            this.showMask2=false;
            this.showMask3=false;
            this.$store.state.showDiv1=false;
            this.$store.state.n3-=this.$store.state.count;
            this.$store.state.count=0;
            if(this.$store.state.n2==0){
                this.$store.state.n2-=0
            }else{
            this.$store.state.n2-=this.$store.state.count*19.8;
            }
            if(this.n1==0){
                this.n1-=0;
            }else{
                this.n1-=1;
            }
        },
        confirmFun2(){
            this.showMask1=false;
            this.showMask2=false;
            this.showMask3=false;
            this.$store.state.showDiv2=false;
            this.$store.state.n3-=this.$store.state.count1;
            this.$store.state.count1=0;
            if(this.$store.state.n2==0){
                this.$store.state.n2-=0
            }else{
            this.$store.state.n2-=this.$store.state.count1*39;
            }
            if(this.n1==0){
                this.n1-=0;
            }else{
                this.n1-=1;
            }
        },
        confirmFun3(){
            this.showMask1=false;
            this.showMask2=false;
            this.showMask3=false;
            this.$store.state.showDiv3=false;
            this.$store.state.n3-=this.$store.state.count2;
            this.$store.state.count2=0;
            if(this.$store.state.n2==0){
                this.$store.state.n2-=0
            }else{
            this.$store.state.n2-=this.$store.state.count2*9.9;
            }
            if(this.n1==0){
                this.n1-=0;
            }else{
                this.n1-=1;
            }
        },
        back(){
            this.$router.go(-1);
        },
        plus(){
            this.$store.commit("plus")//+
        },
        minus(){
            this.$store.commit("minus")//-
        },
        plus1(){
            this.$store.commit("plus1")
        },
        minus1(){
            this.$store.commit("minus1")
        },
        plus2(){
            this.$store.commit("plus2")
        },
        minus2(){
            this.$store.commit("minus2")
        },
        jump(){
            this.$router.push({
                path: "/",
            });
        }
    }
}
</script>
<style scoped>
* {
padding: 0;
margin: 0;
}

html,
#app,
.page {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
}

.top-box {
    width: 100%;
    background-color: #F5F5F5;
    color: #051b28;
    overflow-y: auto;
    overflow-x: hidden;
    /* height: 50%; */
    /* overflow: hidden; */
}

.top-box1 {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    align-items: center;
    border-bottom: 0.75px solid #e7e7e7;
    padding: 8px 10px;
}

.item1 {
    width: 33%;
}

.item1>img {
    height: 25px;
}

.item1>span {
    font-size: 18px;
}

.item1.item2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.top-box2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    background-color: #fff;
}

.box2-item1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 8px 14px;
    border-bottom: 0.75px solid #e7e7e7;
    padding-left: 10px;
}

.box-little {
    width: 15%;
    display: flex;
    align-items: center;
}

.little-img1 {
    height: 23px;
    margin-right: 8px;
}

.little-img2 {
    height: 17px;
}

.box-little3 {
    flex-shrink: 0;
    width: 8%;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-right: 17px;
}

.box-little2 {
    flex-grow: 1;
    display: flex;
    align-items: center;
    font-size: 12px;
    vertical-align: middle;
}

.box2-item2 {
    font-size: 12px;
    margin-top: 4px;
}

.box2-little2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
}

.little2-small {
    width: 11%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.little2-small2 {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.little2-small3 {
    width: 2%;
    flex-shrink: 0;
}

.small-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box2-little3 {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    flex-wrap: nowrap;
}

.little3-small {
    width: 11%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.little3-small2 {
    margin-left: 1px;
    width: 27%;
    flex-shrink: 0;
}

.little3-small3 {
    width: 56%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 6px;
}

.small3-item2 {
    display: flex;
    flex-direction: row;
    background-color: #F5F5F5;
    justify-content: space-between;
    align-items: center;
    color: #999;
    padding: 3px 2px;
    margin-top: 6px;
}

.small3-img {
    display: flex;
    align-items: center;
}

.small3-item3 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
}

.small3-item3 input {
    outline: none;
    border: none;
    width: 20px;
}

.bottom-box {
    width: 100%;
    position: fixed;
    bottom: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    border-top: 1px solid rgb(225, 225, 225);
    border-bottom: 1px solid rgb(225, 225, 225);
    z-index: 10;
}

.bottom-box1 {
    width: 25%;
    display: flex;
    flex-shrink: 0;
    height: 30px;
    align-items: center;
    padding: 12px 14px 12px 12px;
}

.bottom-box2 {
    width: 75%;
    display: flex;
    flex-shrink: 0;
    height: 30px;
    align-items: center;
    padding: 12px 14px 12px 12px;
    margin-left: 15px;
}

.bottom-box4{
    flex-grow: 1;
}
.bottom-box3 {
    width: 40%;
    height: 55px;
    background-color: rgb(255, 85, 0);
    color: white;
    line-height: 55px;
    margin-left: 15px;
    flex-shrink: 0;
    padding-left: 10%;
}

.bottom-div {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
}

.bottom-div1 {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    z-index: 10;
}

.bottom-div1>img {
    width: 17px;
    margin-bottom: 5px;
}

.mins-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.del-box {
    background: #f50;
    font-size: 15px;
    /* width: 120px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;
    color: #fff;

}

.big-div {
    width: 100%;
    overflow: hidden;
}
.mask{
    background-color: rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
}
.que-mask{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(248,248,248,.95);
    border-radius: 10px;
    width: 70%;
    color: #444;
    
}
.que-mask1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(68,68,68);
    border-radius: 10px;
    width: 70%;
    color: rgb(255, 255, 255);
    
}
.mask-box{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.btn1{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>