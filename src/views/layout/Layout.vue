<template>
	<div class="app-wrapper">
		<sidebar class="sidebar-container">
			<side-bar></side-bar>
		</sidebar>
		<div class="main-container">
		  <navbar></navbar>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
	
	export default{
		components:{
			Navbar,
			Sidebar,
			AppMain
		}
	}
</script>

<style>
	*{
		padding: 0px;
		margin: 0px;
	}
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
	.main-container{
		min-height: 100%;
		transition: margin-left .28s;
		margin-left: 180px;
	}   
</style>
