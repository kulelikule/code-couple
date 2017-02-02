<template>
	<div>
		<p>这是子页面</p>
		<p>数字:{{ doubleCountHome }}</p>
		<div @click="add">增加</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	
	export default {
		methods: Vuex.mapActions({
			add: 'incrementCount'
		}),
		computed: Vuex.mapGetters(['doubleCountHome'])
	}
</script>