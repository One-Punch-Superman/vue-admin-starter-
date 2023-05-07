<template>
  <!-- 搜索 -->
  <el-card class="search">
    <el-row>
      <el-col :span="20">
        <el-input v-model="searchName" placeholder="用户名"></el-input>
        <el-button type="primary">查询</el-button>
      </el-col>
      <el-col :span="4" align="right">
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </el-col>
    </el-row>
  </el-card>
  <!-- 列表 -->
  <el-card>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column align="center" prop="userName" label="用户名" />
      <el-table-column align="center" prop="department" label="部门" />
      <el-table-column align="center" prop="role" label="角色" />
      <el-table-column align="center" label="操作" width="150">
        <template #default="scope">
          <el-button size="small" link type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" link type="primary" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <!-- 分页 -->
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
const searchName = ref('');
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
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};

// 新增
const handleAdd = () => {};
// 编辑
const handleEdit = () => {};
// 删除
const handleDel = () => {};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 10px;
  .el-input {
    width: 250px;
    margin-right: 10px;
  }
}
</style>
