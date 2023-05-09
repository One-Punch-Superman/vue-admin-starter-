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
    <el-table :data="dataList" style="width: 100%" border>
      <el-table-column align="center" prop="userName" label="用户名" />
      <el-table-column align="center" prop="department" label="部门" />
      <el-table-column align="center" prop="role" label="角色" />
      <el-table-column align="center" label="操作" width="150">
        <template #default="scope">
          <el-button size="small" link type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" link type="primary" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <!-- 分页 -->
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
  <el-dialog v-model="dialogFormVisible" :title="dialogTitle" width="500px">
    <el-form :model="userForm" label-width="70px">
      <el-form-item label="用户名:">
        <el-input v-model="userForm.userName" />
      </el-form-item>
      <el-form-item label="部门:">
        <el-input v-model="userForm.department" />
      </el-form-item>
      <el-form-item label="角色:">
        <el-select v-model="userForm.role" multiple placeholder=" ">
          <el-option v-for="(item, index) in roleList" :key="index" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessageBox, ElMessage } from 'element-plus';

const searchName = ref('');
const dataList = ref<any>([]);
const roleList = ref<any>([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(25);
const dialogTitle = ref('');
const dialogFormVisible = ref(false);
const userForm = reactive({
  userName: '',
  department: '',
  role: []
});

onMounted(() => {
  getList();
});
const getList = () => {
  dataList.value = [
    {
      userName: '白月初',
      department: '研发部门',
      role: ['admin']
    },
    {
      userName: '孙悟空',
      department: '市场部门',
      role: ['admin']
    },
    {
      userName: '猪八戒',
      department: '财务部门',
      role: ['common']
    },
    {
      userName: '沙和尚',
      department: '运维部门',
      role: ['common']
    }
  ];
};
const getRoleList = () => {
  roleList.value = [
    {
      label: '管理员',
      value: 'admin'
    },
    {
      label: '普通用户',
      value: 'common'
    }
  ];
};
// 新增
const handleAdd = () => {
  getRoleList();
  dialogTitle.value = '新增';
  userForm.userName = '';
  userForm.department = '';
  userForm.role = [];
  dialogFormVisible.value = true;
};
// 编辑
const handleEdit = (row: any) => {
  getRoleList();
  dialogTitle.value = '编辑';
  userForm.userName = row.userName;
  userForm.department = row.department;
  userForm.role = row.role;
  dialogFormVisible.value = true;
};
// 删除
const handleDel = (row: any) => {
  ElMessageBox.confirm(`你确定要删除${row.userName}吗?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    ElMessage({
      type: 'success',
      message: '删除成功'
    });
  });
};
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>

<style lang="scss" scoped>
.el-card {
  margin-bottom: 10px;
  .el-input {
    width: 250px;
    margin-right: 10px;
  }
}
.el-dialog .el-select {
  width: 100%;
}
</style>
