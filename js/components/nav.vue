<template>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Brand</a>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
				<ul class="nav navbar-nav">
					<li class="active">
						<router-link to='/'>首页</router-link>
					</li>
					<li>
						<router-link to='/child'>子页面</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>