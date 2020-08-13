<template>
    <div id="app">
        <div class="top-box">
            <div class="top-box2">
                <a class="item" href="https://list.tmall.com/search_product.htm?q=&type=p&tmhkh5=&spm=a220m.8599659.a2227oh.d100&from=mallfp..m_1_placeholder&searchType=default&closedKey=">
                    <img src="../images/wodetianmao/x1.png" alt="">
                </a>
                <input type="text" placeholder="搜索商品/店铺/品牌">
            </div>
        </div>
        <p>热门搜索</p>
        <div class="div1">
            <div class="box1" v-for="item in list" :key="item.name" @click="fun(item.num)">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            list:[
                {name:"airpods Pro3",
                    num:1
                },
                {name:"毛绒玩具",
                    num:2},
                {name:"夹心饼干",
                    num:3},
                {name:"果冻",
                    num:1},
                {name:"床上四件套",
                    num:2},
                {name:"巧克力",
                    num:3},
                {name:"发卡",
                    num:1},
                {name:"奶粉",
                    num:2},
                {name:"面膜",
                    num:3},
                {name:"口红",
                    num:1},
                {name:"手表",
                    num:2},
                {name:"手机",
                    num:3},
            ]
        }
    },
    methods:{
        fun(num){
           this[num]();
        },
        1(){
            this.$router.push({
                path: "/detail1",
            });
        },
        2(){
            this.$router.push({
                path: "/detail2",
            });
        },
        3(){
            this.$router.push({
                path: "/detail3",
            });
        }
    }
}
</script>
<style scoped>
        #app {
            height: 100%;
            width: 100%;
        }

        .top-box {
            width: 95%;
            background-color: rgba(0, 0, 0, .9);
            padding: 5px 10px;
            height: 38px;

        }

        .top-box2 {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            background-color: #FFF;
            height: 38px;
        }

        .top-box2>input {
            background: #FFF;
            box-shadow: none;
            border: none;
            outline: 0;
            color: #333;
            font-size: 14px;
            border-radius: 2px;
            flex-grow: 1;
        }

        .item {
            flex-shrink: 0;
            width: 25px;
            background-color: #FFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .item>img{
            width: 16px;
        }
        .div1{
            width: 95%;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            margin-left: 20px;
        }
        p{
            font-size: 20px;
            color: #999;
            margin: 20px;
        }
        .box1{
            width: 30%;
            height: 33px;
            font-size: 14px;
            text-align: center;
            line-height: 33px;
            flex-shrink: 0;
            background-color: rgb(222, 222, 222);
            margin: 0px 5px 5px 2px;
            border-radius: 5px;
        }
</style>