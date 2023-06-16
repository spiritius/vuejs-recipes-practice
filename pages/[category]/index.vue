<template>
	<h1 class="mb-4">{{ categoryTitle }}</h1>
	<TheAlert />
	<div
		v-if="recipes.category.length > 0"
		class="row">
		<CardMeal
			v-for="meal of recipes.category"
			:key="meal.idMeal"
			:meal="meal" />
	</div>
</template>

<script setup>
	const recipes = useRecipes();
	const route = useRoute();
	const categoryTitle =
		route.params.category.charAt(0).toUpperCase() +
		route.params.category.slice(1);

	recipes.getCategory(route.params.category);
</script>

<style lang="scss" scoped></style>
