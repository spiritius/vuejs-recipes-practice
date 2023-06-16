<template>
	<main>
		<TheHeader />
		<div class="container my-4 flex-fill">
			<slot />
		</div>
		<TheFooter />
	</main>
</template>

<style scoped>
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
