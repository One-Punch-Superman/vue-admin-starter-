<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.icon"></component>
        </el-icon>
        <span>{{ subItem.title }}</span>
      </template>
      <SubMenu :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
      <el-icon>
        <component :is="subItem.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ subItem.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps<{ menuList: Menu.MenuOptions[] }>();

const router = useRouter();
const handleClickMenu = (subItem: Menu.MenuOptions) => {
  if (subItem.isLink) {
    window.open(subItem.isLink, '_blank');
  }
  router.push(subItem.path);
};
</script>

<style scoped lang="scss">
.el-menu,
.el-menu--popup {
  .el-menu-item {
    &.is-active {
      background-color: #1e7cda;
      color: #fff;

      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 4px;
        content: '';
        background: var(--el-color-primary);
      }
    }
  }
}
</style>
