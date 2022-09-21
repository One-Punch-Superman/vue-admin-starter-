<template>
  <div v-if="layout === 'side'" class="header-log">
    <img width="180" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
  </div>
  <el-menu background-color="#fff" default-active="2">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <document />
      </el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store';

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
}
</style>
