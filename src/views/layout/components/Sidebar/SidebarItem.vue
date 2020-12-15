<template>
	<div>
		<el-submenu index="1" class="" style="width: 180px;">
		  <template slot="title">
		    <i class="el-icon-location"></i>
		    <span  slot="title">导航一</span>
		  </template>
			<el-menu-item class="item-background" index="1-1">
				<i class="el-icon-location"></i>
				<span style="height: 50px;width: 100%;">选项1</span>
			</el-menu-item>
			<el-menu-item class="item-background" index="1-2">选项2</el-menu-item>
			<el-menu-item class="item-background" index="1-3">选项3</el-menu-item>
		</el-submenu>
		<el-submenu index="2" style="width: 180px;">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span slot="title">导航二</span>
			</template>
			<el-menu-item class="item-background" index="2-1">选项1</el-menu-item>
			<el-menu-item class="item-background" index="2-2">选项2</el-menu-item>
			<el-menu-item class="item-background" index="2-3">选项3</el-menu-item>
		</el-submenu>
	</div>
</template>

<script>
</script>

<style>
	.item-background{
			min-width: 180px !important;
			background-color: #1f2d3d !important;
	}
	.item-background:hover{
		background-color: #001528!important;
	}
</style>
