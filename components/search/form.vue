<template>
	<form
		class="input-group"
		@submit.prevent="recipes.searchFormSubmit(query)">
		<input
			type="text"
			class="form-control"
			name="query"
			v-model="query" />
		<button
			class="btn btn-dark"
			type="submit">
			Search
		</button>
	</form>
</template>

<script setup>
	const recipes = useRecipes();
	let query;
</script>

<style lang="scss" scoped>
	button[type='submit'] {
		width: 80px;
	}
</style>
