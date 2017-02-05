<template>
	<div>
		<kas-nav :items="navItems" @swicthPage="swicthPage"></kas-nav>
		<div class="container page-container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import Nav from  '../components/nav';
	import types from '../store/types';
	
	export default {
		computed: Vuex.mapState({
			navItems: state => state.nav.items
		}),
		methods: {
			swicthPage(payload) {
				this.$store.dispatch(types.NAV_SWITCH, payload);
			}
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