<template>
  <div v-if="layout === 'side'" class="header-log">
    <img width="180" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
  </div>
  <el-scrollbar>
    <el-menu background-color="#fff" :unique-opened="true" default-active="2">
      <SubMenu :menu-list="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store';
import SubMenu from './SubMenu.vue';

import menuList from './menu';
const settingStore = useSettingStore();
const { layout } = storeToRefs(settingStore);

onMounted(() => {
  console.log();
});
</script>

<style lang="scss" scoped>
.header-log {
  height: 60px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 230px;
}

.el-menu {
  height: calc(100vh - 60px);
}
</style>
