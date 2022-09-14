<template>
  <div class="container">
    <div class="main">1111</div>
  </div>
</template>

<script lang="ts" setup>
import { getIndexMd } from '@/api/md';

const text = ref('');
onMounted(() => {
  getIndexMd().then((res) => {
    text.value = res.data;
  });
});
</script>

<style lang="scss" scoped>
.container {
  height: 1500px;
}
</style>
