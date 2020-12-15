<template>
	<div class="app-wrapper" :class="classObj">
		<sidebar class="sidebar-container">
			<side-bar></side-bar>
		</sidebar>
	</div>
</template>

<script>
	import SideBar from './components/Sidebar/index.vue';
	
	export default{
		components:{SideBar}
	}
</script>

<style>
	.sidebar-container{
		transition: width .28s;
		width: 180px !important;
		height: 100%;
		position: fixed;
		font-size: 0px;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1001;
		overflow: hidden;
	}
</style>
