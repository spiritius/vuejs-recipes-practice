<template>
	<div>
		<!-- pages/search -->
		<h1 class="mb-4">
			Search results: <mark>{{ recipes.searchQuery }}</mark>
		</h1>
		<TheSpinner v-if="recipes.loading" />
		<div>
			<div
				class="row"
				v-if="recipes.searchData.length > 0">
				<CardMeal
					v-for="meal of recipes.searchData"
					:key="meal.idMeal"
					:meal="meal" />
			</div>
			<div
				v-else
				class="py-2 px-3 bg-light rounded-3 mb-4">
				There are no any results.
			</div>
		</div>
	</div>
</template>

<script setup>
	const recipes = useRecipes();
	const route = useRoute();

	onMounted(() => {
		if (recipes.searchQuery === '') {
			recipes.searchQuery = route.query.q;
			recipes.searchRecipe();
		}
	});
</script>

<style lang="scss" scoped></style>
