import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Devendra -  1st Svelte App',
		age: 37
	}
});

export default app;
