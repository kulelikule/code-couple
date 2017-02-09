<template>
	<div>
		<kas-nav :items="navItems"></kas-nav>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import Nav from  '../components/nav';
	
	export default {
		computed: Vuex.mapState({
			navItems: state => state.nav.items
		}),
		components: {
			'kas-nav': Nav
		}
	}
</script>

<style>

</style>