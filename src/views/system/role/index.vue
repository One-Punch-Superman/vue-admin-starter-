<template>
  <div class="add">
    <el-button type="primary" @click="handleAdd">新增</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column align="center" prop="roleName" label="角色名" />
    <el-table-column align="center" prop="mark" label="角色标识" />
    <el-table-column align="center" prop="describe" label="描述" />
    <el-table-column align="center" label="操作" width="150">
      <template #default="scope">
        <el-button size="small" link type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" link type="primary" @click="handleDel(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    roleName: '超级管理员',
    mark: 'admin',
    describe: '超级管理员，拥有所以权限'
  },
  {
    roleName: '普通角色',
    mark: 'common',
    describe: '普通角色'
  },
  {
    roleName: '测试账号',
    mark: 'test',
    describe: '测试账号'
  }
];
// 新增
const handleAdd = () => {};
// 编辑
const handleEdit = () => {};
// 删除
const handleDel = () => {};
</script>

<style lang="scss" scoped>
.add {
  float: right;
  margin-bottom: 10px;
}
</style>
