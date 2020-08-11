<template>
  <div class="page">
    
      <div class="top-box">
      <template v-if="seen">
        <div class="back-warp1">
          <div class="item" style="padding-left: 1px;" @click="back">
            <img src="../images/product/1.png" />
          </div>
        </div>
        <div class="back-warp2">
          <div class="item" style="padding-left: 3px;padding-top: 3px;">
            <img src="../images/product/3.png" alt="图片加载失败" class="title-image" @click="shopfun" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="content">
          <div class="back-warp1" style="padding-bottom: 10px;padding-top: 10px;" @click="back">
            <img src="../images/product/2.png" />
          </div>
          <div class="content-box">
              <div class="content-div" :class="{active:isActive1}">
                <a href="#a">商品</a>
              </div>
              <div class="content-div" :class="{active:isActive2}">
                <a href="#b">评价</a>
              </div>
              <div class="content-div" :class="{active:isActive3}">
                <a href="#c">详情</a>
              </div>
          </div>
          <div class="back-warp2" style="padding-bottom: 10px;padding-top: 10px;">
            <img src="../images/product/4.png" alt="图片加载失败" class="title-image" @click="shopfun" />
          </div>
        </div>
      </template>
    </div>

    <div class="middle-box" @scroll="divScroll" v-for="item in list" :key="item.name" >
      <a name="a"></a>
      <div class="box1" style="width:100%" >
        <swiper ref="mySwiper" :options="swiperOptions" style="width:100% ;height:375px;">
          <swiper-slide>
            <img :src="item.url1" alt style="width: 100%;" />
          </swiper-slide>
          <swiper-slide>
            <img :src="item.url2" alt style="width: 100%;" />
          </swiper-slide>
          <swiper-slide>
            <img :src="item.url3" alt style="width: 100%;" />
          </swiper-slide>
          <swiper-slide>
            <img :src="item.url4" alt style="width: 100%;" />
          </swiper-slide>
          <swiper-slide>
            <img :src="item.url5" alt style="width: 100%;" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="box2">
        <div class="box2-item" style="padding-top:5px;">
          <span style="font-size: 17px;font-weight: bold;">¥</span>
          <span style="font-size: 23px;">{{item.price}}</span>
        </div>
        <div style="margin-top:4px;padding-right:7px" >
          <span style="font-size: 14px;">{{item.name}}</span>
        </div>
        <div class="box2-item3">
          <div>快递：免运费</div>
          <div class="li-item1">月销量76件</div>
          <div class="li-item2">广东广州</div>
        </div>
      </div>
      <div class="box3" style="margin-top: 10px;">
        <div class="box3-item">
          <div class="item1">优惠</div>
          <div class="item2 item2-small">
            <img src="../images/product/youhui.png" alt style="height: 12px;margin-right: 6px;" />
            <div class="item2-div">领取优惠券</div>
            <span style="color: #999; width:10%">领取</span>
          </div>
          <div class="item3">
            <img src="../images/product/qian.png" alt style="width: 16px;" />
          </div>
        </div>
        <div class="box3-item">
          <div class="item1">促销</div>
          <div class="item2 item2-small">
            <span class="item2-cell-span" style="font-size: 10px;">跨店</span>

            <div class="item2-cell-div">每300减30,可跨店,上不封顶</div>
          </div>
          <div class="item3">
            <img src="../images/product/qian.png" alt style="width: 16px;" />
          </div>
        </div>
        <div class="box3-item">
          <div class="item1">服务</div>
          <div class="item2 item2-small">
            <span>假一赔四</span>
            <span class="item2-small-span">.</span>
            <span>极速退款</span>
            <span class="item2-small-span">.</span>
            <span>七天无理由退换</span>
          </div>
          <div class="item3">
            <img src="../images/product/qian.png" alt style="width: 16px;" />
          </div>
        </div>
      </div>
      <div class="box3" style="margin-top: 10px;">
        <div class="box3-item">
          <div class="item1">选择</div>
          <div class="item2">请选择颜色分类</div>
          <div class="item3">
            <img src="../images/product/qian.png" alt style="width: 16px;" />
          </div>
        </div>
        <div class="box3-item">
          <div class="item1">参数</div>
          <div class="item2">品牌 型号...</div>
          <div class="item3">
            <img src="../images/product/qian.png" alt style="width: 16px;" />
          </div>
        </div>
      </div>
      <a name="b"></a>
      <div class="box4" style="margin-top: 10px;">
        <div class="box4-item">
          <div>商品评价(41)</div>
          <div class="box4-little" @click="pathFun">
            <span style="padding-right: 3px;">查看全部</span>
            <img src="../images/product/qianjin.png" alt style="width: 14px;" />
          </div>
        </div>
        <div class="box4-item2">
          <div class="box4-little2">
            <img src="../images/product/header.jpg" alt class="box4-img" />
            <span class="box4-span">t...8</span>
          </div>
          <div class="box4-little3">
            <span>质量稍为粗糙了一些</span>
          </div>
          <div class="box4-little4" >
            <span>2020-07-23 颜色分类:{{item.describe}}</span>
          </div>
        </div>
      </div>

      <div class="box5" style="margin-top: 10px;">
        <div class="box5-item">
          <img src="../images/product/dian.jpg" alt class="box5-img" />
          <div class="box5-little" >
            <span>{{item.shop}}</span>
            <img src="../images/product/tianmao.png" alt />
          </div>
        </div>

        <div class="box5-item2">
          <div class="item-little">
            <span class="box5-span">宝贝描述</span>
            <span class="fen-span">4.8</span>
            <img src="../images/product/ping.png" alt class="box5-img2" />
          </div>
          <div class="item-little">
            <span class="box5-span">卖家服务</span>
            <span class="fen-span2">4.8</span>
            <img src="../images/product/shang.png" alt class="box5-img3" />
          </div>
          <div class="item-little">
            <span class="box5-span">物流服务</span>
            <span class="fen-span2">4.8</span>
            <img src="../images/product/shang.png" alt class="box5-img3" />
          </div>
        </div>

        <div class="box5-item3">
          <div class="item3-little" style="margin-right: 10px;">全部商品</div>
          <div class="item3-little">进入店铺</div>
        </div>
      </div>

      <div class="box6" style="margin-top: 10px;">
        <div class="box6-item">看了又看</div>
        <div class="box6-item2">很抱歉，找不到相关的商品</div>
      </div>
      <a name="c"></a>
      <div class="box7">
        <div class="cell">
          <hr />
        </div>
        <div class="cell-span">详情</div>
        <div class="cell">
          <hr />
        </div>
      </div>

      <div class="box8">"少女心十足的百变小樱 买它姐妹们"</div>

      <div class="box9" style="margin-top: 10px;">
        <img src="../images/product/back3/b1.jpg" alt style="height: 380.5px; width: 100%;" />
        <img src="../images/product/back3/b2.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b3.jpg" alt style="height: 381px;width: 100%;" />
        <img src="../images/product/back3/b4.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b5.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b6.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b7.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b8.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b9.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b10.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b11.jpg" alt style="height: 380.5px;width: 100%;" />
        <img src="../images/product/back3/b12.png" alt style="height: 184px;width: 100%;" />
      </div>

      <div class="box10" style="margin-top: 10px;height: 50px;"></div>
    

      <div class="bottom-box">
          <div class="bottom1">
            <div class="small-box">
              <img src="../images/product/6.png" alt style="width: 19px;" />
              <span>店铺</span>
            </div>
            <div class="small-box">
              <img src="../images/product/7.png" alt />
              <span>客服</span>
            </div>
            <div class="small-box">
              <img src="../images/product/5.png" alt style="width: 22px;" />
              <span>收藏</span>
            </div>
          </div>
        <div class="bottom2" @click="addFun2()">
          <span>加入购物车</span>
        </div>
        <div class="bottom3">
          <span>立即购买</span>
        </div>
        <div class="bottom4" v-if="seen1">
          <span>加入购物车成功</span>
        </div>
      </div>
    </div>
 
  </div>
    
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import "swiper/swiper-bundle.css";
export default {
  components: { Swiper, SwiperSlide },
  directives: {
    swiper: directive,
  },
  created(){
     let url = `http://localhost:5500/data/detail.json`;
    let that = this;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      that.arr = JSON.parse(xhr.response).list;
      // let num = that.$route.query.id - 1;
      // that.list = that.arr[num];
      // console.log(that.arr[num]);
      that.list.push(that.arr[2]);
      console.log(that.list.name);
    };
  },
  data() {
    return {
      arr:[],
      list:[],
      seen: true,
      scrollTop: 0,
      isActive1: true,
      isActive2: false,
      isActive3: false,
      seen1:false,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    divScroll(event) {
      console.log(this.scrollTop);
      this.scrollTop = event.target.scrollTop;
      if (this.scrollTop > 200) {
        this.seen = false;
      }
      if (this.scrollTop < 200) {
        this.seen = true;
      }
      if (this.scrollTop < 640) {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
      }
      if (this.scrollTop > 640 && this.scrollTop < 1000) {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
      }
      if (this.scrollTop > 1000) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
      }
    },
    pathFun(){
      this.$router.push({
          path:"/pingjia"
      })
    },  
    back(){
      this.$router.go(-1);
    },
    addFun2(){
      this.seen1=true;
      let that=this;
      setTimeout(function(){
        that.seen1=false
      },1000)
      this.$store.commit("addFun2");
    },
    shopfun(){
        if (
        this.$store.state.textMessage.trim() == "18896554089" &&
        this.$store.state.passMessage.trim() == "123456"
      ) {
        this.$router.push({
          path: "/shopping",
        });
      } else {
        this.$router.push({
          path: "/login2",
        });
      }
    }
  },
};
</script>

