<template>
	<div>
		<Breadcrumbs :crumbs="mealCrumbs" />
		<TheAlert v-if="recipes.alert" />
		<div v-else>
			<div class="meal-header">
				<h1 class="mb-0">{{ meal.strMeal }}</h1>
				<CardFavButton
					:meal="mealToFav"
					:category="meal.strCategory" />
			</div>
			<p class="text-muted">
				<small>Cuisine: {{ meal.strArea }}</small>
			</p>
			<div class="row my-4">
				<div class="col-12 col-md-6">
					<h6>Ingredients:</h6>
					<table class="table table-sm small">
						<tbody>
							<tr
								v-for="item of mealIngridients"
								:key="item.id">
								<td>
									<strong>{{ item.title }}</strong>
								</td>
								<td class="text-end">{{ item.measure }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div
					class="col-12 col-md-6"
					v-if="meal.strMealThumb">
					<figure>
						<img
							class="img-fluid img-fluid rounded-3"
							:src="meal.strMealThumb"
							:alt="meal.strMeal" />
						<figcaption v-if="meal.strImageSource">
							{{ meal.strImageSource }}
						</figcaption>
					</figure>
				</div>
			</div>
			{{ meal.strInstructions }}
		</div>
	</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';

	const recipes = useRecipes();
	const route = useRoute();

	recipes.getMeal(route.params.id);

	const { meal, mealIngridients, mealToFav, mealCrumbs } =
		storeToRefs(recipes);
</script>

<style lang="scss" scoped>
	.meal-header {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.card-fav {
			position: relative;
			top: auto;
			right: auto;
			margin-bottom: -6px;
			margin-left: 0.5rem;
			background: var(--bs-light);
		}
	}
</style>
