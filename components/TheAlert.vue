<template>
	<div
		v-if="recipes.alert"
		class="alert alert-dark"
		role="alert">
		{{ recipes.alertMessage }}
	</div>
</template>

<script setup>
	const recipes = useRecipes();
</script>

<style lang="scss" scoped></style>
