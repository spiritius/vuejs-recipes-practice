<template>
	<button
		:class="['card-fav', status ? 'active' : '']"
		type="button"
		:title="status ? 'Remove from Favs' : 'Add to Favs'"
		@click="toggleFav()">
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
		</svg>
	</button>
</template>

<script setup>
	import { ref } from 'vue';

	const recipes = useRecipes();
	let status = ref(props.isActive);

	const props = defineProps({
		meal: {
			type: Object,
			default: () => {},
		},
		category: {
			type: String,
			default: () => {},
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	});

	let index = recipes.favoriteList.findIndex(
		(item) => item.idMeal === props.meal.idMeal
	);
	if (index >= 0) {
		status.value = true;
	}

	function toggleFav() {
		let meal = {
			idMeal: props.meal.idMeal,
			strMeal: props.meal.strMeal,
			strMealThumb: props.meal.strMealThumb,
			strCategory: props.category,
		};
		status.value = !status.value;
		recipes.addFavorite(meal);
	}
</script>

<style lang="scss" scoped>
	.card-fav {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 2;
		background: #fff;
		color: #aeaeae;
		border-radius: 100%;
		border: none;
		padding: 0;
		flex: 0 0 2rem;
		width: 2rem;
		height: 2rem;
		transition: all 0.25s ease;

		&.active {
			color: #000;
		}

		svg {
			vertical-align: middle;
			fill: currentColor;
			width: 1rem;
			height: 1rem;
			margin-top: -2px;
		}
	}
</style>
