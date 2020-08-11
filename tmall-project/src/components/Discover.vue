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
    </div>
</template>
<script>
export default {
    
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
</style>