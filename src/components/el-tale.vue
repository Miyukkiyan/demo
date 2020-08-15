<template>
  <div style="height: 500px">
     <el-table
      stripe
      border
      :data="tableData"
      style="width: 800px"
      max-height="600px">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
       <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
       <el-table-column
        prop="shengao"
        label="身高">
      </el-table-column>
       <el-table-column
        prop="tizhong"
        label="体重">
      </el-table-column>
       <el-table-column
        fixed="right"
        label="操作">
        <template v-slot="{ row }">
          <el-button @click="handleClick(row)" >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        age: 18,
        shengao: 122,
        tizhong: 20
      }]
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>
<style>

</style>
