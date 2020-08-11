<template>
    <div id="app">
        <div class="box">
            <div class="top-box">
                <span>淘宝账户登录</span>
            </div>
            <div class="container">
                <div class="container-top">
                    <input type="text" placeholder="手机号/邮箱/会员名" v-model="$store.state.textMessage" @input="change">
                    <div class="del-box">
                        <img src="../images/eye/3.png" alt="" class="del-image" v-show="delme" @click="delFun">
                    </div>
                </div>

                <template v-if="seen">
                    <div class="container-box">
                        <input type="password" placeholder="请输入登录密码" v-model="$store.state.passMessage" @input="change2">
                        <div class="container-img">
                            <img src="../images/eye/3.png" alt="" class="del-image" v-show="delme1" style="margin-right:8px;"
                                @click="delFun2">
                            <img src="../images/eye/1.png" alt="" @click="fun">
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="container-box">
                        <input type="text" placeholder="请输入登录密码" v-model="$store.state.passMessage" @input="change2">
                        <div class="container-img">
                            <img src="../images/eye/3.png" alt="" class="del-image" v-show="delme1" style="margin-right:8px;"
                                @click="delFun2">
                            <img src="../images/eye/2.png" alt="" class="little-img" @click="fun2">
                        </div>
                    </div>
                </template>
            </div>
            <div class="top-box2">
                <div class="box2" @click="loginFun">
                    <span>登录</span>
                </div>
            </div>
            <div class="bottom-box">
                <div>短信验证码登录</div>
                <div>免费注册</div>
            </div>
            <div class="mask" v-show="showme">
                <div v-if="seen2">
                    <div class="bottom1">请输入账户名</div>
                    <div class="bottom2" @click="confirm">确认</div>
                </div>
                <div v-else>
                    <div class="bottom1">登录名或登录密码不正确</div>
                    <div class="bottom2" @click="confirm">确认</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data:function() {
        return{
            seen: true,
            showme: false,
            seen2: true,
            delme: false,
            delme1: false   
        }
                
    },
    methods: {
        fun() {
            this.seen = false;
        },
        fun2() {
            this.seen = true;
        },
        confirm() {
            this.showme = false;
            this.$store.state.textMessage = "";
            this.$store.state.passMessage = "";
            this.delme = false;
            this.delme1 = false;
        },
        loginFun() {
            if (this.$store.state.textMessage == "") {
                this.showme = true;
                this.seen2 = true;
            } else if (this.$store.state.textMessage.trim() != "18896554089" || this.$store.state.passMessage.trim() !=
                "123456") {
                this.showme = true;
                this.seen2 = false;
            }else {
                this.$store.commit("loginFun"),
                this.$router.push({
                    path:"/",
                })
            }
        },
        change() {
            if (this.$store.state.textMessage.trim() != "") {
                this.delme = true;
            } else if (this.$store.state.textMessage.trim() == "") {
                this.delme = false;
            }
        },
        change2() {
            if (this.$store.state.passMessage.trim() != "") {
                this.delme1 = true;
            } else if (this.$store.state.passMessage.trim() == "") {
                this.delme1 = false;
            }
        },
        delFun() {
            this.$store.state.textMessage = "";
            this.delme = false;
        },
        delFun2() {
            this.$store.state.passMessage = "";
            this.delme1 = false;
        }
    }
}
</script>
<style scoped>
#app {
            height: 100%;
            width: 100%;
        }

        .box {
            background-color: #f0f0f0;
        }

        .top-box {
            height: 30px;
            text-align: center;
            font-size: 17px;
            background-color: #f7f7f8;
            border-bottom: 1px solid #c8c8c8;
            padding-top: 10px;
            padding-bottom: 5px;
            color: #000;
        }

        .container {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
        }

        .container-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        .container-top>input {
            border: 0;
            padding-left: 15px;
            font-size: 16px;
            color: #333;
            height: 50px;
            border-bottom: 1px solid #ccc;
            outline: none;
            flex-grow: 1;
        }

        .container-box {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .container-box>input {
            border: 0;
            padding-left: 15px;
            font-size: 16px;
            color: #333;
            height: 50px;
            border-bottom: 1px solid #ccc;
            flex-grow: 1;
            outline: none;
        }

        .del-image {
            height: 16px;
        }

        .container-img {
            height: 50px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            padding-right: 10px;
            flex-direction: row;
        }

        .container-img>img {
            height: 18px;

        }

        .container-img .del-image {
            height: 16px;
        }

        .container-img .little-img {
            height: 20px;
        }

        .box2 {
            background-color: #ff0036;
            border: 1px solid #ff0036;
            color: #fff;
            height: 45px;
            border-radius: 5px;
            margin-top: 15px;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .top-box2 {
            padding: 0 10px;
        }

        .bottom-box {
            margin-top: 15px;
            padding: 0 10px;
            margin-bottom: 8px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: #ff0036;
            font-size: 16px;
        }

        .mask {
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            top: 0px;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .bottom1 {
            width: 260px;
            height: 22px;
            padding: 20px;
            text-align: center;
            font-size: 15px;
            pointer-events: auto;
            background-color: #fff;
            border-radius: 8px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            color: rgba(0, 0, 0, .65);

        }

        .bottom2 {
            font-size: 15px;
            width: 280px;
            padding: 10px;
            border: 0;
            background: #fff;
            border-radius: 8px;
            color: #f40;
            border-top: 1px solid #ddd;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            text-align: center;
        }

        .del-box {
            flex-shrink: 0;
            background: #fff;
            height: 50px;
            border-bottom: 1px solid #ccc;
            line-height: 50px;
            padding-right: 10px;
        }
</style>