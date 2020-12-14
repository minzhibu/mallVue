<template>
  <div class="home">
		<h1>你好!</h1>
		<mall-aside></mall-aside>
  </div>
</template>

<script>
// @ is an alias to /src
import MallAside from '@/components/layout/MallAside.vue'
export default {
  name: 'Home',
  components: {
		MallAside
  }
}
</script>
<style>
	*{
		padding: 0px;
		margin: 0px;
	}
</style>
