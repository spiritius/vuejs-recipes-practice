import { defineStore } from 'pinia';

export const useRecipes = defineStore('recipes', () => {
	const router = useRouter();

	const API_URL = 'https://www.themealdb.com/api/json/v1/1/';
	const categories = ref([]);
	const category = ref([]);
	const meal = ref([]);
	const mealIngridients = ref([]);
	const mealToFav = ref({});
	const mealCrumbs = ref({});
	const searchData = ref([]);
	const loading = ref(false);
	const searchQuery = ref('');
	const favoriteList = ref([]);
	const alert = ref(false);
	const alertMessage = ref('');

	const getCategories = async () => {
		loading.value = true;
		const response = await fetch(API_URL + 'categories.php');
		if (!response.ok) {
			alertMessage.value = `Fetching error: ${response.status}. Try again please`;
			alert.value = true;
			loading.value = false;
			throw new Error();
		}
		const data = await response.json();
		alert.value = false;
		loading.value = false;
		alertMessage.value = '';
		return data.categories;
	};

	getCategories()
		.then((data) => {
			categories.value = data;
			category.value = [];
			loading.value = false;
			alert.value = false;
		})
		.catch((error) => {
			console.log(error);
		});

	const getCategory = async (name: String) => {
		loading.value = true;
		fetch(API_URL + 'filter.php?c=' + name)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('API server did not answer.');
			})
			.then((responseJson) => {
				if (responseJson.meals) {
					loading.value = false;
					return (category.value = responseJson.meals);
				}
				throw new Error('There is no such category.');
			})
			.catch((error) => {
				alertMessage.value = `${error.message} Try again please`;
				alert.value = true;
				console.log(error);
			});
	};

	const getMeal = async (id: Number) => {
		loading.value = true;
		meal.value = [];
		mealIngridients.value = [];
		mealCrumbs.value = [];

		return fetch(API_URL + 'lookup.php?i=' + id)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('API server did not answer.');
			})
			.then((responseJSON) => {
				if (responseJSON.meals !== null) {
					loading.value = false;
					meal.value = responseJSON.meals[0];
					getIngridients();
					mealToFav.value = {
						idMeal: meal.value.idMeal,
						strMeal: meal.value.strMeal,
						strMealThumb: meal.value.strMealThumb,
					};
					mealCrumbs.value = [
						{ id: 0, title: 'Index', link: '/' },
						{
							id: 1,
							title: meal.value.strCategory,
							link: '/' + meal.value.strCategory.toLowerCase(),
						},
					];
					return meal.value;
				}

				throw new Error('There is no such meal.');
			})
			.catch((error) => {
				alertMessage.value = `${error.message} Try again please`;
				alert.value = true;
				console.log(error);
			});
	};

	const searchFormSubmit = (query: string) => {
		searchQuery.value = query;
		router.push({ path: '/search', query: { q: searchQuery.value } });
		searchRecipe();
	};

	const searchRecipe = async () => {
		const response = await fetch(
			API_URL + 'search.php?s=' + searchQuery.value
		);
		const data = await response.json();
		searchData.value = data.meals;
		return data.meals;
	};

	const addFavorite = (mealFav: any) => {
		const index = favoriteList.value.findIndex(
			(item: any) => item.idMeal === mealFav.idMeal
		);
		if (index < 0) {
			favoriteList.value.push(mealFav);
		} else {
			favoriteList.value = favoriteList.value.filter(
				(item) => item.idMeal !== mealFav.idMeal
			);
		}
	};

	const getIngridients = () => {
		Object.keys(meal.value).map((key) => {
			const temp: Object = {};
			const id: String = key.slice(13);

			if (key.includes('Ingredient') && meal.value[key]) {
				temp.id = id;
				temp.title = meal.value[key];
				temp.measure = meal.value[`strMeasure${id}`];
				mealIngridients.value.push(temp);
			}
		});
	};

	return {
		categories,
		category,
		meal,
		searchData,
		loading,
		searchQuery,
		favoriteList,
		mealIngridients,
		mealToFav,
		mealCrumbs,
		alert,
		alertMessage,
		getCategories,
		getCategory,
		getMeal,
		searchFormSubmit,
		searchRecipe,
		addFavorite,
		getIngridients,
	};
});
