import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		appHeader:'This is my first svelte app'
	}
});

export default app;
