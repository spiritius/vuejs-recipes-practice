<template>
	<div class="d-flex justify-content-center">
		<div
			:class="[
				'spinner-border',
				props.size === 'small' ? 'spinner-border-sm' : '',
			]"
			role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		size: String,
	});
</script>

<style lang="scss" scoped></style>
