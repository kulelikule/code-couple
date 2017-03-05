<template>
	<div>
		<v-nav :items="navItems"></v-nav>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import Nav from  '../components/Nav';
	
	export default {
		computed: Vuex.mapState({
			navItems: state => state.nav.items
		}),
		components: {
			'v-nav': Nav
		}
	}
</script>