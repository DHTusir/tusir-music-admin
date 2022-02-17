<template>
    <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          音乐盒后台
        </q-toolbar-title>

        <q-space />
        <q-avatar color="orange" text-color="white">{{nickNameFirstWord}}</q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'Layout',
    setup () {
    const leftDrawerOpen = ref(false)

    const store = useStore()

    return {
      //控制菜单展开关闭
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      //头像区域NickName首字母
      nickNameFirstWord: computed(()=>store.getters['user/nickNameFirstWord'])
    }
  }
}
</script>
<style scoped>
    
</style>