<style scoped>
.swiper-slide {
  height: 100px;
  background: #f1f1f1;
}
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
body,
html,
#app,
.page {
  width: 100%;
  height: 1000px;
}

.back-warp1 {
  width: 8%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  position: fixed;
  top: 0px;
  z-index: 10;
}

.back-warp2 {
  width: 8%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 10;
}

.back-warp1 img {
  width: 25px;
}

.back-warp2 img {
  width: 25px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0px;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #e2e1e1;
}

.content-box {
  width: 84%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16%;
}

.content-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  color: #999;
  font-size: 13px;
  padding-bottom: 13px;
  padding-top: 13px;
}

.bottom-box {
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  z-index: 10;
  background-color: #fff;
}

.bottom1 {
  flex-grow: 1;
  width: 40%;
  display: flex;
  flex-direction: row;
}

.bottom2 {
  flex-grow: 1;
  width: 30%;
  background: #ff9500;
  color: #fff;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom3 {
  flex-grow: 1;
  width: 30%;
  background-color: #ff0036;
  color: #fff;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.small-box > img {
  width: 21px;
  margin-bottom: 2px;
}

.small-box {
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 5px 10px;
  color: #999;
}

.box1 > img {
  height: 375px;
}

.item {
  width: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
}

.box2-item {
  color: #ff0036;
  font-size: 0px;
}

