<template>
  <div>
    {{mes}}
    <div>使用$route.query.id获取id参数{{$route.query.id}}</div>
  </div>
</template>

<script>
    export default {
        data() {
            return(
                {
                    mes: "显示音乐模块"
                }
            )
        }
    }
</script>

<style>
    
</style>
