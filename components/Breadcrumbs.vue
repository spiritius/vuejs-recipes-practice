<template>
	<div class="py-2 px-3 bg-light rounded-3 mb-4">
		<ul class="m-0 list-unstyled small">
			<li
				v-for="item of props.crumbs"
				:key="item.id">
				<NuxtLink
					:to="item.link"
					:title="item.title"
					class="text-black">
					{{ item.title }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
	const props = defineProps({
		crumbs: Array,
		required: false,
		default: () => {},
	});
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;

		> li:not(:first-child) {
			&:before {
				content: '/';
				display: inline-block;
				margin: 0 1rem;
				color: var(--bs-gray-500);
			}
		}
	}
</style>
