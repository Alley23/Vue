<template>
  <div class="warp">
    <div class="title"> {{mes}} </div>
    <ul>
        <li>
            通过【$.route.params.id】获取参数{{$route.params.id}}
        </li>
        <li>
            使用【router-link】标签添加路由跳转
        </li>
        <li>
            使用【router-view】标签做路由载体
        </li>
        <li>
            编程式路由：通过js控制路由跳转;使用$route.query.id获取参数<br/>
            $router.push("name")<br/>
            $router.push({path: "name"})<br/>
            $router.push({path: "name?a=123"})或者$router.push({path: "name", query: {a: 123}})<br/>
            $router.go(1)
        </li>
    </ul>
    
    <div class="nav-list">
        <router-link to="/8000/music">音乐</router-link>
        <router-link to="/8888/new">新闻</router-link>
        <button @click="toMusic">音乐</button>
        <button @click="toNew">新闻</button>
    </div>

    <router-view class="content-list" />
  </div>
</template>

<script>
    export default {
        data() {
            return(
                {
                    mes: "路由配置总页面"
                }
            )
        },
        methods: {
            toMusic() {
                this.$router.push({path: "/888/music?id=12345555"})
            },
            toNew() {
                this.$router.push({path: "/888/new", query:{id: 4566}})
            }
        }
    }
</script>

<style>
    .warp {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #efefef;
        padding: 40px;
    }
    .title {
        line-height: 60px;
        background-color: aquamarine;
    }
    .nav-list a {
        display: inline-block;
        width: 120px;
        height: 40px;
        background-color: blueviolet;
        line-height: 40px;
        text-align: center;
        color: #fff;
        text-decoration: none;
        margin: 20px 0;
    }
    ul li{
        line-height: 30px;
    }
    .content-list {
        width: 300px;
        height: 300px;
        background-color: rgb(50, 61, 75);
        color: #fff;
        padding: 20px;
    }
</style>