.box2 {
  padding-left: 10px;
  background-color: #fff;
}

.middle-box {
  height: 100%;
  background-color: #f5f5f5;
  overflow:scroll;

}

.box3 {
  background-color: #fff;
}

.box3-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  padding-right: 8px;
}

.item1 {
  font-size: 12px;
  color: #999;
  width: 10%;
}

.item2 {
  font-size: 12px;
  color: #333;
  text-align: left;
  width: 85%;
}

.item3 {
  width: 5%;
  display: flex;
  align-items: center;
}

.box2-item3 {
  font-size: 12px;
  color: #999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  padding-left: 0;
}

.box2-item3 > div {
  width: 33%;
}

.li-item1 {
  text-align: center;
}

.li-item2 {
  text-align: right;
}

.box4 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.box4-item {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #666;
  padding: 10px;
  justify-content: space-between;
}

.box4-little {
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ff0036;
}

.box4-img {
  width: 24px;
  height: 24px;
  border-radius: 20px;
}

.box4-span {
  color: #999;
  font-size: 12px;
}

.box4-little2 {
  padding: 10px;
  padding-top: 0;
}

.box4-little3 {
  padding: 10px;
  color: #051b28;
  font-size: 13px;
  padding-top: 5px;
}

.box4-little4 {
  padding: 10px;
  font-size: 10px;
  padding-top: 6px;
  color: #999;
}

.box5 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.box5-item {
  display: flex;
  flex-direction: row;
}

.box5-item .box5-img {
  width: 54px;
  margin-right: 10px;
}

.box5-little {
  display: flex;
  flex-direction: column;
  color: #333;
  font-size: 16px;
}

.box5-little > img {
  margin-top: 10px;
  width: 80px;
}

.box5-item2 {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.box5-img2 {
  width: 14px;
}

.box5-img3 {
  width: 15px;
}

.box5-span {
  color: #999;
  font-size: 12px;
}

.fen-span {
  color: #1193ce;
  font-size: 12px;
}

.fen-span2 {
  font-size: 12px;
  color: #e13e4c;
}

.item-little {
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.box5-item3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: rgba(255, 0, 54, 0.8);
  margin-top: 10px;
}

.item3-little {
  width: 86px;
  border: 1px solid rgba(255, 0, 54, 0.5);
  border-radius: 12px;
  text-align: center;
  padding: 2px 3px;
}

.box6 {
  background-color: #fff;
}

.box6-item {
  color: #051b28;
  font-size: 12px;
  padding: 10px;
}

.box6-item2 {
  color: #051b28;
  font-size: 12px;
  padding: 10px;
  text-align: center;
}

.box7 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #999;
  font-size: 12px;
  padding: 10px;
}

.cell {
  width: 53px;
}

.cell-span {
  margin: 0 8px;
}

.box8 {
  background-color: #fff;
  color: #051b28;
  text-align: center;
  font-size: 16px;
  padding: 10px;
}

.box9 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 0;
}

.item2.item2-small {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.item2-div {
  width: 70%;
}

.item2-cell-span {
  color: #ff0036;
  margin-right: 10px;
}

.item2-small-span {
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  padding-bottom: 5px;
}

.active {
  color: #ff0036;
  border-bottom: 2px solid #ff0036;
}
.active a {
  color: #ff0036;
}
.bottom4{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0px;
    background-color: rgba(204,205,203,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 11;
}
.bottom4>span{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 40%;
    height: 50px;
    background-color: rgb(114, 114, 114);
    border-radius: 8px;
}
</style>