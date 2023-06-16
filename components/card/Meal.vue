<template>
	<div class="col-md-4 col-lg-3 d-flex">
		<div class="card bg-light border-light mb-3 w-100">
			<div class="card-img-wrapper">
				<img
					:src="props.meal.strMealThumb"
					class="card-img-top rounded-3"
					:alt="props.meal.strMeal" />
			</div>
			<div class="card-body">
				<h6 class="card-title">{{ props.meal.strMeal }}</h6>
			</div>
			<!-- ссылка на категорию -->
			<NuxtLink
				:to="url"
				class="card-link"></NuxtLink>
			<CardFavButton
				:meal="props.meal"
				:category="`${category}`" />
		</div>
	</div>
</template>

<script setup>
	const route = useRoute();

	const props = defineProps({
		meal: Object,
	});
	let category = '';

	if (props.meal.strCategory) {
		category = props.meal.strCategory;
	} else {
		category = route.params.category;
	}
	const url = `${category.toLowerCase()}/${props.meal.idMeal}`;
</script>

<style lang="scss" scoped>
	.card-img-wrapper {
		position: relative;
		overflow: hidden;
		height: 150px;
		padding: 0;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
</style>
