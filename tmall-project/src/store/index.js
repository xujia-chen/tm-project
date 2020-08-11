import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    seen:true,
    list:["liuxingqushi","tianmaoguoji","nvzhuang","nvxie","nanzhuang","nanxie","neiyi","muying","shouji","shuma","jiadian","meizhuang","xiangbao","yundong","huwai","jiazhuang","jiafang","jujiabaihuo","xianhuachongwu","peishi","shiping","shengxian","qichemotuo","yiyao","tushu","tongxin","xihu","yueqi"],
    arr:[],
    arr1:[],
    arr2:[],
    count:0,
    count1:0,
    count2:0,
    showDiv1:false,
    showDiv2:false,
    showDiv3:false,
    seen1:false,
    textMessage: "",
    passMessage: "",
    n2:0.00,
    showYuan1: true,
    showYuan2: true,
    showYuan3: true,
    showYuan4: true,
    n3:0,
  },
  mutations: {
    loginFun(state){
      state.seen=false;
    },
    addFun(state){
      state.showDiv1=true;
      state.count++;
      state.n3+=1
    },
    plus(state){
      state.count ++;
      if(state.showYuan1==false){
        state.n2+=19.8;
      }
      state.n3+=1
    },
    minus(state){
        state.count --;
        if(state.count<1){
          if(state.showYuan1==false){
            state.n2-=0;
          }
          state.n3-=0;
          state.count=1;
          state.seen1=true;
          setTimeout(function(){
            state.seen1=false
          },1000)
        }else{
          state.n3-=1;
          if(state.showYuan1==false){
            state.n2-=19.8;
          }
        }
    },
    addFun1(state){
        state.showDiv2=true;
        state.count1++;
        state.n3+=1;
    },
    plus1(state){
      state.count1 ++;
      if(state.showYuan2==false){
        state.n2+=39;
      }
      state.n3+=1;
    },
    minus1(state){
        state.count1 --;
        if(state.count1<1){
          if(state.showYuan2==false){
            state.n2-=0;
          }
          state.n3-=0;
          state.count1=1;
          state.seen1=true;
          setTimeout(function(){
            state.seen1=false
          },1000)
        }else{
          state.n3-=1
          if(state.showYuan2==false){
            state.n2-=39;
          }
        }
    },
    addFun2(state){
        state.showDiv3=true;
        state.count2++;
        state.n3+=1
    },
    plus2(state){
      state.count2 ++;
      state.n3+=1
      if(state.showYuan3==false){
        state.n2+=9.9;
      }
    },
    minus2(state){
      state.count2 --;
      if(state.count2<1){
        if(state.showYuan3==false){
          state.n2-=0;
        }
        state.n3-=0
        state.count2=1;
        state.seen1=true;
        setTimeout(function(){
          state.seen1=false
        },1000)
      }else{
        state.n3-=1
        if(state.showYuan3==false){
          state.n2-=9.9;
        }
      }
    }
  },
})
