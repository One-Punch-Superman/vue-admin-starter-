<template>
  <div v-if="layout === 'side'" class="header-log">
    <img width="180" src="@/assets/image/assets-logo-full.svg" alt="logo" />
  </div>
  <el-scrollbar>
    <el-menu
      :background-color="layout === 'top' ? headerBackground : asideBackground"
      :default-active="active"
      :mode="layout === 'top' ? 'horizontal' : 'vertical'"
      :collapse="layout === 'top' ? false : isSidebarCompact"
    >
      <SubMenu :menu-list="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store';
import SubMenu from './SubMenu.vue';
import menuList from './menu';

const route = useRoute();
const settingStore = useSettingStore();
const { layout, headerBackground, asideBackground, isSidebarCompact } = storeToRefs(settingStore);

const active = computed(() => {
  return route.path;
});

onMounted(() => {
  console.log();
});
</script>

<style lang="scss" scoped>
.header-log {
  display: flex;
  align-items: center;
  width: 230px;
  height: 59px;
  margin-left: 20px;
}
.el-menu {
  height: calc(100vh - 60px);
  border-right: 0;
}
.el-menu--horizontal {
  height: 60px;
  border-bottom: 0;
}
</style>
