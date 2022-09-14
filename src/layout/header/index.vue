<template>
  <div class="">
    {{ str }}
    <el-icon @click="changeLayout"><Setting /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {Setting} from '@element-plus/icons-vue';

import { storeToRefs } from 'pinia';
import {useSettingStore} from '@/store/index';

const settingStore = useSettingStore();

const str = ref('header');
const changeLayout=()=>{
  settingStore.changeSetting()
}
onMounted(() => {
console.log();
});
</script>
<style lang="scss" scoped></style>
