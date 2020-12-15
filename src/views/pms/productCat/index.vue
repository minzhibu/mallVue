<template>
	<div class="app-container">
		<el-card class="operate-container" shadow="never">
		  <i class="el-icon-tickets" style="margin-top: 5px"></i>
		  <span style="margin-top: 5px;margin-left: 5px;">数据列表</span>
		  <el-button
		    class="btn-add"
		    @click="handleAddProductCate()"
		    size="mini">
		    添加
		  </el-button>
		</el-card>
		<div class="table-container">
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%">
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
			      label="地址">
			    </el-table-column>
			  </el-table>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}]
			}
		}
	}
</script>

<style>
	.app-container{
		padding: 20px;
	}
	.btn-add{
		float: right;
	}
	.table-container{
		margin-top: 20px;
	}
	.operate-container{
		margin-top: 20px;
	}
</style>
