<template>
	<div class="mall-aside">
		<el-menu 
			default-active="1-4-1" 
			class="el-menu-vertical-demo" 
			@open="handleOpen" 
			@close="handleClose" 
			:collapse="isCollapse"
			background-color="#304156"
			text-color="#8dc0d1">
		  <el-submenu index="1" class="">
		    <template slot="title">
		      <i class="el-icon-location"></i>
		      <span slot="title">导航一</span>
		    </template>
				<el-menu-item class="item-background" index="1-1">
					<i class="el-icon-location"></i>
					<span style="height: 50px;width: 100%;">选项1</span>
				</el-menu-item>
				<el-menu-item class="item-background" index="1-2">选项2</el-menu-item>
				<el-menu-item class="item-background" index="1-3">选项3</el-menu-item>
		  </el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">导航二</span>
				</template>
				<el-menu-item class="item-background" index="2-1">选项1</el-menu-item>
				<el-menu-item class="item-background" index="2-2">选项2</el-menu-item>
				<el-menu-item class="item-background" index="2-3">选项3</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
	.mall-aside{
		transition: width .28s;
		width: 180px!important;
		height: 100%;
		position: fixed;
		font-size: 0;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
		background-color: #304156;
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {

	    width: 180px;
	    min-height: 400px;
	}
	.aside-item-background{
			background-color: beige;
	}
	.item-background{
		background-color: #1f2d3d!important;
	}
</style>
