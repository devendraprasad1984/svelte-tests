<script>
    import NameAge from './components/nameAge.svelte'
    export let appHeader
</script>

<div class="container">
    <h1 class="text-primary">{appHeader}</h1>
    <NameAge name="Devendra Prasad" age={38}/>
    <NameAge name="Jyoti Sharma" age={35}/>
</div>
