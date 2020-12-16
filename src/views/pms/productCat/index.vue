<template>
	<div class="app-container">
		<el-card class="operate-container" shadow="never">
		  <i class="el-icon-tickets" style="margin-top: 5px"></i>
		  <span style="margin-top: 5px;margin-left: 5px;">数据列表</span>
		  <el-button
		    class="btn-add"
		    @click="AddProductCate()"
		    size="mini">
		    添加
		  </el-button>
		</el-card>
		<div class="table-container">
			<el-table
				:data="pageObj.list"
				border
				style="width: 100%">
				<el-table-column
					prop="id"
					label="编号"
					width="100"
					align="center">
				</el-table-column>
				<el-table-column
					prop="name"
					label="分类名称"
					align="center">
				</el-table-column>
				<el-table-column
					prop="level"
					label="级别"
					align="center"
					width="100">
				</el-table-column>
				<el-table-column
					prop="productCount"
					label="商品数量"
					align="center"
					width="100">
				</el-table-column>
				<el-table-column
					prop="productUnit"
					label="数量单位"
					align="center"
					width="100">
				</el-table-column>
				<el-table-column
					label="导航栏"
					align="center"
					width="100">
					<template slot-scope="scope">
						<el-switch
							@change="updateProductCate(scope.row)"
							:active-value="1"
							:inactive-value="0"
							v-model="scope.row.navStatus">
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column
					label="是否显示"
					align="center"
					width="100">
					<template slot-scope="scope">
						<el-switch
							:active-value="1"
							:inactive-value="0"
							v-model="scope.row.showStatus">
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column
					prop="sort"
					label="排序"
					align="center"
					width="100">
				</el-table-column>
				<el-table-column
					label="设置"
					align="center"
					width="200">
					<template slot-scope="scope">
						<el-button 
							size="small"
							@click="showSubordinate">查看下级</el-button>
						<el-button 
							size="small"
							@click="transferProduct">转移商品</el-button>
					</template>
				</el-table-column>
				<el-table-column
					fixed="right"
					label="操作"
					width="150"
					align="center">
					<template slot-scope="scope">
						<el-button 
							size="small"
							@click="editProductCate(scope.row)">编辑</el-button>
						<el-button 
							size="small" 
							type="danger"
							@click="delteProductCate(scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div
			style="margin-top: 20px; float: right;">
			<el-pagination
				@size-change="updateSize"
				@current-change="updatePage"
			  background
			  layout="sizes,total,slot,prev, pager, next, jumper, ->"
				:page-sizes="[5,10,15]"
			  :total="pageObj.total"
				:pager-count="5"
				:page-size="size">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import {selectList} from '@/api/productCate.js'
	export default{
		data(){
			return {
				pageObj: {},
				size: 5,
				page: 1,
			}
		},
		methods: {
			//修改
			updateProductCate(productCate){
				console.log(productCate)
			},
			//添加
			AddProductCate(){
				console.log("添加")
			},
			showSubordinate(){
				console.log("查看下级")
			},
			transferProduct(){
				console.log("转移商品")
			},
			editProductCate(productCate){
				console.log(productCate)
			},
			delteProductCate(productCate){
				console.log(productCate)
			},
			updateSize(val){
				this.size = val
				this.findList(this.page,this.size)
			},
			updatePage(val){
				this.page = val
				this.findList(this.page,this.size);
			},
			//分页查询
			findList(page,size){
				selectList(0,page,size).then(response => {
					console.log(response);
					this.pageObj = response.data.data;
					console.log(response.data.data.list);
				})
			}
		},
		created(){
			this.findList(1,this.size);
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
