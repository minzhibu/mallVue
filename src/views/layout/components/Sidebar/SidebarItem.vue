<template>
	<div>
		<template v-for="(item, i) in routers">
			<el-submenu index="1" class="" style="width: 180px;" :key="'side_pre_'+i">
			  <template slot="title">
					<svg-icon :icon-class="item.icon"></svg-icon>
			    <span  slot="title">{{item.title}}</span>
			  </template>
				<template v-for="(child,j) in item.child">
					<el-menu-item class="item-background" :index="i+'-'+j">
						<svg-icon :icon-class="child.icon"></svg-icon>
						<span style="height: 50px;width: 100%;">{{child.title}}</span>
					</el-menu-item>
				</template>
				
				
			</el-submenu>
		</template>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				routers: [
					{
						"title":"商品",
						"name":"pms",
						"icon":"product",
						"hidden":0,
						child: [{
							"title":"商品列表",
							"name":"product",
							"icon":"product",
							"hidden":0,
						},
						{
							"title":"添加商品",
							"name":"addProduct",
							"icon":"product",
							"hidden":0,
						},
						{
							"title":"商品分类",
							"name":"productCate",
							"icon":"product",
							"hidden":0,
						},
						{
							"title":"商品类型",
							"name":"productAttr",
							"icon":"product",
							"hidden":0,
						},
						{
							"title":"品牌管理",
							"name":"brand",
							"icon":"product",
							"hidden":0,
						}]
					}
				],
				product: "product"
			}
		}
	}
</script>

<style>
	.item-background{
			min-width: 180px !important;
			background-color: #1f2d3d !important;
	}
	.item-background:hover{
		background-color: #001528!important;
	}
  .svg-icon{
    margin-right: 16px;
  }
</style>
