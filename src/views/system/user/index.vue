<template>
  <div class="add">
    <el-button type="primary" @click="handleAdd">新增</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%" border>
    <el-table-column align="center" prop="userName" label="用户名称" />
    <el-table-column align="center" prop="department" label="部门" />
    <el-table-column align="center" prop="role" label="角色" />
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
    userName: '白月初',
    department: '研发部门',
    role: 'admin'
  },
  {
    userName: '孙悟空',
    department: '市场部门',
    role: 'admin'
  },
  {
    userName: '猪八戒',
    department: '财务部门',
    role: 'common'
  },
  {
    userName: '沙和尚',
    department: '运维部门',
    role: 'common'
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
