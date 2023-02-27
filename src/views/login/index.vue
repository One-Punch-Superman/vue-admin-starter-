<template>
  <div class="formLogin">
    <el-form ref="formRef" :model="formData">
      <el-form-item label="" prop="account">
        <el-input v-model="formData.account" placeholder="请输入账号：admin" />
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="请输入登录密码：admin" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store';
import { ElMessage } from 'element-plus';

const router = useRouter();
const userStore = useUserStore();
const formRef = ref();
const formData = ref({ account: 'admin', password: 'admin' });

const submitForm = async () => {
  await userStore.login();
  ElMessage.success('登录成功');
  router.push('/');
};
</script>
<style lang="scss" scoped>
.formLogin {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  .el-button {
    width: 100%;
  }
}
</style>
