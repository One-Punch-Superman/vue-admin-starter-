<template>
  <div class="layout-container">
  <el-container v-if="layout === 'side'">
      <el-header><Header/></el-header>
      <el-container>
        <el-aside width="250px"><Aside/></el-aside>
        <el-main><Main/></el-main>
      </el-container>
    </el-container>

    <el-container v-else>
      <el-aside width="250px"><Aside/></el-aside>
      <el-container>
        <el-header><Header/></el-header>
        <el-main><Main/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Header from '@/layout/header/index.vue';
import Aside from '@/layout/aside/index.vue';
import Main from '@/layout/main/index.vue';
import {useSettingStore} from '@/store/index';

const settingStore = useSettingStore();
const {layout} = storeToRefs(settingStore);
</script>

<style lang="scss" scoped>
.layout-container {
  background: #eee;
  .el-header{
    background: #fff;
  }
  .el-aside{
    background: #e8e8e8;
  }
  .el-main{
    height: calc(100vh - 60px);
  }
}
</style>
