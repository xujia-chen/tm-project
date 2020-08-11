<template>
  <div id="page">
    <div class="top-box">
      <img src="../images/pingjia/2.png" alt @click="back" />
      <div class="top-item">评价</div>
    </div>
    <div class="middle-box">
      <div style="background-color: #fff;height: 47px;"></div>
      <div style=" padding: 0px 10px;">
        <div class="middle-item" style=" padding: 13px 0px;">
          <div class="middle-small" style="padding:3px 16px;" :class="{active:isActive1}" @click="fun1">全部</div>
          <div class="middle-small" style="padding:3px 16px;" :class="{active:isActive2}" @click="fun2">追加</div>
          <div class="middle-small" :class="{active:isActive3}" @click="fun3">有图(6)</div>
        </div>
      </div>

      <div class="content">
        <component :is="isName"></component>
      </div>
    </div>
  </div>
</template>
<script>
import One from "./ping/One.vue";
import Two from "./ping/Two.vue";
import Three from "./ping/Three.vue";
export default {
  components: {
    one: One,
    two: Two,
    three: Three,
  },
  data() {
    return {
      isName: "one",
      isActive1: true,
      isActive2: false,
      isActive3: false,
    };
  },
  methods: {
    fun1() {
      this.isName = "one";
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
    },
    fun2() {
      this.isName = "two";
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
    },
    fun3() {
      this.isName = "three";
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
    },
    back(){
       this.$router.go(-1);
    }
  },
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}

.top-box {
  text-align: center;
  font-size: 14px;
  margin: 0;
  background-color: #fff;
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #e5e5e5;
}

.top-box > img {
  flex-shrink: 0;
  height: 29px;
  padding-left: 10px;
}

.top-item {
  font-weight: bold;
  color: #666;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding-right: 27px;
}

.middle-item {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #e5e5e5;
}

.middle-small {
  height: 30px;
  border-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 12px;
  margin-right: 8px;
}

.content-box {
  padding: 0px 10px;
}

.content-box1 {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px 0;
}

.content-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 10px;
}

.content-box1 .content-item2 {
  color: #051b28;
  font-size: 14px;
  padding: 5px 0;
  margin-bottom: 5px;
}

.cha-div {
  font-size: 14px;
  padding: 5px 0;
  color: #666;
}

.active {
  background-color: #ff0036;
  color: #fff;
}
</style>