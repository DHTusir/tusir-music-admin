<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello"

const count = ref(0)
const message = ref("音乐盒后台")

const request = ()=>{
  sayHello().then(res=>{
    //console.log(res);
    message.value = res.data
  }).catch(res=>{
    //console.log(res);
  })
}

</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="count++">点击次数:{{count}}</q-btn>
  <br>
  <br>
  <q-btn color="primary" @click="request">向后台发起请求</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
