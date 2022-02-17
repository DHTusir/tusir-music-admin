<template>
  <div class="login-page">
    <!-- 标题 -->
    <div class="title">{{message}}</div>
    <!-- 登录卡片 -->
    <q-btn color="primary" label="点我" @click="clickk"/>
    <!-- <q-card class="login-form-card">
      <q-form class="q-gutter-md" @submit="onSubmit(username,password)">
        <q-input
          filled
          label="用户名:"
          v-model="username"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
        />

        <q-input
          filled
          type="password"
          label="密码:"
          v-model="password"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || '请输入密码']"
        />

        <q-toggle v-model="accept" label="记住密码" />

        <div>
          <q-btn
            class="full-width"
            label="登录"
            type="submit"
            color="primary"
          />
        </div>
      </q-form>
    </q-card> -->
  </div>
</template>
<script>
import { ref } from "vue";
import { login,auth } from "../api/user"
import { useStore } from 'vuex';

export default {
  name: "Login",
  setup() {
    const accept = ref(false);
    const message = ref("");
    const username = ref('admin');
    const password = ref('')
    const store = useStore()

    const clickk = ()=>{
      message.value = "生日快乐，天天开心！"
    }

    const onSubmit = (username,password) => {
      //console.log(username,password);
      store.dispatch('user/login',{username,password}).then(res=>{
        console.log(res);
        window.location.reload()
      }).catch(res=>{
        console.log(res);
      })
    }

    return {
      accept,
      username,
      password,
      onSubmit,
      message,
      clickk
    };
  },

  // data() {
  //   return {
  //     userInfo:{
  //       username:'',
  //       password:''
  //     }
  //   };
  // },

  // methods: {
  //   console() {
  //     // console.log(this.userInfo);
  //     // login(this.userInfo).then(res=>{
  //     //   console.log(res);
  //     // })
  //     auth(this.userInfo).then(res=>{
  //       console.log(res);
  //     }).catch(res=>{
  //       console.log(res);
  //     })
  //   },
  // },
};
</script>
<style scoped lang="less">
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 40px;
    margin-bottom: 50px;
  }
  .login-form-card {
    width: 400px;
    padding: 20px;
  }
}
</style>
