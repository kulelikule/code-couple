<template>
	<div>
		<kas-nav></kas-nav>
		<div class="container">
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