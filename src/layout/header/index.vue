<template>
  <div class="layout-header">
    <div class="but">header</div>
    <div class="menu"></div>
    <div class="info">
      <el-avatar> user </el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
          Tencent
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon @click="changeLayout">
        <Setting />
      </el-icon>
    </div>
  </div>
  <SettingDrawer ref="drawerRef"></SettingDrawer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Setting, ArrowDown } from '@element-plus/icons-vue';
import SettingDrawer from '@/layout/header/setting.vue';

import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store/index';

const settingStore = useSettingStore();

const str = ref('header');
const drawerRef = ref();
const changeLayout = () => {
  drawerRef.value.showDrawer();
  // settingStore.changeSetting();
};
onMounted(() => {
  console.log();
});
</script>
<style lang="scss" scoped>
.layout-header {
  height: 100%;
  display: flex;
  align-items: center;

  .menu {
    flex: 1;
  }

  .info {
    display: flex;
    align-items: center;

    .el-dropdown {
      margin-left: 5px;
      margin-right: 15px;
    }

    .el-icon {
      cursor: pointer;
    }
  }
}
</style>
