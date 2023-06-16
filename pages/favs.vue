<template>
	<div>
		<!-- pages/favs -->
		<h1 class="mb-4">Favorites</h1>
		<div
			class="row"
			v-if="recipes.favoriteList.length > 0">
			<CardMeal
				v-for="meal of recipes.favoriteList"
				:key="meal.idMeal"
				:meal="meal" />
		</div>
		<div
			v-else
			class="py-2 px-3 bg-light rounded-3 mb-4">
			There is no any recipe yet.
		</div>
	</div>
</template>

<script setup>
	const recipes = useRecipes();
</script>

<style lang="scss" scoped></style>
