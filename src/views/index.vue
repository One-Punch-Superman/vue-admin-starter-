<template>
  <div class="">{{ str }}</div>
</template>
<script lang="ts" setup>
const str = ref('11');

onMounted(() => {
  console.log();
});
</script>
<style lang="scss" scoped>
div {
  height: 1500px;
}
</style>
