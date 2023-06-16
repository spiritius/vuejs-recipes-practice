<template>
	<div class="col-md-4 col-lg-3 d-flex">
		<div class="card bg-light border-light mb-3">
			<div class="card-img-wrapper">
				<img
					:src="category.strCategoryThumb"
					class="card-img-top rounded-3"
					:alt="category.strCategory" />
			</div>
			<div class="card-body">
				<h5 class="card-title">{{ category.strCategory }}</h5>
				<p class="card-text small">
					{{
						category.strCategoryDescription.length > 120
							? category.strCategoryDescription.substr(0, 120) +
							  '...'
							: category.strCategoryDescription
					}}
				</p>
			</div>
			<NuxtLink
				:to="`/${category.strCategory.toLowerCase()}`"
				class="card-link"></NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		category: Object,
		default: () => {},
	});
</script>

<style lang="scss">
	.card {
		position: relative;
		transition: all 0.25s ease;

		&:hover,
		&:active {
			background-color: #00000010 !important;
		}
	}
	.card-img-wrapper {
		height: 115px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.75rem;

		img {
			max-height: 100%;
			width: auto;
		}
	}
	.card-link {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		cursor: pointer;
	}
</style>
