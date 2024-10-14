<script setup lang="ts"></script>

<template>
	<div>
		<h1 class="text-sm font-bold mb-8">Hello from App.vue</h1>
		<NuxtLayout>
			<header>
				<ul class="flex gap-4 text-xl uppercase mb-2">
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/events">Events</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/my-profile">My-profile</NuxtLink>
					</li>
				</ul>
			</header>
			<Header />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
