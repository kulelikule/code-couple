<template>
	<div>
		<kas-nav></kas-nav>
		<div class="container page-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Nav from  '../components/nav';
	export default {
		components: {
			'kas-nav': Nav
		}
	}
</script>

<style>
	.page-container{
		padding: 100px;
	}
</style>