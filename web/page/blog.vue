<template>
	<div class="blog">
		<div class="blog-title">
			<h3>李佳骏&范申妮的技术博客</h3>	
		</div>
		<div class="blog-list">
			<doc-list :items="blogItems">
				<h4 slot="header">最近发表</h1>
			</doc-list>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex';
	import DocList from '../components/doc_list.vue';
	
	export default {
		computed: Vuex.mapState({
			blogItems: state => state.blogList.items
		}),
		components: {
			'doc-list': DocList
		}
	}
</script>

<style lang="less">
	@import '../less/common.less';
	.blog-title{
		border-bottom: 1px solid @line-clr;
	}
</style>