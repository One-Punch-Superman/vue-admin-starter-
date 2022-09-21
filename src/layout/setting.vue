<template>
  <el-drawer v-model="isShowSetting" title="页面配置" size="380px">
    <div class="setting-container">
      <el-form ref="form" label-align="left">
        <div class="setting-group-title">导航布局</div>
        <el-radio-group v-model="layout">
          <el-radio label="side">侧边导航</el-radio>
          <el-radio label="top">顶部导航</el-radio>
          <el-radio label="mix">组合导航</el-radio>
        </el-radio-group>
      </el-form>
    </div>
  </el-drawer>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store/index';

const settingStore = useSettingStore();
const { isShowSetting, layout } = storeToRefs(settingStore);

onMounted(() => {
  console.log();
});
</script>
<style lang="scss" scoped></style>
