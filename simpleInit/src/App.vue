<template>
  <div id="app">
    <span>
      <img src="./assets/logo.png">
    </span>
    <div>-----------------------父子组件通信----------------------</div>
    <div class="desc">
      <span>
        父组件传值给子组件，子组件props接收；
      </span>
      <br>
      <span>
        子组件修改父组件值，父组件传方法给子组件，子组件$emit接收
      </span>
    </div>
    <div class="parent-num">父组件值：{{num}}</div>

    <Counter v-bind:num="num" v-on:add="add" v-on:minus="minus" />
  </div>
</template>

<script>
import Counter from './components/Counter'
export default {
  name: 'app',
  components: {
    Counter
  },
  data () {
    return {
      msg: '简单的vue项目',
      num: 10
    }
  },
  methods: {
    add() {
      this.num ++;
    },
    minus() {
      this.num --;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img {
  width: 100px;
}

.parent-num {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  margin: 20px 0;
  width: 300px;
  background-color: #42b983;
}

.desc {
  color: red;
  line-height: 40px;
  font-size: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
