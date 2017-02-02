<template>
	<div>
		<kas-nav :items="navItems"></kas-nav>
		<div class="container page-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import Nav from  '../components/nav';
	
	export default {
		data() {
			return Vuex.mapState({
				navItems: state => state.nav.items
			});
		},
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