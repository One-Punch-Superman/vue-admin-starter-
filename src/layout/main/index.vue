<template>
  <div class="layout-main">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const str = ref('');
onMounted(() => {
  console.log();
});
</script>
<style lang="scss" scoped></style>
