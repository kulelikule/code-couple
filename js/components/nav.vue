<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">codeCouple</a>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
				<ul class="nav navbar-nav">
					<router-link tag="li" v-for="item in items" :to='item.url'>
						<a>{{item.name}}</a>
					</router-link>
				</ul>
			</div>
		</div>
	</nav>
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
