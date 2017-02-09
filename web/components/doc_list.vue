<template>
	<div class="doc-list">
		<div class="list-title">
			<slot name="header"></slot>
		</div>
		<div class="list-content">
			<ul>
				<li v-for="item in items">
					<span>{{item.title}}</span>
					<span>{{item.time}}</span>
				</li>
			</ul>
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
	
</style>