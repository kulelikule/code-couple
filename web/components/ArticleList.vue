<template>
	<div class="article-list">
		<div class="list-title">
			<slot name="header"></slot>
		</div>
		<div class="list-group">
			<router-link v-for="item in items" :to="item.url" class="list-group-item">
				<span>{{item.title}}</span>
				<span class="pull-right">{{item.time}}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style lang="less">
	.article-list{
		.list-title {
			padding: 0 5px;
		}
	}
</style>