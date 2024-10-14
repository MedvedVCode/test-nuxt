<script setup>
// const route = useRoute()
// console.log("route=", route.params);
// const nuxt = useNuxtApp();
// console.log("nuxt=", nuxt);

</script>

<template>
	<h2>Hello from events/[id].vue</h2>
	<div>
		event id: {{ $route.params.id }}
	</div>
</template>