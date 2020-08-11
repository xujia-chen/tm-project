<template>
    <div id="app">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
// import Detail from "../components/Detail.vue";
export default {
  // components:{
  //    "my-detail2": Detail
  // }
}
</script>
<style >
*{
  padding: 0px;
  margin: 0px;
}
#app{
  width: 100%;
  height: 100%;
}
.swiper-pagination-bullet{
  width: 10px !important;
  height: 5px !important;
  border-radius: 5px !important;
  margin: 0 5px !important;
}
.swiper-pagination-bullet-active{
  width: 12px !important;
  background-color: white !important;
}
</style>