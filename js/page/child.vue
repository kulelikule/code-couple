<template>
	<div>
		<p>这是子页面</p>
		<p>数字:{{ count }}</p>
	</div>
</template>

<script>
	export default {
		computed: {
			count() {
				return this.$store.state.child.count
			}
		}
	}
</script>