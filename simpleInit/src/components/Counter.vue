<template>
    <div>
        <span class="add" @click="add">+</span>
        <span class="num">{{num}}</span>
        <span class="minus" @click="minus">-</span>
    </div>
</template>
<script>
    export default {
        props: ['num'],
        data() {
            return {
                
            }
        },
        methods: {
            add() {
                this.$emit('add');
            },
            minus() {
                this.$emit('minus');
            }
        }
    }
</script>
<style>
    .add, .minus {
        display: inline-block;
        width: 100px;
        height: 40px;
        background-color: blueviolet;
        color: #fff;
        line-height: 40px;
        text-align: center;
        font-size: 30px;
        cursor: pointer;
    }
    .num {
        display: inline-block;
        width: 60px;
        margin: 0 20px;
        font-size: 30px;
        color: blueviolet;
    }
</style>
