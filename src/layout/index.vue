<template>
  <div class="layout-container">
    <el-container v-if="layout === 'side'">
      <el-aside width="250px" :style="{ background: asideBackground }">
        <Aside />
      </el-aside>
      <el-container>
        <el-header :style="{ background: headerBackground }">
          <Header />
        </el-header>
        <el-main>
          <Main />
          <el-footer><Footer /></el-footer>
        </el-main>
      </el-container>
    </el-container>

    <el-container v-else>
      <el-header :style="{ background: headerBackground }">
        <Header />
      </el-header>
      <el-container>
        <el-aside v-if="layout === 'mix'" width="250px" :style="{ background: asideBackground }">
          <Aside />
        </el-aside>
        <el-main>
          <Main />
          <el-footer><Footer /></el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <SettingDrawer></SettingDrawer>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Header from '@/layout/header/index.vue';
import Aside from '@/layout/aside/index.vue';
import Main from '@/layout/main/index.vue';
import Footer from '@/layout/footer/index.vue';
import SettingDrawer from '@/layout/setting.vue';
import { useSettingStore } from '@/store';

const settingStore = useSettingStore();
const { layout, headerBackground, asideBackground } = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.layout-container {
  background: #eee;
  .el-header {
    border-bottom: 1px solid #e8e8e8;
  }
  .el-aside {
    overflow: hidden;
    border-right: 1px solid #e8e8e8;
  }
  .el-main {
    height: calc(100vh - 60px);
  }
  .el-main::-webkit-scrollbar {
    width: 8px;
  }
  .el-main::-webkit-scrollbar-thumb {
    background: rgb(0 0 0 / 20%);
    border-radius: 5px;
  }
  .el-main::-webkit-scrollbar-track {
    background: rgb(0 0 0 / 10%);
    border-radius: 0;
  }
  .el-footer {
    height: 40px;
  }
}
</style>
