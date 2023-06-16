<template>
	<div class="header container my-2">
		<nav class="navbar navbar-expand-lg bg-warning bg-opacity-75 rounded-2">
			<div
				class="container-fluid flex-column align-items-start align-items-md-center flex-md-row">
				<NuxtLink
					class="navbar-brand"
					to="/"
					>Recipes Stock</NuxtLink
				>
				<div class="mt-2 mt-sm-0 d-flex align-items-center">
					<NuxtLink
						to="/favs"
						class="me-2 text-black"
						>Favs</NuxtLink
					>
					<SearchForm />
				</div>
			</div>
		</nav>
	</div>
</template>
