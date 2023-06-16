<template>
	<div>
		<!-- pages/index -->
		<TheSpinner v-if="recipes.loading" />
		<TheAlert />
		<div class="row">
			<CardCategory
				v-for="category of recipes.categories"
				:key="category.idCategory"
				:category="category" />
		</div>
	</div>
</template>

<script setup>
	const recipes = useRecipes();
</script>
