<template>
  <div class="layout-header">
    <div v-if="layout !== 'side'" class="header-log">
      <img width="180" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
    </div>
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
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Setting, ArrowDown } from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/index';

const settingStore = useSettingStore();
const { layout } = storeToRefs(settingStore);
const changeLayout = () => {
  settingStore.updateConfig({
    isShowSetting: true
  });
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

.header-log {
  height: 60px;
  display: flex;
  align-items: center;
  width: 250px;
}
</style>
