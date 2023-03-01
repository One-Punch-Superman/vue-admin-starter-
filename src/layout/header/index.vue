<template>
  <div class="layout-header">
    <div v-if="layout !== 'side'" class="header-log">
      <img width="180" src="@/assets/image/assets-logo-full.svg" alt="logo" />
    </div>
    <el-icon @click="changeCollapsed"><Expand /></el-icon>
    <div class="but" v-if="layout === 'top'">
      <Aside />
    </div>
    <div class="menu"></div>
    <div class="info">
      <el-avatar> user </el-avatar>
      <el-dropdown trigger="click" size="large" @command="linkTo">
        <span class="el-dropdown-link">
          {{ userInfo.name }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item command="login">退出登录</el-dropdown-item>
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
import { Setting, ArrowDown } from '@element-plus/icons-vue';
import { useSettingStore, useUserStore } from '@/store';
import Aside from '@/layout/aside/index.vue';

const router = useRouter();
const settingStore = useSettingStore();
const userStore = useUserStore();
const { layout, isSidebarCompact } = storeToRefs(settingStore);
const { userInfo } = storeToRefs(userStore);

onMounted(() => {
  userStore.getUserInfo();
});
const changeLayout = () => {
  settingStore.updateConfig({
    isShowSetting: true
  });
};
const changeCollapsed = () => {
  settingStore.updateConfig({
    isSidebarCompact: !isSidebarCompact.value
  });
};

const linkTo = (command: string) => {
  if (command == 'login') {
    userStore.logout();
  }
  router.push(`/${command}`);
};
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  align-items: center;
  height: 100%;
  .menu {
    flex: 1;
  }
  .info {
    display: flex;
    align-items: center;
    .el-dropdown {
      margin-right: 15px;
      margin-left: 10px;
    }
    .el-icon {
      cursor: pointer;
    }
  }
}
.header-log {
  display: flex;
  align-items: center;
  width: 250px;
  height: 60px;
}
</style>
