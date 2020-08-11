<template>
  <div class="right-content">
    <div class="content1" v-for="item in list1" :key="item.name1">
      <p>{{item.name1}}</p>
    </div>
    <div class="content-div">
      <div class="content2" v-for="item in list[0]" :key="item.img">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="content1" v-for="item in list1" :key="item.name2">
      <p>{{item.name2}}</p>
    </div>
    <div class="content-div">
      <div class="content2" v-for="item in list[1]" :key="item.img">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="content1" v-for="item in list1" :key="item.name3">
      <p>{{item.name3}}</p>
    </div><br>
    <div class="content-div">
      <div class="content2" v-for="item in list[2]" :key="item.img">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="content1" v-for="item in list1" :key="item.name4">
      <p>{{item.name4}}</p>
    </div><br>
    <div class="content-div">
      <div class="content2" v-for="item in list[3]" :key="item.img">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="content1" v-for="item in list1" :key="item.name5">
      <p>{{item.name5}}</p>
    </div><br>
    <div class="content-div">
      <div class="content2" v-for="item in list[4]" :key="item.img">
        <img :src="item.img" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["num"],
  data: function () {
    return {
      list: [],
      list1: [],
      n: 0,
    };
  },
  watch: {
    num: function (val) {
      this.num = val;
      console.log(this.num);
      var name = this.$store.state.list[this.num];
      console.log(name);
      let url = `http://127.0.0.1:5500/data/${name}.json`;
      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onload = function () {
        that.list = JSON.parse(xhr.response).list;
        that.list1 = JSON.parse(xhr.response).list1;

        console.log(that.list);
      };
    },
  },
  created() {
      var name = this.$store.state.list[this.num];
      console.log(name);
      let url = `http://127.0.0.1:5500/data/${name}.json`;
      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onload = function () {
        that.list = JSON.parse(xhr.response).list;
        that.list1 = JSON.parse(xhr.response).list1;

        console.log(that.list);
      };
  }
};
</script>
<style scoped>
.right-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
}
.content-div {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}
.content1 {
  width: 100%;
  height: 10px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  text-align: center;
}

.content2 {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: blueviolet; */
  margin: 0px 12px 10px 0px;
  flex-shrink: 0;
}
.content2>img{
    width: 70px;
}
</style>