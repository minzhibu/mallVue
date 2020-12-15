<template>
	<scroll-bar>
		<el-menu
		  mode="vertical"
		  :show-timeout="200"
		  :collapse="isCollapse"
		  background-color="#304156"
		  text-color="#bfcbd9"
		  active-text-color="#409EFF"
		>
		  <sidebar-item ></sidebar-item>
		</el-menu>
	</scroll-bar>
</template>

<script>
	import ScrollBar from '@/components/ScrollBar'
	import SidebarItem from './SidebarItem'
	export default{
		components: {ScrollBar,SidebarItem},
		data(){
			return {
				isCollapse: false
			}
		}
	}
</script>

<style>
</style>
